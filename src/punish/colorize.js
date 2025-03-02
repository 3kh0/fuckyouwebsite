console.log("colorize");

function genHexString(len) {
  const hex = "0123456789ABCDEF";
  let output = "";
  for (let i = 0; i < len; ++i) {
    output += hex.charAt(Math.floor(Math.random() * hex.length));
  }
  return output;
}

// import comic sans
const fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

const textElements = document.querySelectorAll("p, span, h1, h2, h3, h4, h5, h6, a, li, td, th, div, label, button");

textElements.forEach((element) => {
  //element.style.fontFamily = '"Comic Neue", cursive';

  const textColor = `#${genHexString(6)}`;
  const bgColor = `#${genHexString(6)}`;

  element.style.color = textColor;
  element.style.backgroundColor = bgColor;

  element.style.textShadow = "1px 1px 1px #000";
});
