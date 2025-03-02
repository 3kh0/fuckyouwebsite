function loadCustomFont(fontName, fontUrl) {
  console.log("hiiiiii");
  const font = new FontFace(fontName, `url(${fontUrl})`);
  font
    .load()
    .then((loadedFont) => {
      document.fonts.add(loadedFont);
      document.body.style.fontFamily = fontName;
      document.querySelectorAll("*").forEach((el) => {
        el.style = "font-family: "+fontName+" !important;";
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

const extensionUrl = chrome.runtime.getURL("fonts/ex-kata1.ttf");
loadCustomFont("MyCustomFont", extensionUrl);