const students = [
  { name: "An", score: 8.2 },
  { name: "Bình", score: 7.5 },
  { name: "Chi", score: 9.1 },
  { name: "Duy", score: 6.8 },
  { name: "Hà", score: 8.7 },
  { name: "Khánh", score: 5.9 },
  { name: "Lan", score: 7.8 },
  { name: "Minh", score: 9.4 },
  { name: "Ngọc", score: 6.5 },
  { name: "Quân", score: 8.0 },
];

const aboveEight = students.filter((sv) => sv.score > 8);
console.log("Điểm > 8:", aboveEight);

let topStudent = students[0];
for (let i = 1; i < students.length; i++) {
  if (students[i].score > topStudent.score) {
    topStudent = students[i];
  }
}
console.log("Điểm cao nhất:", topStudent);

let sumScore = 0;
for (let i = 0; i < students.length; i++) {
  sumScore += students[i].score;
}
const avgScore = sumScore / students.length;
console.log("Điểm trung bình:", avgScore.toFixed(2));

const studentNames = students.map((sv) => sv.name);
console.log("Danh sách tên:", studentNames);

const sortedDesc = [...students].sort((a, b) => b.score - a.score);
console.log("Sắp xếp giảm dần:", sortedDesc);
