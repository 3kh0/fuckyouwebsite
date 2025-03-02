// if it has democracy, eg: https://www.state.gov/policy-issues/human-rights-and-democracy/
console.log("gambling hell yea");

const site = `
<!doctype html>
<html>
  <head>
    <title>Welcome to Spin the Wheel</title>
    <meta charset="UTF-8" />
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");

      * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  display: grid;
  place-items: center;
  margin: 0;
  height: 100vh;
  background: linear-gradient(to bottom, #aaaaaa, #eeeeee);
}

#spin_the_wheel {
  display: inline-block;
  position: relative;
  overflow: hidden;
}

#wheel {
  display: block;
}

#spin {
  font:
    1.5em/0 "Lato",
    sans-serif;
  user-select: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30%;
  height: 30%;
  margin: -15%;
  background: #fff;
  color: #fff;
  box-shadow:
    0 0 0 8px currentColor,
    0 0px 15px 5px rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  transition: 0.8s;
}

#spin::after {
  content: "";
  position: absolute;
  top: -17px;
  border: 10px solid transparent;
  border-bottom-color: currentColor;
  border-top: none;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
}
    </style>
  </head>

  <body>
  <h1>Are you allowed to access this site?</h1>
    <div id="spin_the_wheel">
      <canvas id="wheel" width="800" height="800"></canvas>
      <div id="spin">SPIN</div>
    </div>
  </body>
</html>
`;

document.open();
document.write(site);
document.close();

const sectors = [
    { color: "#FFBC03", text: "#333333", label: "Yes" },
    { color: "#FF5A10", text: "#333333", label: "No" },
    { color: "#FFBC03", text: "#333333", label: "Yes" },
    { color: "#FF5A10", text: "#333333", label: "No" },
    { color: "#FFBC03", text: "#333333", label: "Yes" },
    { color: "#FF5A10", text: "#333333", label: "No" },
    { color: "#FFBC03", text: "#333333", label: "Yes" },
    { color: "#FF5A10", text: "#333333", label: "No" },
  ];
  
  const events = {
    listeners: {},
    addListener: function (eventName, fn) {
      this.listeners[eventName] = this.listeners[eventName] || [];
      this.listeners[eventName].push(fn);
    },
    fire: function (eventName, ...args) {
      if (this.listeners[eventName]) {
        for (let fn of this.listeners[eventName]) {
          fn(...args);
        }
      }
    },
  };
  
  const rand = (m, M) => Math.random() * (M - m) + m;
  const tot = sectors.length;
  const spinEl = document.querySelector("#spin");
  const ctx = document.querySelector("#wheel").getContext("2d");
  const dia = ctx.canvas.width;
  const rad = dia / 2;
  const PI = Math.PI;
  const TAU = 2 * PI;
  const arc = TAU / sectors.length;
  
  const friction = 0.991; // 0.995=soft, 0.99=mid, 0.98=hard
  let angVel = 0; // Angular velocity
  let ang = 0; // Angle in radians
  
  let spinButtonClicked = false;
  
  const getIndex = () => Math.floor(tot - (ang / TAU) * tot) % tot;
  
  function drawSector(sector, i) {
    const ang = arc * i;
    ctx.save();
  
    // COLOR
    ctx.beginPath();
    ctx.fillStyle = sector.color;
    ctx.moveTo(rad, rad);
    ctx.arc(rad, rad, rad, ang, ang + arc);
    ctx.lineTo(rad, rad);
    ctx.fill();
  
    // TEXT
    ctx.translate(rad, rad);
    ctx.rotate(ang + arc / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = sector.text;
    ctx.font = "bold 30px 'Lato', sans-serif";
    ctx.fillText(sector.label, rad - 10, 10);
    //
  
    ctx.restore();
  }
  
  function rotate() {
    const sector = sectors[getIndex()];
    ctx.canvas.style.transform = `rotate(${ang - PI / 2}rad)`;
  
    spinEl.textContent = !angVel ? "SPIN" : sector.label;
    spinEl.style.background = sector.color;
    spinEl.style.color = sector.text;
  }
  
  function frame() {
    // Fire an event after the wheel has stopped spinning
    if (!angVel && spinButtonClicked) {
      const finalSector = sectors[getIndex()];
      events.fire("spinEnd", finalSector);
      spinButtonClicked = false; // reset the flag
      return;
    }
  
    angVel *= friction; // Decrement velocity by friction
    if (angVel < 0.002) angVel = 0; // Bring to stop
    ang += angVel; // Update angle
    ang %= TAU; // Normalize angle
    rotate();
  }
  
  function engine() {
    frame();
    requestAnimationFrame(engine);
  }
  
  function init() {
    sectors.forEach(drawSector);
    rotate(); // Initial rotation
    engine(); // Start engine
    spinEl.addEventListener("click", () => {
      if (!angVel) angVel = rand(0.25, 0.45);
      spinButtonClicked = true;
    });
  }
  
  init();
  
  events.addListener("spinEnd", (sector) => {
    console.log(`Woop! You won ${sector.label}`);
  });