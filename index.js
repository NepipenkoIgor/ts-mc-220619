//@ts-check
Object.defineProperty(window, "MySweetApp", { value: "v1.0.0", readonly: false });

function shipWeight() {
    return parseInt((document.getElementById('weight')/* @type {HTMLDivElement} */).innerHTML);
}

/**
 * @param {(string | string[])} emailAddr
 */
function sendUpdates(emailAddr) {
    /**
     * @param {string} addr
     */
    function sendEmail(addr) {

        if (shipWeight() > 100) {
            console.log("WARNING: Oversize package");
        }
        console.log('send package')
    }
    if (emailAddr.length) {
        emailAddr.forEach((idx, val) => {
            sendEmail(val.trim());
        });
    } else {
        sendEmail(emailAddr.trim());
    }
}
