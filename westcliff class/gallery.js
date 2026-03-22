const gallery = document.getElementById("gallery");

const imageUrls = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80"
];

const captionTexts = [
  "Mountain Lake",
  "Sunset Road",
  "Green Forest",
  "Snowy Peak",
  "Ocean View",
  "Calm Valley",
  "Deep Woods",
  "Golden Canyon",
  "Blue River",
  "Morning Meadow"
];

const descTexts = [
  "A peaceful lake surrounded by mountains and fresh air.",
  "A quiet road glowing beautifully under the sunset.",
  "A refreshing forest scene filled with greenery and light.",
  "A snowy mountain peak under a bright sky.",
  "A relaxing ocean view with soft waves and warm light.",
  "A calm valley that feels open and peaceful.",
  "A deep forest path with tall trees and cool shade.",
  "A golden canyon landscape with dramatic natural beauty.",
  "A clear blue river flowing through the wilderness.",
  "A lovely meadow in the soft light of the morning."
];

for (let i = 0; i < imageUrls.length; i++) {
  const openListTag = `<li id="photo${i + 1}">`;
  const imageTag = `<img src="${imageUrls[i]}" alt="${captionTexts[i]}">`;
  const openDescTag = `<div class="description">`;
  const closeDescTag = `</div>`;
  const openCaptionTag = `<div class="caption">`;
  const closeCaptionTag = `</div>`;
  const closeListTag = `</li>`;

  gallery.innerHTML +=
    openListTag +
    imageTag +
    openDescTag + descTexts[i] + closeDescTag +
    openCaptionTag + captionTexts[i] + closeCaptionTag +
    closeListTag;
}