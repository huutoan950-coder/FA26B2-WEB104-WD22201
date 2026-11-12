let chucVu = "staff";
let ngayCong = 22;
let luongCoBan = 5000000;
let ngayCongQuyDinh = 24;
let heSo = 0;

if (chucVu == "intern") {
  heSo = 1.0;
} else if (chucVu == "staff") {
  heSo = 1.5;
} else if (chucVu == "senior") {
  heSo = 2.0;
} else if (chucVu == "manager") {
  heSo = 3.0;
}

let luong = (heSo * ngayCong * luongCoBan) / ngayCongQuyDinh;
console.log("Lương thực nhận: " + luong);
