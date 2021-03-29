document.write("Hello,world!");

  function sayHello(){
    var response = prompt("what's your name?");
    alert("Hello" + response + ", have a good day!");
  }

function add(a,b){
  return a+b;
}
console.log(add(20,30));
console.log(add(100,300));

function showTopic(){
  var x = document.getElementById("demo");
  x.style.fontSize = "25px";
  x.style.color = "red"
}

var movies = ["Avengers","Captain Marvel","Black panther","Spiderman"];
movies[0]="Wonder woman";
movies.push("Avengers");
movies.pop();
console.log(movies);

var movie ={
  title:"Avengers",
  time:"12pm"
};
movie.status = "available";
console.log(movie);


var movie = {
  title:"Avengers",
  time:"12pm"
};

var movieDetails = [
{title: "Avengers",
  time:"12pm",
  status: "available"},
{title: "Captain Marvel",
  time:"2pm",
  status: "unavailable"},
{title: "Black Panther",
  time:"4pm",
  status: "available"},
{title: "Spiderman",
  time:"6pm",
  status: "available"}
];

for (var movie of movieDetails){
  if (movie.status === "available"){
    console.log("The movie " + movie.title + " plays at " + movie.time)
  }
else{
    console.log("Sorry, the movie " + movie.title + " is sold out.")
  }
};
