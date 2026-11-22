let shoppingList = ["Trứng", "Thịt", "Rau"];
console.log("Số lượng ban đầu:", shoppingList.length);

shoppingList.push("Sữa");
shoppingList.unshift("Bánh mì");

let removedItem = shoppingList.pop();
console.log("Mặt hàng bị xóa:", removedItem);

console.log("Mặt hàng thứ 2:", shoppingList[1]);
