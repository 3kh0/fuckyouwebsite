// Replace logos
const logoMap = {
  "mcdonalds.com": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Burger_King_logo.svg",
  "coca-cola.com": "https://www.pepsi.com/assets/images/pepsi-logos/logo-0.png",
  "apple.com": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",
  "tesla.com": "https://www.ford.com/etc/designs/brand_ford/brand/skin/ford/img/bri-icons/Ford-logo.svga",
  "amazon.com": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/1200px-Walmart_logo.svg.png",
  //add more
};

function replaceLogos() {
  document.querySelectorAll("img").forEach((img) => {
    if (img.src) {
      try {
        const url = new URL(img.src);
        console.log(url.hostname.replace("www.", ""));
        if (logoMap[url.hostname.replace("www.", "")]) {
          img.src = logoMap[url.hostname.replace("www.", "")];
          img.style = "height: 48px !important; width: 48px !important;";
        }
      } catch (e) {
        console.error("Error processing image URL:", e);
      }
    }
  });
}

function changeFont() {
  const fonts = ["Papyrus", "Comic Sans MS", "Impact", "Jokerman", "Chiller", "Curlz MT", "Viner Hand ITC", "Brush Script MT", "Luminari", "Blippo"];
  const randomFont = fonts[Math.floor(Math.random() * fonts.length)];

  document.body.style.fontFamily = randomFont;
  document.querySelectorAll("*").forEach((el) => {
    el.style.fontFamily = randomFont;
  });
}

changeFont();

replaceLogos();
