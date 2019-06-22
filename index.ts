Object.defineProperty(window, "MySweetApp", { value: "v1.0.0", writable: true });

function shipWeight() {
    const el = document.getElementById('weight');
    if(!el) {
        return 0;
    }
    return parseInt(el.innerHTML);
}

function sendUpdates(emailAddr: string | string[]) {
    /**
     * @param {string} addr
     */
    function sendEmail(_req: string) {
        if (shipWeight() > 100) {
            console.log("WARNING: Oversize package");
        }
        console.log('send package')
    }
    if (Array.isArray(emailAddr)) {
        emailAddr.forEach((val) => {
            sendEmail(val.trim());
        });
    } else {
        sendEmail(emailAddr.trim());
    }
}
