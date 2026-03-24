const gallery = document.getElementById("album");

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

const captions = [
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

const descriptions = [
  "A peaceful lake surrounded by mountains.",
  "A quiet road during sunset.",
  "A fresh and green forest view.",
  "A snowy mountain under a clear sky.",
  "A relaxing ocean scene.",
  "A calm and open valley.",
  "A cool and shaded forest path.",
  "A canyon with golden tones.",
  "A bright blue river.",
  "A soft morning meadow."
];

// loop through images
for (let i = 0; i < imageUrls.length; i++) {
  const li = document.createElement("li");
  li.classList.add("photo");

  const img = document.createElement("img");
  img.src = imageUrls[i];
  img.alt = captions[i];

  const desc = document.createElement("div");
  desc.classList.add("description");
  desc.textContent = descriptions[i];

  const caption = document.createElement("div");
  caption.classList.add("caption");
  caption.textContent = captions[i];

  li.appendChild(img);
  li.appendChild(desc);
  li.appendChild(caption);

  gallery.appendChild(li);
}