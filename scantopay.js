
function domReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}
 
domReady(function () {
 
    // If found your qr code
    function onScanSuccess() {
        alert("You Qr is scanned!");
    }
 
    let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbos: 250 }
    );

    htmlscanner.render(onScanSuccess);
    setTimeout(redirect,10000)
        function redirect() {
            window.location.replace("detailsofpayto.html");
        }
});