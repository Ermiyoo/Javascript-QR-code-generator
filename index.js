const textContent = document.querySelector("#qr-content");
const btnGenerate = document.querySelector("#btnGenerate");
const qrContainer = document.querySelector("#qr-code");

btnGenerate.addEventListener('click', () => {
  if(!(textContent.value == "" )) {
        fetch(`https://api.qrserver.com/v1/create-qr-code/?size=350x350&data=${textContent.value}`).then(res => {
            const qr = `<img src=${res.url}>`;
            qrContainer.innerHTML = qr;
        });
      }else {
        alert("Please submit the QR content");
      }
});
