var students = [
        {first_name: "Michael", last_name: "Jordan"},
        {first_name: "John", last_name: "Rosales"},
        {first_name: "Mark", last_name: "Guillen"},
        {first_name: "KB", last_name: "Tonel"},
]

for (var i = 0; i< students.length; i++) {
    var student = students[i];
    console.log(student.first_name + ' ' + student.last_name);
}
