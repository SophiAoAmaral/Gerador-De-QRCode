const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#qr-form button")
const qrCodeImg = document.querySelector("#qr-code img")
const qrCodeInput = document.querySelector("#qr-form input")
//eventos
//Gerar QR CODE
function generateQrCode(){
    const qrCodeInputValue= qrCodeInput.value;
    if(!qrCodeInputValue) return;

    qrCodeBtn.innerText ="Gerando codigo.."

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`// ISSO É UM API

    
    qrCodeImg.addEventListener("load", ()=>{
        container.classList.add("active");
        qrCodeBtn.innerText ="Codigo Gerado!"

    })
}
qrCodeBtn.addEventListener("click", ()=>{
    generateQrCode()

})
qrCodeInput.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        generateQrCode()
    }

})

//LIMPAR QRCODE

qrCodeInput.addEventListener("keyup", ()=>{
    if(!qrCodeInput.value){
    container.classList.remove("active");
    qrCodeBtn.innerText ="Gerar Qr Code"        
    }

})