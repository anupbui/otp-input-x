export const getOTPArr = (otpVal) => {
    if (otpVal && (otpVal + '').length > 0 && (otpVal + '').length <= 6) {
        return (otpVal + '').split('');
    }
    return [];
};
export const otpHandleKeys = (evt, shd, format, setVal) => {
    const txt = shd.querySelector('#' + evt.target['id']);
    if (!evt.ctrlKey) {
        if ([8, 37, 38].indexOf(evt.keyCode) > -1) {
            setTimeout(() => {
                otpFocusPrev(txt);
            }, 10);
        }
        else if ([39, 40, 46].indexOf(evt.keyCode) > -1) {
            setTimeout(() => {
                otpFocusNext(txt);
            }, 10);
        }
        else if ((evt.keyCode > 47 && evt.keyCode < 58) || (evt.keyCode > 64 && evt.keyCode < 91)) {
            if (txt.value && txt.value.length === 1) {
                if (format === 'number' && evt.key.match(/^[0-9]{1}/)) {
                    txt.value = evt.key;
                }
                else if (format === 'text' && evt.key.match(/^[A-Za-z0-9]{1}/)) {
                    txt.value = evt.key;
                }
                evt.preventDefault();
                otpFocusNext(txt);
                return false;
            }
            else {
                if ((format === 'number' && evt.key.match(/^[0-9]{1}/)) || (format === 'text' && evt.key.match(/^[A-Za-z0-9]{1}/))) {
                    setTimeout(() => {
                        otpFocusNext(txt);
                    }, 10);
                }
                else {
                    evt.preventDefault();
                }
            }
        }
        setTimeout(() => {
            setVal();
        }, 50);
    }
    else {
        evt.preventDefault();
    }
};
const otpFocusNext = (txt) => {
    if (txt.nextElementSibling) {
        const ntxt = txt.nextElementSibling;
        ntxt.focus();
    }
};
const otpFocusPrev = (txt) => {
    if (txt.previousElementSibling) {
        const ntxt = txt.previousElementSibling;
        ntxt.focus();
    }
};
