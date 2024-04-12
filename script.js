window.onload = function() {
    document.getElementById("generateBtn").addEventListener("click", generatePassword);
    document.getElementById("copyIcon").addEventListener("click", copyPassword);
    document.getElementById("charLength").addEventListener("input", updateCharLengthValue);
    document.getElementById("strength").addEventListener("input", updatePasswordStrength);
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
    updatePasswordStrength(); 
}

function updatePasswordStrength() {
    var password = document.getElementById("pw").value;
    var strengthBars = document.querySelectorAll(".strength-bar");

    
    for (var i = 0; i < strengthBars.length; i++) {
        strengthBars[i].style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    }

  
    if (password.length >= 8) {
        strengthBars[0].style.backgroundColor = "green";
    }
    if (password.length >= 12) {
        strengthBars[1].style.backgroundColor = "green";
    }
    if (password.length >= 16) {
        strengthBars[2].style.backgroundColor = "green";
    }
    if (password.length >= 20) {
        strengthBars[3].style.backgroundColor = "green";
    }
}

function updateCharLengthValue() {
    var sliderValue = document.getElementById("charLength").value;
    document.getElementById("charLengthValue").textContent = ` ${sliderValue} `;
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
