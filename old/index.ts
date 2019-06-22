Object.defineProperty(window, 'MySweetApp', {value: 'v1.0.0', writable: true});

function shipWeight(): number {
    const el: HTMLElement | null = document.getElementById('weight');
    if (!el) {
        return 0;
    }
    return parseInt(el.innerHTML);
}

function sendUpdates(emailAddr: string | string[]): void {
    function sendEmail(_req: string): void {
        if (shipWeight() > 100) {
            // tslint:disable-next-line:no-console
            console.log('WARNING: Oversize package');
        }
        // tslint:disable-next-line:no-console
        console.log('send package');
    }

    if (Array.isArray(emailAddr)) {
        emailAddr.forEach((val: string) => {
            sendEmail(val.trim());
        });
    } else {
        sendEmail(emailAddr.trim());
    }
}
