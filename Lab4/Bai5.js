const cart = [
  { name: "Áo thun", price: 150000, quantity: 2 },
  { name: "Quần jean", price: 350000, quantity: 1 },
  { name: "Nón lưỡi trai", price: 120000, quantity: 3 },
];

const itemTotals = cart.map((item) => ({
  name: item.name,
  total: item.price * item.quantity,
}));

let grandTotal = 0;
for (let i = 0; i < itemTotals.length; i++) {
  grandTotal += itemTotals[i].total;
}

console.log("Thành tiền từng món:", itemTotals);
console.log("Tổng tiền giỏ hàng:", grandTotal);
