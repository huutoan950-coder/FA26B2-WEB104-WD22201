function tinhTienDien(kwh) {
  let totalMoney = 0;
  if (kwh <= 50) {
    totalMoney = kwh * 1800;
  } else if (kwh <= 100) {
    totalMoney = 50 * 1800 + (kwh - 50) * 2300;
  } else {
    totalMoney = 50 * 1800 + 50 * 2300 + (kwh - 100) * 3000;
  }
  return totalMoney;
}

function tinhKWh(money) {
  let usedKwh = 0;
  if (money <= 50 * 1800) {
    usedKwh = money / 1800;
  } else if (money <= 50 * 1800 + 50 * 2300) {
    usedKwh = 50 + (money - 50 * 1800) / 2300;
  } else {
    usedKwh = 100 + (money - (50 * 1800 + 50 * 2300)) / 3000;
  }
  return usedKwh;
}

console.log("Tiền điện 120 kWh: " + tinhTienDien(120));
console.log("Số kWh tương ứng với 910.000đ: " + tinhKWh(910000));
