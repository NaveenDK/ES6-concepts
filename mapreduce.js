var pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22
  }
];

//filter out all ids of the pilots using map
// var ids = pilots.map(function(pilot) {
//   return pilot.id;
// });

var ids = pilots.filter(pilot => {
  return pilot.id;
});
//console.log(ids);
//find total years of experience with reduce
// var years = pilots.reduce((agetotal, pilot) => agetotal + pilot.years, 0);

var years = pilots.reduce((agetotal, pilot) => {
  agetotal + pilot.years;
}, 0);
//
console.log(years);
