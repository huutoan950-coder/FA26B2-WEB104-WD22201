function calculator(a, b, operator) {
  let result = 0;
  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
    case "x":
      result = a * b;
      break;
    case "/":
      result = b !== 0 ? a / b : "Không chia được cho 0";
      break;
    default:
      result = "Phép tính không hợp lệ";
  }
  return result;
}

console.log("15.5 x 2 = " + calculator(15.5, 2, "x"));
