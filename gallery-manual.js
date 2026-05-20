const config = window.GALLERY_CONFIG || GALLERY_CONFIG;
const selected = new Set();

const title = document.getElementById("galleryTitle");
const date = document.getElementById("galleryDate");
const locationEl = document.getElementById("galleryLocation");
const photoCount = document.getElementById("photoCount");
const galleryHero = document.getElementById("galleryHero");
const photoGrid = document.getElementById("photoGrid");
const selectionCount = document.getElementById("selectionCount");
const downloadSelected = document.getElementById("downloadSelected");
const downloadAll = document.getElementById("downloadAll");
const copyLink = document.getElementById("copyLink");
const shareGalleryFacebook = document.getElementById("shareGalleryFacebook");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxDownload = document.getElementById("lightboxDownload");
const lightboxShare = document.getElementById("lightboxShare");

document.title = `${config.title} Wedding Gallery | 1234 Weddings`;
title.textContent = config.title;
date.textContent = config.date || "";
locationEl.textContent = config.location || "";
photoCount.textContent = `${config.photos.length} photos`;
galleryHero.style.setProperty("--cover", `url("${config.photos[0]?.imageUrl || ""}")`);

function facebookShareUrl(url) {
  const text = encodeURIComponent(config.shareText || "Book your wedding today at 1234weddings.com");
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${text}`;
}
function openFacebookShare(url) {
  window.open(facebookShareUrl(url), "_blank", "noopener,noreferrer,width=720,height=640");
}
function updateSelectionUI() {
  const count = selected.size;
  selectionCount.textContent = `${count} selected`;
  downloadSelected.disabled = count === 0;
}
function downloadFile(url) {
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
}
function openLightbox(photo) {
  lightboxImage.src = photo.imageUrl;
  lightboxImage.alt = photo.title || "Wedding photo";
  lightboxDownload.href = photo.downloadUrl || photo.imageUrl;
  lightbox.classList.add("active");
  lightbox.setAttribute("aria-hidden", "false");
}
function closeLightbox() {
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");
}
function renderPhotos() {
  photoGrid.innerHTML = "";
  config.photos.forEach((photo, index) => {
    const id = photo.downloadUrl || photo.imageUrl;
    const card = document.createElement("article");
    card.className = "photo-card";

    const img = document.createElement("img");
    img.src = photo.imageUrl;
    img.alt = photo.title || `${config.title} wedding photo ${index + 1}`;
    img.loading = "lazy";

    const selectBtn = document.createElement("button");
    selectBtn.className = "select-btn";
    selectBtn.type = "button";
    selectBtn.textContent = "Select";

    const actions = document.createElement("div");
    actions.className = "card-actions";

    const downloadOne = document.createElement("a");
    downloadOne.className = "card-action";
    downloadOne.href = photo.downloadUrl || photo.imageUrl;
    downloadOne.target = "_blank";
    downloadOne.rel = "noopener";
    downloadOne.textContent = "Download";

    const shareOne = document.createElement("button");
    shareOne.className = "card-action share";
    shareOne.type = "button";
    shareOne.textContent = "Share";

    const viewOne = document.createElement("button");
    viewOne.className = "card-action view";
    viewOne.type = "button";
    viewOne.textContent = "View";

    img.addEventListener("click", () => openLightbox(photo));
    viewOne.addEventListener("click", () => openLightbox(photo));
    shareOne.addEventListener("click", () => openFacebookShare(window.location.href));

    selectBtn.addEventListener("click", () => {
      if (selected.has(id)) {
        selected.delete(id);
        card.classList.remove("selected");
        selectBtn.textContent = "Select";
      } else {
        selected.add(id);
        card.classList.add("selected");
        selectBtn.textContent = "Selected";
      }
      updateSelectionUI();
    });

    actions.appendChild(downloadOne);
    actions.appendChild(shareOne);
    actions.appendChild(viewOne);
    card.appendChild(img);
    card.appendChild(selectBtn);
    card.appendChild(actions);
    photoGrid.appendChild(card);
  });
}
downloadSelected.addEventListener("click", async () => {
  for (const url of selected) {
    downloadFile(url);
    await new Promise(resolve => setTimeout(resolve, 300));
  }
});
downloadAll.addEventListener("click", () => {
  if (config.downloadAllUrl) {
    window.open(config.downloadAllUrl, "_blank", "noopener,noreferrer");
    return;
  }
  config.photos.forEach((photo, index) => {
    setTimeout(() => downloadFile(photo.downloadUrl || photo.imageUrl), index * 300);
  });
});
copyLink.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    copyLink.textContent = "Link Copied";
    setTimeout(() => copyLink.textContent = "Copy Link", 1600);
  } catch (error) {
    alert("Copy this link: " + window.location.href);
  }
});
shareGalleryFacebook.addEventListener("click", () => openFacebookShare(window.location.href));
lightboxShare.addEventListener("click", () => openFacebookShare(window.location.href));
lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", event => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", event => { if (event.key === "Escape") closeLightbox(); });
renderPhotos();
updateSelectionUI();
