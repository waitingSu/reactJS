import CryptoJS from 'crypto-js'

const key = CryptoJS.enc.Utf8.parse('waiting');
const iv = CryptoJS.enc.Utf8.parse("FackYoutube1569");

export const AESTool = {

    encrypt: (message) => {
        let sendData = CryptoJS.enc.Utf8.parse(message);
        let encrypted =CryptoJS.AES.encrypt(sendData,key,{
            iv: iv,
            mode:CryptoJS.mode.CBC,
            padding:CryptoJS.pad.Pkcs7
        });
        return encrypted.toString(); //Base64字串
    },

    decrypt: (message) => {
        let decrypt = CryptoJS.AES.decrypt(message, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return decrypt.toString(CryptoJS.enc.Utf8);
    }

}