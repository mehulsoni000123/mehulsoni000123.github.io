#!/usr/bin/env python3
"""Build the SONIKA site.

Released guides live in two places:
  days/NN/            public, already released (in this repo)
  <vault>/days/NN/    private vault repo; released only when <vault>/schedule.json says so

Usage:
  python3 scripts/build.py --out _site [--vault vault]   # full build for GitHub Pages
  python3 scripts/build.py --index-only                  # rewrite days.json for the public days in this repo
"""
import argparse, datetime as dt, json, pathlib, shutil, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
SKIP = {".git", ".github", "scripts", "_site", "vault", "node_modules"}


def load_schedule(vault):
    f = vault / "schedule.json" if vault else None
    if not f or not f.exists():
        return {}
    raw = json.loads(f.read_text(encoding="utf-8"))
    return {int(k): dt.datetime.fromisoformat(v) for k, v in raw.items() if not k.startswith("_")}


def entry(folder, date=None):
    d = json.loads((folder / "day.json").read_text(encoding="utf-8"))
    if date:
        d["date"] = date.isoformat()
    files = d.get("files") or []
    return d, {
        "day": d["day"],
        "title": d["title"],
        "summary": d.get("summary", ""),
        "date": d.get("date", ""),
        "app": d.get("app"),
        "prompts": len(d.get("prompts") or []),
        "skill": any("SKILL.md" in f.get("path", "") or f.get("path", "").endswith(".zip") for f in files),
    }


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--out")
    ap.add_argument("--vault")
    ap.add_argument("--index-only", action="store_true")
    ap.add_argument("--now", help="ISO time, for testing")
    a = ap.parse_args()
    now = dt.datetime.fromisoformat(a.now) if a.now else dt.datetime.now(dt.timezone.utc)
    vault = pathlib.Path(a.vault) if a.vault and pathlib.Path(a.vault).is_dir() else None
    schedule = load_schedule(vault)

    out = ROOT if a.index_only else pathlib.Path(a.out)
    if not a.index_only:
        if out.exists():
            shutil.rmtree(out)
        out.mkdir(parents=True)
        for p in ROOT.iterdir():
            if p.name in SKIP:
                continue
            (shutil.copytree if p.is_dir() else shutil.copy2)(p, out / p.name)

    index = {}
    # public days already in this repo
    for f in sorted((ROOT / "days").glob("[0-9][0-9]")):
        if (f / "day.json").exists():
            d, e = entry(f)
            index[d["day"]] = e
    # vault days whose release time has passed
    if vault and (vault / "days").is_dir() and not a.index_only:
        for f in sorted((vault / "days").glob("[0-9][0-9]")):
            n = int(f.name)
            when = schedule.get(n)
            if not when or when > now or not (f / "day.json").exists():
                continue
            d, e = entry(f, when)
            dest = out / "days" / f.name
            if dest.exists():
                shutil.rmtree(dest)
            shutil.copytree(f, dest)
            (dest / "day.json").write_text(json.dumps(d, ensure_ascii=False, indent=1), encoding="utf-8")
            index[n] = e

    days = [index[k] for k in sorted(index)]
    (out / "days.json").write_text(json.dumps({"days": days}, ensure_ascii=False, indent=1), encoding="utf-8")
    (out / "released.txt").write_text(",".join(str(d["day"]) for d in days) + "\n", encoding="utf-8")
    pending = sorted(k for k, v in schedule.items() if v > now)
    print("released:", ",".join(str(d["day"]) for d in days))
    print("waiting in vault:", ",".join(str(k) for k in pending) or "none")


if __name__ == "__main__":
    sys.exit(main())
