// data.js の内容をページに流し込む小さな仕組み（編集不要）
function renderNews(elId, items) {
  const el = document.getElementById(elId);
  if (!el) return;
  el.innerHTML = items.map(n =>
    `<li><span class="date">${n.date}</span><span class="label">${n.label}</span><a href="${n.url}">${n.text}</a></li>`
  ).join("");
}
function renderCards(elId, items) {
  const el = document.getElementById(elId);
  if (!el) return;
  el.innerHTML = items.map(i =>
    `<div class="card"><span class="tag">${i.tag}</span><h3><a href="${i.url}">${i.title}</a></h3><p>${i.desc}</p></div>`
  ).join("");
}
renderNews("whats-new", typeof WHATS_NEW !== "undefined" ? WHATS_NEW : []);
renderCards("studio-items", typeof STUDIO_ITEMS !== "undefined" ? STUDIO_ITEMS : []);
renderCards("share-items", typeof SHARE_ITEMS !== "undefined" ? SHARE_ITEMS : []);
