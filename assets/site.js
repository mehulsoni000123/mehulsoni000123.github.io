/* SONIKA site script. Edit the CONFIG block to change apps, donate or socials. */
const CONFIG = {
  apps: [
    {
      id: "downloader",
      name: "Sonika Video Downloader",
      status: "v1.0.0 · Windows 10/11 · Free",
      blurb: "Paste a YouTube, Instagram or Pinterest link, pick the quality, done. Video or audio only, batch and playlist downloads. Runs on your own PC, no ads, no login.",
      chips: ["YouTube", "Instagram", "Pinterest", "Up to 4K", "Open source"],
      download: "https://github.com/mehulsoni000123/Sonika/releases/latest/download/Sonika-Downloader-Setup-1.0.0-x64.exe",
      size: "about 193 MB",
      drive: "",
      source: "https://github.com/mehulsoni000123/Sonika",
      day: 22
    },
    {
      id: "framefinder",
      name: "Sonika FrameFinder",
      status: "v0.1.0 · Windows 10/11 · Free",
      blurb: "Type what you are making and get real reference cards for your edit from Pinterest, Behance, Dribbble and 20+ sites. Paste a screenshot to find more like it.",
      chips: ["Editing references", "Pinterest + 20 sites", "Screenshot search", "Open source"],
      download: "https://github.com/mehulsoni000123/SonikaFrameFinder/releases/latest/download/Sonika-FrameFinder-Setup-0.1.0-x64.exe",
      size: "about 116 MB",
      drive: "",
      source: "https://github.com/mehulsoni000123/SonikaFrameFinder",
      day: 23
    },
    {
      id: "converter",
      name: "Sonika Converter",
      status: "v1.0.0 · Windows 11 · Free",
      blurb: "One wheel for everyday conversions: video to audio, transcripts, PDF tools, Word and Office to PDF, video and image tools. Works fully offline.",
      chips: ["Radial wheel", "Video to audio", "PDF tools", "Transcripts", "Offline", "Open source"],
      download: "https://github.com/mehulsoni000123/SonikaConverter/releases/latest/download/Sonika-Converter-1.0.0-win-x64.zip",
      note: "Unzip anywhere and open Sonika Converter.exe. No installer needed.",
      size: "a zip, about 176 MB",
      source: "https://github.com/mehulsoni000123/SonikaConverter"
    },
    {
      id: "taskmanager",
      name: "Sony Task Manager",
      status: "v1.0.0 · Windows 10/11 · Free",
      blurb: "A small glass widget that keeps background apps under control. It groups what is running and closes what you don't need, with a safety wall so Windows and your unsaved work stay safe.",
      chips: ["Glass widget", "Modes", "Safety wall", "Open source"],
      download: "https://github.com/mehulsoni000123/SonyTaskManager/releases/latest/download/Sony-Task-Manager-1.0.0-win-x64.zip",
      note: "Unzip anywhere and open Sony Task Manager.exe. No installer needed.",
      size: "a zip, about 169 MB",
      source: "https://github.com/mehulsoni000123/SonyTaskManager"
    },
    {
      id: "sender",
      name: "Sony Ka Sender",
      status: "v1.0.0 · Android + Windows · Free",
      blurb: "Flick photos, videos and files from your phone to your PC over your own Wi-Fi. Nothing goes through the internet.",
      chips: ["Phone to PC", "Same Wi-Fi", "No cloud", "Open source"],
      download: "https://github.com/mehulsoni000123/SonyKaSender/releases/latest/download/SonyKaSender.apk",
      dlLabel: "Download Android app (APK)",
      download2: "https://github.com/mehulsoni000123/SonyKaSender/releases/latest/download/Sony-Ka-Sender-PC-1.0.0.zip",
      dl2Label: "Download PC receiver (zip)",
      note: "You need both: the APK on your phone and the PC receiver (needs Node.js). Steps are on the source page.",
      size: "APK under 1 MB",
      source: "https://github.com/mehulsoni000123/SonyKaSender"
    },
    {
      id: "storyteller",
      name: "Sonika Storyteller",
      status: "Source code · Windows · Free",
      blurb: "Reads your script aloud in your own cloned voice, fully offline on your PC, using the open-source Chatterbox model. Developer-style: needs Python and ideally an NVIDIA card.",
      chips: ["Your own voice", "English + Hindi", "Offline", "Open source"],
      download: "https://github.com/mehulsoni000123/SonikaStoryteller",
      dlLabel: "Get it on GitHub",
      note: "No installer. The setup steps are in the README on GitHub. Only clone your own voice, or a voice you have permission to use.",
      source: "https://github.com/mehulsoni000123/SonikaStoryteller"
    }
  ],
  donate: { upiQr: "upi-qr.png", holder: "MEHUL SONI", razorpay: "" },
  social: [
    { label: "Instagram", handle: "@mehuledits.ai", url: "https://instagram.com/mehuledits.ai" },
    { label: "Main Instagram", handle: "@mehul_sonyteller", url: "https://instagram.com/mehul_sonyteller" },
    { label: "YouTube", handle: "@mehul_sonyteller", url: "https://youtube.com/@mehul_sonyteller" }
  ]
};

const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const $ = s => document.querySelector(s);
const page = document.body.dataset.page;
const dayLabel = d => d === 0 ? "Trailer" : "Day " + d;
const pad = d => String(d).padStart(2, "0");

/* header + footer */
$("#hdr").innerHTML = `<div class="wrap nav">
  <a class="mark" href="./"><span class="rec" aria-hidden="true"></span>SONIKA</a>
  <nav class="navlinks" aria-label="Main">
    <a href="downloads.html"${page==="downloads"?' aria-current="page"':""}>Downloads</a>
    <a href="./#guides"${page==="guide"?' aria-current="page"':""}>Guides</a>
    <a class="hide-s" href="./#about">About</a>
    <a class="navdonate" href="./#donate">Donate</a>
  </nav></div>`;
$("#ftr").innerHTML = `<div class="wrap foot">
  <span>© 2026 Mehul Soni · Not affiliated with Anthropic.</span>
  <span>Only download videos you own or have permission to use.</span></div>`;

/* app cards (home + downloads page) */
function appCard(a) {
  const drive = a.drive ? `<a class="btn" href="${esc(a.drive)}" target="_blank" rel="noopener">Download from Google Drive</a>` : "";
  const second = a.download2 ? `<a class="btn primary" href="${esc(a.download2)}">${esc(a.dl2Label || "Download")}</a>` : "";
  const how = a.day != null ? `<a class="btn ghost" href="guide.html?d=${a.day}">How it works</a>` : "";
  const fine = a.note
    ? `${esc(a.note)}${a.size ? " (" + esc(a.size) + ")" : ""} Windows may warn on first run because the app isn't code-signed: click <b>More info → Run anyway</b>.`
    : `The installer downloads straight away (${esc(a.size)}). Windows may warn on first run because the app isn't code-signed: click <b>More info → Run anyway</b>.`;
  return `<article class="app" id="${a.id}"><div class="app-in">
    <span class="status"><span class="rec" aria-hidden="true"></span>${esc(a.status)}</span>
    <h3>${esc(a.name)}</h3>
    <p class="sub" style="margin:0">${esc(a.blurb)}</p>
    <div class="chips">${a.chips.map(c => `<span class="chip">${esc(c)}</span>`).join("")}</div>
    <div class="dl">
      <a class="btn primary" href="${esc(a.download)}">${esc(a.dlLabel || "Download for Windows")}</a>${second}
      <div class="dl-row">${drive}<a class="btn ghost" href="${esc(a.source)}" target="_blank" rel="noopener">Source code</a>${how}</div>
    </div>
    <p class="fine">${fine}</p>
  </div></article>`;
}
const appsEl = $("#appList");
if (appsEl) appsEl.innerHTML = CONFIG.apps.map(appCard).join("");

/* load the list of released guides */
async function loadDays() {
  try { const r = await fetch("days.json", { cache: "no-store" }); if (!r.ok) throw 0; return (await r.json()).days || []; }
  catch (e) { return []; }
}
const kindTags = d => {
  const t = [];
  if (d.app) t.push('<span class="kind hot">App</span>');
  if (d.prompts) t.push(`<span class="kind">${d.prompts} prompt${d.prompts>1?"s":""}</span>`);
  if (d.skill) t.push('<span class="kind hot">Skill</span>');
  if (!t.length) t.push('<span class="kind">Story</span>');
  return t.join("");
};

/* HOME */
if (page === "home") {
  const D = CONFIG.donate;
  $("#donWrap").innerHTML =
    `<div class="dcard"><h3>UPI</h3><p>Scan with any UPI app. No fees.</p>
      <img class="qr" src="${esc(D.upiQr)}" alt="UPI QR code">
      <div class="holder"><span>Account holder</span><strong>${esc(D.holder)}</strong></div></div>` +
    (D.razorpay
      ? `<div class="dcard"><h3>Card, netbanking or UPI</h3><p>Secure checkout by Razorpay. Pick any amount.</p><a class="btn primary" href="${esc(D.razorpay)}" target="_blank" rel="noopener">Donate with Razorpay</a></div>`
      : `<div class="dcard"><h3>Card, netbanking or UPI</h3><p>Secure checkout by Razorpay. Pick any amount.</p><div class="soon">Coming soon</div></div>`);
  $("#social").innerHTML = CONFIG.social.map(s => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}<span>${esc(s.handle)}</span></a>`).join("");

  loadDays().then(days => {
    days.sort((a, b) => b.day - a.day);
    const latest = days[0];
    $("#quick").innerHTML = [
      ["downloads.html", "Download apps", CONFIG.apps.length + " free Windows apps"],
      [latest ? "guide.html?d=" + latest.day : "#guides", latest ? "Today: " + dayLabel(latest.day) : "Free guides", latest ? latest.title : "Day by day"],
      ["#guides", "All guides", days.length + " days of prompts + skills"],
      ["#donate", "Donate", "Optional, UPI"]
    ].map(([h, t, d]) => `<a href="${h}"><strong>${esc(t)}</strong><span>${esc(d)}</span></a>`).join("");

    const log = $("#log");
    const render = q => {
      const t = q.trim().toLowerCase();
      const list = days.filter(d => !t || (dayLabel(d.day) + " " + d.title + " " + (d.summary || "")).toLowerCase().includes(t));
      log.innerHTML = list.length ? list.map((d, i) => `<li><a href="guide.html?d=${d.day}">
        <span class="day">${esc(dayLabel(d.day))}</span>
        <span class="gt">${esc(d.title)}${!t && i === 0 ? '<span class="new">new!</span>' : ""}</span>
        <span class="kinds">${kindTags(d)}</span></a></li>`).join("")
        : `<li class="empty">${days.length ? `Nothing matches "${esc(q)}". Try another word.` : "Guides are loading. Refresh in a moment."}</li>`;
    };
    render("");
    $("#q").addEventListener("input", e => render(e.target.value));
  });
}

/* GUIDE PAGE */
if (page === "guide") {
  const n = parseInt(new URLSearchParams(location.search).get("d"), 10);
  const root = $("#guide");
  const notFound = () => {
    root.innerHTML = `<div class="block"><h1 class="page">This guide isn't out yet</h1>
      <p class="lead">Each guide goes live when its reel is posted. Check back after the reel, or browse the guides that are already out.</p>
      <div class="ctas"><a class="btn primary" href="./#guides">All guides</a></div></div>`;
    document.title = "Guide · SONIKA";
  };
  Promise.all([loadDays(), Number.isFinite(n) ? fetch(`days/${pad(n)}/day.json`, { cache: "no-store" }).then(r => r.ok ? r.json() : null).catch(() => null) : null])
    .then(([days, d]) => {
      if (!d) return notFound();
      document.title = `${dayLabel(d.day)}: ${d.title} · SONIKA`;
      const base = `days/${pad(d.day)}/`;
      const app = d.app && CONFIG.apps.find(a => a.id === d.app);
      const posted = d.date ? new Date(d.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : "";
      const nums = days.map(x => x.day).sort((a, b) => a - b);
      const i = nums.indexOf(d.day);
      const prev = i > 0 ? nums[i - 1] : null, next = i >= 0 && i < nums.length - 1 ? nums[i + 1] : null;
      root.innerHTML = `
        <div class="block">
          <div class="crumbs"><a href="./#guides">← All guides</a></div>
          <div class="tag"><span class="rec" aria-hidden="true"></span>${esc(dayLabel(d.day))}${posted ? " · " + esc(posted) : ""}</div>
          <h1 class="page">${esc(d.title)}</h1>
          ${d.summary ? `<p class="lead">${esc(d.summary)}</p>` : ""}
        </div>
        ${app ? `<section style="padding-block:28px 0"><div class="apps" style="grid-template-columns:1fr">${appCard(app)}</div></section>` : ""}
        ${d.steps && d.steps.length ? `<section style="padding-block:36px 0"><div class="block"><h2>How to do it</h2><ol class="steps">${d.steps.map(s => `<li>${esc(s)}</li>`).join("")}</ol></div></section>` : ""}
        ${d.prompts && d.prompts.length ? `<section style="padding-block:36px 0"><div class="block"><h2>Copy-paste prompts</h2>
            <p class="sub" style="margin-top:-6px">Paste into Claude. Replace anything in [BRACKETS] with your own details.</p>
            ${d.prompts.map((p, k) => `<div class="prompt"><div class="prompt-head"><h3>${esc(p.title)}</h3>
              <button class="btn small" type="button" data-copy="${k}">Copy</button></div><pre id="p${k}">${esc(p.text)}</pre></div>`).join("")}
          </div></section>` : ""}
        ${d.files && d.files.length ? `<section style="padding-block:36px 0"><div class="block"><h2>Download files</h2><div class="files">
            ${d.files.map(f => `<a href="${esc(base + f.path)}" download>${esc(f.label)}<span>${esc(f.path.split("/").pop())}</span></a>`).join("")}
          </div></div></section>` : ""}
        ${d.links && d.links.length ? `<section style="padding-block:36px 0"><div class="block"><h2>Tools used</h2><div class="files">
            ${d.links.map(l => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}<span>↗</span></a>`).join("")}
          </div></div></section>` : ""}
        ${d.notes && d.notes.length ? `<section style="padding-block:36px 0"><div class="notes">${d.notes.map(x => `<p>${esc(x)}</p>`).join("")}</div></section>` : ""}
        ${!d.prompts?.length && !d.files?.length && !app ? `<section style="padding-block:28px 0"><p class="sub">This reel was a story, so there's nothing to download for it. The other days have prompts and skills.</p></section>` : ""}
        <section style="padding-block:40px 0"><div class="pager">
          ${prev !== null ? `<a class="btn" href="guide.html?d=${prev}">← ${esc(dayLabel(prev))}</a>` : "<span></span>"}
          ${next !== null ? `<a class="btn" href="guide.html?d=${next}">${esc(dayLabel(next))} →</a>` : ""}
        </div></section>`;
      root.querySelectorAll("[data-copy]").forEach(b => b.addEventListener("click", () => {
        const text = d.prompts[+b.dataset.copy].text;
        const ok = () => { b.textContent = "Copied"; b.classList.add("copied"); setTimeout(() => { b.textContent = "Copy"; b.classList.remove("copied"); }, 1800); };
        const fallback = () => { const r = document.createRange(); r.selectNodeContents($("#p" + b.dataset.copy)); const s = getSelection(); s.removeAllRanges(); s.addRange(r); b.textContent = "Press Ctrl+C"; };
        try { navigator.clipboard.writeText(text).then(ok, fallback); } catch (e) { fallback(); }
      }));
    });
}
