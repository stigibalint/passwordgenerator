window.onload = function() {
    document.getElementById("generateBtn").addEventListener("click", generatePassword);
    document.getElementById("copyIcon").addEventListener("click", copyPassword);
    document.getElementById("charLength").addEventListener("input", updateCharLengthValue);
}

function generatePassword() {
    var passwordLength = document.getElementById("charLength").value;
    var charset = "";
    if (document.getElementById("uppercase").checked) {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (document.getElementById("lowercase").checked) {
        charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (document.getElementById("numbers").checked) {
        charset += "0123456789";
    }
    if (document.getElementById("symbols").checked) {
        charset += "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    }
    if (charset === "") {
        alert("Legalább egy checkboxot válassz ki.");
        return;
    }

    var password = "";

    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById("pw").value = password;
}

function updateCharLengthValue() {
    var sliderValue = document.getElementById("charLength").value;
    document.getElementById("charLengthValue").textContent = sliderValue;
}

function copyPassword() {
    var passwordInput = document.getElementById("pw");
    var passwordText = passwordInput.value || passwordInput.placeholder; 
    navigator.clipboard.writeText(passwordText).then(function() {
        alert("Kimásolva");
    }, function(err) {
        console.error('Nem sikerült kimásolni ', err);
    });
}
