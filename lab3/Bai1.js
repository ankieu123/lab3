function validateAndProcessForm() {
    var maSinhVien = document.getElementById("maSV").value;
    var hoTen = document.getElementById("hoTen").value;
    var tuoi = document.getElementById("tuoi").value;
    var chuyenNganh = document.querySelector('input[name="chuyenNganh"]:checked').value;

    if (validateMaSinhVien(maSinhVien) && validateHoTen(hoTen) && validateTuoi(tuoi)) {
        var soTruong = getSoTruong(chuyenNganh);
        displaySuccessMessage(soTruong);
    } else {
        displayErrorMessage();
    }
}

// Hàm kiểm tra mã sinh viên
function validateMaSinhVien(maSinhVien) {
    if (maSinhVien.length !== 10) {
        return false;
    }
    return true;
}

// Hàm kiểm tra họ tên
function validateHoTen(hoTen) {
    if (hoTen.length === 0 || hoTen.length > 30) {
        return false;
    }
    return true;
}

// Hàm kiểm tra tuổi
function validateTuoi(tuoi) {
    if (tuoi < 18) {
        return false;
    }
    return true;
}

// Hàm lấy sở trường dựa trên chuyên ngành
function getSoTruong(chuyenNganh) {
    switch (chuyenNganh) {
        case "heThong":
            return "Phân tích & Thiết kế";
        case "phanMem":
            return "Lập trình";
        case "mangMayTinh":
            return "Quản lý mạng";
        default:
            return "";
    }
}

// Hàm hiển thị thông báo khi đăng ký thành công
function displaySuccessMessage(soTruong) {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Bạn đã đăng ký thành công. Sở trường: " + soTruong;
}

// Hàm hiển thị thông báo khi đăng ký sai
function displayErrorMessage() {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Bạn phải nhập lại";
}