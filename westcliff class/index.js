const album = document.getElementById("album");

const imageList = [];

for (let i = 1; i <= 6; i++) {
  const fileName = `winterland${i}.jpg`;

  const imageHTML = `
    <li class="photo">
      <img src="./images/${fileName}" alt="Winter scene ${i}">
    </li>
  `;

  imageList.push(imageHTML);
}

album.innerHTML = imageList.join("");