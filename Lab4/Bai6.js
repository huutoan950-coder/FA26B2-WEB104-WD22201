const firstNames = [
  "An",
  "Bình",
  "Chi",
  "Duy",
  "Hà",
  "Khánh",
  "Lan",
  "Minh",
  "Ngọc",
  "Quân",
];
const lastNames = [
  "Nguyễn",
  "Trần",
  "Lê",
  "Phạm",
  "Hoàng",
  "Vũ",
  "Đặng",
  "Bùi",
];

const fakeStudents = [];
for (let i = 1; i <= 100; i++) {
  const ho = lastNames[i % lastNames.length];
  const ten = firstNames[i % firstNames.length];
  const score = Number((5 + ((i * 7) % 51) / 10).toFixed(1));
  fakeStudents.push({
    id: i,
    name: `${ho} ${ten}`,
    score: score > 10 ? 10 : score,
  });
}

console.log("Tổng số sinh viên:", fakeStudents.length);
console.log("5 sinh viên đầu:", fakeStudents.slice(0, 5));
const highScoreCount = fakeStudents.filter((sv) => sv.score >= 8).length;
console.log("Số SV điểm >= 8:", highScoreCount);
