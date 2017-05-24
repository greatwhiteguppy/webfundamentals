var users = {
    "Students": [
        {first_name: "Michael", last_name: "Jordan"},
        {first_name: "John", last_name: "Rosales"},
        {first_name: "Mark", last_name: "Guillen"},
        {first_name: "KB", last_name: "Tonel"}
    ],
    "Instructors": [
        {first_name: "Michael", last_name: "Choi"},
        {first_name: "Martin", last_name: "Puryear"}
    ]
}
//what is in users? what is in the x index of students and the first name?
console.log(users.Students[3].first_name);
//below two methods to get different lists of users to iterate through
// console.log(Object.keys(users));
//for key in the users object
for (var i in users) {
// console.log the string representation of the key
    console.log(i);
    //asking users object to return what is stored in the memory location that the first_name would point to
    console.log(users.first_name);
    //unpack each users[i]
    console.log(users[i]);
    for(var j in users[i]) {
        console.log(users[i][j].first_name);
    }
}


// // keys to check for in users
// var userTypes = ["Students", "Instructors"];
// // iteratre through the keys we are looking for
// for (var i=0; i <userTypes.length; i++) {
//     var TypeOfUser = userTypes[i];
//     console.log(TypeOfUser);
//     var userCollection = users[TypeOfUser];
//     for (var i = 0; i < userCollection.length; i++) {
//         var person = userCollection[i];
//         console.log(person);
//     }
// }
