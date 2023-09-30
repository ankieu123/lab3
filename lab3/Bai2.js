function validateInput(inputId, message) {
    var inputValue = document.getElementById(inputId).value;
    var errorElement = document.getElementById(inputId + "-error");

    if (inputValue.trim() === "") {
        errorElement.innerHTML = message;
        return false;
    } else {
        errorElement.innerHTML = "";
        return true;
    }
}
function validatePhoneNumber() {
    var phoneNumber = document.getElementById("phoneNumber").value;
    var errorElement = document.getElementById("phoneNumber-error");

    if (phoneNumber.length < 10) {
        errorElement.innerHTML = "Số điện thoại phải có ít nhất 10 ký số";
        return false;
    } else {
        errorElement.innerHTML = "";
        return true;
    }
}
function displayMessage(message) {
    alert(message);
}

function handleButtonClick(option) {
    if (option === "office") {
        displayMessage("Bạn chọn giao hàng tại văn phòng");
    } else if (option === "home") {
        displayMessage("Bạn chọn giao hàng tại nhà riêng");
    }
}
function saveInformation() {
    var nameValid = validateInput("name", "Vui lòng nhập tên");
    var addressValid = validateInput("address", "Vui lòng nhập địa chỉ");
    var cityValid = validateInput("city", "Vui lòng nhập tỉnh/thành phố");
    var districtValid = validateInput("district", "Vui lòng nhập quận/huyện");
    var wardValid = validateInput("ward", "Vui lòng nhập phường/xã");
    var phoneNumberValid = validatePhoneNumber();

    if (nameValid && addressValid && cityValid && districtValid && wardValid && phoneNumberValid) {
        displayMessage("Lưu thông tin thành công");
    } else {
        displayMessage("Thông tin nhập không hợp lệ");
    }
} document.getElementById("name").addEventListener("input", function () {
    validateInput("name", "Vui lòng nhập tên");
});

document.getElementById("address").addEventListener("input", function () {
    validateInput("address", "Vui lòng nhập địa chỉ");
});

document.getElementById("city").addEventListener("input", function () {
    validateInput("city", "Vui lòng nhập tỉnh/thành phố");
});

document.getElementById("district").addEventListener("input", function () {
    validateInput("district", "Vui lòng nhập quận/huyện");
});

document.getElementById("ward").addEventListener("input", function () {
    validateInput("ward", "Vui lòng nhập phường/xã");
});

document.getElementById("phoneNumber").addEventListener("input", function () {
    validatePhoneNumber();
});