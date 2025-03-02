// if it has democracy, eg: https://www.state.gov/policy-issues/human-rights-and-democracy/
console.log("censorship yea");

const site = `
<html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        padding: 20px;
      }
      .p {
        width: 600px;
        border: 3px solid #cc0000;
        background-color: #ffffff;
        box-shadow: 5px 5px 10px #888888;
        padding: 15px;
        margin: 0 auto;
      }
      .h {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 2px solid #cc0000;
        padding-bottom: 10px;
        margin-bottom: 15px;
      }
      .title {
        font-size: 24px;
        color: #cc0000;
        font-weight: bold;
        text-align: center;
        margin: 0 10px;
      }
      .msg {
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
      }
      .gif {
        text-align: center;
        margin: 15px 0;
      }
      .ca-box {
        border: 1px solid #d3d3d3;
        border-radius: 3px;
        background-color: #f9f9f9;
        padding: 15px;
        margin: 20px auto;
        width: 300px;
      }
      .ca-h {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
      }
      .ca-l {
        font-weight: bold;
        color: #555;
        font-size: 16px;
        margin-right: 5px;
      }
      .ca-tick {
        display: flex;
        align-items: center;
      }
      .tickbox {
        width: 20px;
        height: 20px;
        margin-right: 10px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div class="p">
      <div class="h">
        <img src="${chrome.runtime.getURL("images/warn.gif")}" height="60" />
        <div class="title">무료 검색이 감지되었습니다</div>
        <img src="${chrome.runtime.getURL("images/kp.png")}" height="60" />
      </div>
      <div class="msg">
        귀하의 위대한 리더가 귀하를 보호하기 위해 이 웹사이트를 차단했습니다. 위대한 지도자 아래에 있지 않다면 아래 챌린지를 완료하세요.
      </div>
      <div class="gif">
        <img src="${chrome.runtime.getURL("images/taQbMa.gif")}" width="300" />
      </div>
      <div class="ca-box">
        <div class="ca-h">
          <span class="ca-l">kpCAPTCHA</span>
          <img src="${chrome.runtime.getURL("images/kpcap.png")}" width="20" height="20" alt="kpCAPTCHA l" />
        </div>
        <div class="ca-tick">
          <input type="checkbox" id="notKP" class="tickbox" />
          <label for="notKP">I am not North Korean</label>
        </div>
      </div>
    </div>
  </body>
</html>
`;

document.open();
document.write(site);
document.close();
