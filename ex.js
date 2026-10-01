// SET    B

1.
const students = [
    { id: 1, name: "Alice", age: 22, grade: "A", enrolled: true },
    { id: 2, name: "Bob", age: 24, grade: "B", enrolled: false },
    { id: 3, name: "Charlie", age: 21, grade: "A", enrolled: true },
    { id: 4, name: "David", age: 23, grade: "C", enrolled: true },
    { id: 5, name: "Eva", age: 25, grade: "B", enrolled: false }
];

Questions:
console.log("========student names======");
// 1.Print all student names.

students.forEach(student=>{console.log(student.name);})

console.log("========enroled======");
// 2.Print all students who are currently enrolled.

let enrolledStudents=students.filter(student => student.enrolled==true);
console.log(enrolledStudents);

console.log("==============");
// 3.Find the grade of the student with the name "David".

let grade;
for (let student of students) {
    if (student.name == "David") {
        grade = student.grade;
    }
}
console.log(grade);

// 4.Create a function to add a new student to the list.

function add(id, name, age, grade, enrolled) {
    students.push({
        id: id,
        name: name,
        age: age,
        grade: grade,
        enrolled: enrolled
    });
}
add(6,"Prabin",20,"A",true);
console.log(students);


// 5.Write a function to remove a student by their ID.
// 6.Write a function to update the enrollment status of a student.
// 7.List all students whose grade is "A".

console.log("========A grade======");

let result=students.filter(student=>student.grade=="A");
console.log(result);



// 8.Calculate the average age of all enrolled students.

2.
const devices = [
    {
        id: 1, 
        name: "iPhone 14", 
        brand: "Apple", 
        price: 999, 
        inStock: 'yes', 
        features: {
            storage: "128GB", 
            batteryLife: "20"
        }
    },
    {
        id: 2, 
        name: "Galaxy S21", 
        brand: "Samsung", 
        price: 799, 
        inStock: 'No', 
        features: {
            storage: "256GB", 
            batteryLife: "22 "
        }
    },
    {
        id: 3, 
        name: "Pixel 7", 
        brand: "Google", 
        price: 599, 
        inStock: 'yes', 
        features: {
            storage: "128GB", 
            batteryLife: "24 "
        }
    },
    {
        id: 4, 
        name: "Surface Laptop 4", 
        brand: "Microsoft", 
        price: 1499, 
        inStock: 'yes', 
        features: {
            storage: "512GB", 
            batteryLife: "15"
        }
    },
    {
        id: 5, 
        name: "MacBook Air", 
        brand: "Apple", 
        price: 999, 
        inStock: 'No', 
        features: {
            storage: "256GB", 
            batteryLife: "18 "
        }
    }
];

console.log("========device names======");


// 1.Print all device names.


devices.forEach(device => {
        console.log(device.name);
});

console.log("========greater than $800======");

// 2.Print all device names whose price is greater than $800.

devices.filter(device=>device.price>800).forEach(device=>console.log(device.name));

console.log("========out of stock======");
// 3.Print out-of-stock devices.

let st=devices.filter(device=>device.inStock=="No");
console.log(st);


console.log("========battery======");
// 4.Find the device names with battery life greater than 20 hours.

let life=devices.filter(device=>device.features.batteryLife>20).map(device=>device.name);

console.log(life);

// 5.Calculate the total revenue generated
//  when all available devices are sold out.


// 3. Print the Fibonacci series using recursion