const textContent = document.querySelector("#qr-content");
const btnGenerate = document.querySelector("#btnGenerate");
const qrContainer = document.querySelector("#qr-code");
const qrSize = document.querySelector("#size");

btnGenerate.addEventListener('click', () => {
  if(!(textContent.value == "" )) {
        fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize.value}&data=${textContent.value}`).then(res => {
            const qr = `<img src=${res.url}>`;
            qrContainer.innerHTML = qr;
        });
      }else {
        alert("Please submit the QR content");
      }
});
