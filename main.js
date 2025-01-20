//string , Number , Boolean , Object , Array
//string - ตัวอักษร
//let เปลี่ยนค่าได้ const เป๋นค่าคงที่เปลี่ยนค่าไม่ได้
let name = 'John';
const idcard = '1234'

// Number - ตัวเลข
//let age = 30;
//let height = 180.5;

// Boolean - คำที่เป็นจริงหรือเท็จ
//let isSingle = true;

//firstname = 'Jane';

/*
&& และ
|| หรือ
! not หรือ ไม่
*/

let number1 = 5
let number2 = 8
// true && false = true
let condition = !(number1 >= 3 || number2 >= 5)
console.log('result of condition',condition)

let age = 30
let gender = 'male'
// true && true = true
if (age >= 20 && gender == 'male') {
    console.log('you are male adult')
}

/*
while
for
*/

let counter = 0;

while (counter < 10) {
    console.log('Hello');
    counter = counter + 1;
    //counter += 1;
    //counter++; เขียนได้ทั้งสามแบบ
}

for (let counter = 0; counter < 10; counter = counter + 1) {
    console.log('Hello');
}

/*
array
*/
/*
let age1 = 18;
let age1 = 19;
let age1 = 20;
console.log(age1,age2,age3);

let ages = [18,19,20];
console.log('age is ',ages[2]);
console.log('age is ',ages);
*/
let score = [10,20,30,40,50];
for (let index = 0; index < name_list.length; index++)
score.forEach(s) => {
    console.log('new score',s);
};

/*
let ages = [18,13,20];
console.log('age is ',ages);
ages.sort();
console.log('age is ',ages);

let name_list = ['John','Bob','Alice'];
name_list.push('David');
console.log('name_list is ',name_list.length);
console.log('name_list is ',name_list[0]);
console.log('name_list is ',name_list[1]);
console.log('name_list is ',name_list[2]);
console.log('name_list is ',name_list[3]);

for (let index = 0; index < name_list.length; index++) {
    console.log('for name_list is ',name_list[index]);
}
*/

/*
object
*/

let student = [{
    age : 30,
    name : 'John',
    grade : 'A'
},{
    age : 25,
    name : 'Jane',
    grade : 'B'

},{
    age : 20,
    name : 'Jo',
    grade : 'C'
}];
student.pop()

for (let index = 0; index < name_list.length; index++) {
    console.log
}

/*
object+array
*/

let scores1 = 50
let scores2 = 50
let grade = ''

//ประกาศ function ชื่อ calculateGrade ที่รับค่า scores เป็น parameter

function calculateGrade(scores) {
if (score >= 80) {
    grade = 'A'
} else if (score >= 70) {
    grade = 'B' 
} else if (score >= 60) {
    grade = 'C'
} else if (score >= 50) {
    grade = 'D'
} else {
    grade = 'F'
}
return grade
}

//เรียกใช้ Function โดยส่งค่า scores1 และ scores2 เข้าไป

let grade1 = calculateGrade(scores1)
let grade2 = calculateGrade(scores2)
//แสดงผลลัพธ์

console.log('grade1 :', grade1)
console.log('grade2 :', grade2)

/*
let student = {
    age : 30,
    name : 'John',
    grade : 'A'
};

console.log('age',student.age);
console.log('name',student.name);
console.log('grade',student.grade);

let age = 30;
let name = 'John';
let grade = 'A';
*/
/*
//1 แทนที่
ages = [21,22];
console.log('new age is ',ages);

//2 ต่อ array
ages.push(23);
console.log('age is ',ages);
*/


 /*
let score = prompt("Enter your score : ");
console.log('You have score',score);

if (score >= 80) {
  console.log("Grade A");
} else if (score >= 70) {
  console.log("Grade B");
} else if (score >= 60) {
    console.log("Grade C");
} else if (score >= 50) {
    console.log("Grade D");
} else {
    console.log("Grade F");
}
//console.log('Name : ', firstname , 'Age : ', age,);
//let Number1 = 5
//let Number2 = 10

//if - else condition

//if (Number1 !=  Number2) {
//   console.log('this is if')
//} else if (Number1 == Number2) {
//    console.log('this is else if')
//} else {
//    console.log('this is else')
//}

//let result = Number1 % Number2
//console.log('new number',result)
*/
