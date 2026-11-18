function chuanHoaCau(str) {
  let s = str.trim().toLowerCase();
  s = s.replace(/\s+([,!?;:])/g, "$1");
  s = s.replace(/([,!?;:])(?!\s|$)/g, "$1 ");
  let words = s.split(/\s+/);
  let result = [];
  for (let i = 0; i < words.length; i++) {
    let w = words[i];
    let capitalized = w.replace(/^[a-zà-ỹ]/, (match) => match.toUpperCase());
    result.push(capitalized);
  }
  return result.join(" ");
}

let inputStr = " xin chao cac ban. hom nay troi dep qua !toi di hoc ve ?";
console.log(chuanHoaCau(inputStr));
