var BlazorAccountKit = {
    SmsLogin: function() {
        var countryCode = document.getElementById("country_code").value;
        var phoneNumber = document.getElementById("phone_number").value;
        AccountKit.login('PHONE', {
            countryCode: countryCode,
            phoneNumber: phoneNumber
        }, loginCallback);
        return false;
    }
}

function loginCallback(response) {
    if (response.status === "PARTIALLY_AUTHENTICATED") {
        var code = response.code;
        var csrf = response.state;
    } else if (response.status === "NOT_AUTHENTICATED") {} else if (response.status === "BAD_PARAMS") {}
}

function smsLogin() {
    var countryCode = document.getElementById("country_code").value;
    var phoneNumber = document.getElementById("phone_number").value;
    AccountKit.login('PHONE', {
        countryCode: countryCode,
        phoneNumber: phoneNumber
    }, loginCallback);
}

function emailLogin() {
    var emailAddress = document.getElementById("email").value;
    AccountKit.login('EMAIL', {
        emailAddress: emailAddress
    }, loginCallback);
}