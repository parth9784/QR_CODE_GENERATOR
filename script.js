function generateqr() {
    let qrimg = document.getElementById("qrimg");
    let input = document.getElementById("input").value;
    qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(input);
    console.log("called");
}