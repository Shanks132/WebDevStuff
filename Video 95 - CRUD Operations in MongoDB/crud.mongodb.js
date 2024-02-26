use('crudDB');
// db.createCollection("courses");
// db.dropDatabase('courses');
// db.courses.insertMany([
//     {
//       "Name": "Ruby Programming Fundamentals",
//       Price: 0,
//       "Assignments": 10,
//       "Projects": 8
//     },
//     {
//       "Name": "Python Web Development Bootcamp",
//       Price: 1000,
//       "Assignments": 15,
//       "Projects": 20
//     },
//     {
//       "Name": "JavaScript Advanced Concepts",
//       Price: 2000,
//       "Assignments": 8,
//       "Projects": 12
//     },
//     {
//       "Name": "Data Science with R",
//       Price: 3000,
//       "Assignments": 18,
//       "Projects": 10
//     },
//     {
//       "Name": "Android App Development Workshop",
//       Price: 4000,
//       "Assignments": 12,
//       "Projects": 15
//     },
//     {
//       "Name": "Machine Learning Basics",
//       Price: 5000,
//       "Assignments": 10,
//       "Projects": 10
//     },
//     {
//       "Name": "Frontend Web Design Masterclass",
//       Price: 6000,
//       "Assignments": 20,
//       "Projects": 18
//     },
//     {
//       "Name": "Cybersecurity Essentials",
//       Price: 7000,
//       "Assignments": 15,
//       "Projects": 12
//     },
//     {
//       "Name": "Game Development with Unity",
//       Price: 8000,
//       "Assignments": 12,
//       "Projects": 15
//     },
//     {
//       "Name": "Cloud Computing Workshop",
//       Price: 9000,
//       "Assignments": 10,
//       "Projects": 10
//     }
//   ]
// );


// let a = db.courses.find({Price:0});


// console.log(a)

// // let b = a.toArray()
// // console.log(b)

// //update

// db.courses.updateOne({Price:5000},{$set:{Price:1500}});
// let a1 = db.courses.find(); ;
// console.log(a1)

//delete
// db.courses.deleteOne({Price:1500});

//backchodi
let a3 = db.courses.find({Price:{$lte:4000}, "Assignments":{$eq:12}})
console.log(a3)

console.log(db.courses.find({}))