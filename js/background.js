const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //js에서 image를 만들고 이를 html에 추가

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);