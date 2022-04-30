document.querySelector("#btn_encrypt").addEventListener("click", function () {
  var myMessage = document.querySelector("#myMessage").value;
  var myPassword = document.querySelector("#myPassword").value;

  var result_of_encryption = CryptoJS.AES.encrypt(myMessage, myPassword);

  document.querySelector("#myEncryptedText").innerHTML = result_of_encryption;
});

document.querySelector("#btn_decrypt").addEventListener("click", function () {
  var myEncryptedText = document.querySelector("#myEncryptedText").value;
  var myPassword = document.querySelector("#myPassword").value;

  var result_of_decryption = CryptoJS.AES.decrypt(
    myEncryptedText,
    myPassword
  ).toString(CryptoJS.enc.Utf8);

  document.querySelector("#myDecryptedText").innerHTML = result_of_decryption;
});
