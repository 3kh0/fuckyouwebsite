// 50/50
const areYouFucked = Math.random() > 0.5;
if (areYouFucked) {
  console.log("GG");
}

//spinning wheel

const site = `<html>
  <head>
    <title>Movie Selector</title>
    <style>
    *{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: none;
}

body{
  font-family: "Open Sans";
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background: rgb(60, 60, 242);
  background: linear-gradient(90deg, rgba(60, 60, 242, 1) 0%, rgba(98, 245, 230, 1) 52%, rgba(60, 60, 242, 1) 100%);
  background-size: cover;
}

.mainbox{
  position: relative;
  width: 500px;
  height: 500px;
}
.mainbox:after{
  position: absolute;
  content: '';
  width: 32px;
  height: 32px;
  background: url('arrow-left.png') no-repeat;
  background-size: 32px;
  right: -30px;
  top: 50%;
  transform: translateY(-50%);
}
.box{
  width: 100%;
  height: 100%;
  position: relative;
  font-weight: bold;
  border-radius: 50%;
  border: 10px solid #fff;
  overflow: hidden;
  transition: all ease 5s;
}


span{
  width: 50%;
  height: 50%;
  display: inline-block;
  position: absolute;
}
.span1{
  clip-path: polygon(0 92%, 100% 50%, 0 8%);
  background-color: #fffb00;
  top: 120px;
  left: 0;
}
.span2{
  clip-path: polygon(100% 92%, 0 50%, 100% 8%);
  background-color: #ff4fa1;
  top: 120px;
  right: 0;
}
.span3{
  clip-path: polygon(50% 0%, 8% 100%, 92% 100%);
  background-color: #ffaa00;
  bottom: 0;
  left: 120px;
}
.span4{
  clip-path: polygon(50% 100%, 92% 0, 8% 0);
  background-color: #22ff00;
  top: 0;
  left: 120px;
}


.box1 .span3 b{
   transform: translate(-50%, -50%) rotate(-270deg);
}
.box1 .span1 b,
.box2 .span1 b{
  transform: translate(-50%, -50%) rotate(185deg);
}
.box2 .span3 b{
  transform: translate(-50%, -50%) rotate(90deg);
}
.box1 .span4 b,
.box2 .span4 b{
  transform: translate(-50%, -50%) rotate(-85deg);
}

span b{
  font-size: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

}

.box2{
  width: 100%;
  height: 100%;
  transform: rotate(-135deg);
}

.spin{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75px;
  height: 75px;
  border-radius: 50%;
  border: 4px solid #fff;
  background-color: #001aff;
  color: #fff;
  box-shadow: 0 5px 20px #000;
  font-weight: bold;
  font-size: 22px;
  cursor: pointer;
}
.spin:active{
  width: 70px;
  height: 70px;
  font-size: 20px;
}

.mainbox.animate:after{
  animation: animateArrow 0.7s ease infinite;
}
@keyframes animateArrow{
  50%{
    right: -40px;
  }
}
  </style>
  </head>
  <body> 
  <div id="mainbox" class="mainbox">
    <div id="box" class="box">
      <div class="box1">
        <span class="span1"><b>Iron Man</b></span>
        <span class="span2"><b>7500</b></span>
        <span class="span3"><b>Bat Man</b></span>
        <span class="span4"><b>Joker</b></span>
      </div>
      <div class="box2">
        <span class="span1"><b>Shoplifters</b></span>
        <span class="span2"><b>Inception</b></span>
        <span class="span3"><b>Deadpool</b></span>
        <span class="span4"><b>Terminator</b></span>
      </div>
    </div> 
    <button class="spin" onclick="rotateFunction()">SPIN</button>
  </div>
  <script src="script.js"></script>
  </body>
</html>`;

document.open();
document.write(site);

//celebration
const date = "Hackclub";
const footer = document.createElement("footer");
footer.innerHTML = `Today we are celebrating ${date}. <button>Donate</button>`;
footer.style = `height: 3rem; color: black; font-size: 2rem; position: absolute; bottom: 0; left: 0; right: 0; z-index: 2000;`;
document.body.appendChild(footer);

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

function changeFont(fontFamily = "Comic Sans MS") {
  document.body.style.fontFamily = fontFamily;
  document.querySelectorAll("*").forEach((el) => {
    el.style.fontFamily = fontFamily;
  });
}
changeFont("Papyrus");
