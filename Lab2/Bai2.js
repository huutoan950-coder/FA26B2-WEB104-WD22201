let kwh = 120;
let totalMoney = 0;

if (kwh <= 50) {
  totalMoney = kwh * 1800;
} else if (kwh <= 100) {
  totalMoney = 50 * 1800 + (kwh - 50) * 2300;
} else {
  totalMoney = 50 * 1800 + 50 * 2300 + (kwh - 100) * 3000;
}
console.log("Tiền điện là: " + totalMoney);

let money = 910000;
let usedKwh = 0;

if (money <= 50 * 1800) {
  usedKwh = money / 1800;
} else if (money <= 50 * 1800 + 50 * 2300) {
  usedKwh = 50 + (money - 50 * 1800) / 2300;
} else {
  usedKwh = 100 + (money - (50 * 1800 + 50 * 2300)) / 3000;
}
console.log("Số kWh tiêu thụ tương ứng là: " + usedKwh);
