const images = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg"];

const bg = document.querySelector("body");

const bgImages = document.createElement("img");

function bgbg() {
    const randomImage = images[Math.floor(Math.random()*images.length)];
    bg.style.backgroundImage = `url(${randomImage})`
}
bgbg();