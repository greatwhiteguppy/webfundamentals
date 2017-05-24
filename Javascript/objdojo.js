var dojo = {};
dojo = {
    name: "Coding Dojo",
    number_of_students: 25,
    instructors: ["Andrew", "Michael", "Jay"],
    location: {
        city: "San Jose",
        state: "CA",
        zipcode: 95122
    }
}

console.log(dojo.name, dojo.number_of_students, dojo.instructors, dojo.location);

console.log(dojo["name"]);

dojo.snacks = ["Fig Bars", "Bagels", "Popcorn", "Apples"];
dojo.number_of_students = 40;
dojo.location.city = "Bellevue";
dojo.location.state = "Washington";
dojo.location.zipcode = "unknown";

console.log(dojo);

var glazedDonuts = [
  {
    frosting: 'glazed',
    style: 'cake',
    type: 'old fashioned',
    age: '45',
    time: 'minutes'
  },
  {
    frosting: 'glazed',
    style: 'yeast raised',
    type: 'regular',
    age: '5',
    time: 'minutes'
  },
  {
    frosting: 'glazed',
    style: 'yeast raised',
    type: 'jelly filled',
    age: '1',
    time: 'seconds'
  }
];

var purchase;
//you
if(glazedDonuts[0].age < 25 && (glazedDonuts[0].time == 'seconds' || glazedDonuts[0].time == 'minutes')) {
    //shop owner
    purchase = glazedDonutes[0];
}
    else {
        console.log('sorry it has been out a bit longer');
    }

var numPurchase = 0;
for (var donut in glazedDonuts) {
  if (glazedDonuts[donut].age < 25 && (glazedDonuts[donut].time == 'seconds' || glazedDonuts[donut].time == 'minutes')) {
    numPurchase++;
  }
  else {
    console.log('not this donut...');
  }
}
console.log(numPurchase);
