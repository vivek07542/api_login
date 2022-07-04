import CryptoJS from "crypto-js";

export function cryptFunction(data) {
  // Encrypt
  let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'my-secret-key@123').toString();
  return ciphertext;
}
export function decryptFunction(ciphertext) {
  // Decrypt
  let bytes = CryptoJS.AES.decrypt(ciphertext, 'my-secret-key@123');
  let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
}

