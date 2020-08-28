console.time();

//Function that colors class col-md-4 red
function myFunction() {
  document.querySelector(".col-md-4").style.backgroundColor = "red";
}

//Function that colors the backround of class container red
function myFunc() {
  let x, i;
  x = document.querySelectorAll(".container");
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "red";
  }
}

// Function to change the content of t2
function modifyText() {
  const t2 = document.getElementById("t5");
  if (t2.firstChild.nodeValue == "5") {
    t2.firstChild.nodeValue = "mff";
  } else {
    t2.firstChild.nodeValue = "aik";
  }
}
// Add event listener to table
const el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);

//Create button and append it to body
function buttonFunc() {
  var btn = document.createElement("BUTTON");
  btn.innerHTML = "MFF!";
  document.body.appendChild(btn);
}

function myLocation() {
  location.assign("https://www.mff.se/");
}

let people = [
  { age: 20, name: "Jesper" },
  { age: 20, name: "Malin" },
  { age: 1, name: "Arvid" },
  { age: 3, name: "Mysan" },
];

//Map
const peopleAge = people.map((people) => people.age);

console.log(peopleAge);

//Using Reduce to calculate total age of people
const totalAge = people.reduce((acc, people) => acc + people.age, 0);

console.log(totalAge);

//Filter to show people the same age
const sameAge = people.filter((people) => people.age === 20);

console.log(sameAge);

console.table(people);

console.log(location.hash);
console.log(location.protocol);
console.log(location.port);

console.timeEnd();
