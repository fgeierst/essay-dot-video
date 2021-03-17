import VanillaQR from "../../../node_modules/vanillaqr/VanillaQR.module.js"

var qr = new VanillaQR({
  url: "https://essay.video",
  size: 280,
  colorLight: "#f0f8ff",
  colorDark: "#483d8b",
});

document.body.querySelector(".qrcode").appendChild(qr.domElement);