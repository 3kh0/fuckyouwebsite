function loadCustomFont(fontName, fontUrl) {
  const font = new FontFace(fontName, `url(${fontUrl})`);
  font
    .load()
    .then((loadedFont) => {
      document.fonts.add(loadedFont);
      document.body.style.fontFamily = fontName;
      document.querySelectorAll("*").forEach((el) => {
        el.style.fontFamily = fontName;
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

loadCustomFont("MyCustomFont", "chinese.ttf");
