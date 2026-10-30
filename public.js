import { db } from "./firebase-init.js";
import { collection, doc, getDoc, getDocs, query, where, orderBy, limit } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
const $=id=>document.getElementById(id);
const safe=(v)=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
async function readList(name,max=6){try{const q=query(collection(db,name),where("published","==",true),orderBy("createdAt","desc"),limit(max));const s=await getDocs(q);return s.docs.map(d=>({id:d.id,...d.data()}));}catch(e){console.warn(name,e);return []}}
function card(x,type){const img=x.imageURL||x.image||"";return `<article class="item-card reveal">${img?`<img src="${safe(img)}" alt="${safe(x.title)}" loading="lazy">`:""}<div class="item-body"><small>${safe(x.date||x.category||type)}</small><h3>${safe(x.title||"विद्यालय अपडेट")}</h3><p>${safe(x.description||x.message||"")}</p></div></article>`}
function render(id,items,type){const el=$(id);if(!el)return;el.innerHTML=items.length?items.map(x=>card(x,type)).join(""):'<div class="empty">अभी कोई जानकारी प्रकाशित नहीं की गई है।</div>'}
async function init(){try{
const snap=await getDoc(doc(db,"site","settings"));if(snap.exists()){const s=snap.data();if(s.heroTitle&&$("heroTitle"))$("heroTitle").textContent=s.heroTitle;if(s.heroText&&$("heroText"))$("heroText").textContent=s.heroText;if(s.aboutTitle&&$("aboutTitle"))$("aboutTitle").textContent=s.aboutTitle;if(s.aboutText&&$("aboutText"))$("aboutText").textContent=s.aboutText;}
const popup=await getDoc(doc(db,"site","popup"));if(popup.exists()){const p=popup.data();if(p.enabled&&p.title&&sessionStorage.getItem("gpcPopupClosed")!=="1"){ $("popupTitle").textContent=p.title;$("popupText").textContent=p.message||"";$("popupLink").textContent=p.buttonText||"अधिक जानकारी";$("popupLink").href=p.buttonURL||"admissions.html";setTimeout(()=>$("popupBackdrop")?.classList.add("show"),900);}}
const [notices,events,gallery]=await Promise.all([readList("notices",3),readList("events",3),readList("gallery",3)]);
render("homeNotices",notices,"Notice");render("homeEvents",events,"Event");render("homeGallery",gallery,"Gallery");
const ticker=$("noticeTicker");if(ticker&&notices[0])ticker.textContent=notices[0].title+" — "+(notices[0].description||"");
}catch(e){console.warn("Firebase content not available yet. Static website remains available.",e);}}
init();
