/* Declaration */
let students = [
  { name: "Ahmed", age: 20, grade: 14 },
  { name: "Sara", age: 22, grade: 18 },
  { name: "Ali", age: 19, grade: 9 },
  { name: "Yasmine", age: 21, grade: 16 },
];

/* Task 1 */
console.log("Task 1 : Displaying students ( loops )");
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}

/* Task 2 & Task 3*/
console.log("\nTask 2 : Checking wether they passed ( conditions )");
let passed = 0;
for (let i = 0; i < students.length; i++) {
  if (students[i].grade >= 10) {
    console.log(students[i].name + " passed");
    passed++;
  } else console.log(students[i].name + " failed");
}

/* Task 3 */
console.log("\nTask 3 : Counting students who passed");
console.log("number of student who passed : " + passed);

/* Task 4 */
console.log("\nTask 4 : Student with highest grade");
let topGrade = 0,
  topStudent;
for (let i = 0; i < students.length; i++) {
  if (students[i].grade > topGrade) {
    topGrade = students[i].grade;
    topStudent = students[i].name;
  }
}
console.log("Top student is " + topStudent + " with grade " + topGrade);

/* Task 5 */
console.log("\nTask 5 : Wether adult\n");
function isAdult(age) {
  if (age >= 18) return true;
  else return false;
}
console.log("Is this student an adult?\n");
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name + " : " + isAdult(students[i].age));
}

/* Task 6 */
console.log("\nTask 6 : finding Sara");
let saraInfo = students.find(function (students) {
  return students.name === "Sara";
});
console.log(saraInfo);

console.log("\n& filtering students who passed");
let passingStudents = students.filter(function (students) {
  return students.grade >= 10;
});

for (let i = 0; i < passingStudents.length; i++) {
  console.log(passingStudents[i].name);
}
