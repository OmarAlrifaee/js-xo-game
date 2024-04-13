let title = document.getElementById("title");
let square = document.querySelector(".square");
let squares = document.querySelectorAll(".square");

console.log(squares);

let turn = "x";

document.addEventListener("click", play);

function play(event) {
  if (event.target.className === "square" && event.target.innerHTML === "") {
    event.target.innerHTML = turn;

    switch (turn) {
      case "x":
        turn = "o";
        title.children[0].innerHTML = "o turn";
        title.children[1].innerHTML = "";
        break;

      case "o":
        turn = "x";
        title.children[0].innerHTML = "x turn";
        title.children[1].innerHTML = "";
        break;
    }
  }
  game();
}

function game() {
  if (
    squares[0].innerHTML === "x" &&
    squares[1].innerHTML === "x" &&
    squares[2].innerHTML === "x"
  ) {
    title.children[0].innerHTML = "x";
    title.children[0].classList.add("x-o");
    title.children[1].innerHTML = "is Winner!";
    title.children[1].classList.add("winner");
    squares[0].classList.add("black-background");
    squares[1].classList.add("black-background");
    squares[2].classList.add("black-background");

    setInterval(function () {
      title.children[1].innerHTML += ".";
    }, 1000);

    setTimeout(function () {
      window.location.reload(1);
    }, 4000);
  } else if (
    squares[3].innerHTML === "x" &&
    squares[4].innerHTML === "x" &&
    squares[5].innerHTML === "x"
  ) {
    title.children[0].innerHTML = "x";
    title.children[0].classList.add("x-o");
    title.children[1].innerHTML = "is Winner!";
    title.children[1].classList.add("winner");
    squares[3].classList.add("black-background");
    squares[4].classList.add("black-background");
    squares[5].classList.add("black-background");

    setInterval(function () {
      title.children[1].innerHTML += ".";
    }, 1000);

    setTimeout(function () {
      window.location.reload(1);
    }, 4000);
  } else if (
    squares[6].innerHTML === "x" &&
    squares[7].innerHTML === "x" &&
    squares[8].innerHTML === "x"
  ) {
    title.children[0].innerHTML = "x";
    title.children[0].classList.add("x-o");
    title.children[1].innerHTML = "is Winner!";
    title.children[1].classList.add("winner");
    squares[6].classList.add("black-background");
    squares[7].classList.add("black-background");
    squares[8].classList.add("black-background");
    setTimeout(function () {
      window.location.reload(1);
    }, 2000);
  } else if (
    squares[0].innerHTML === "x" &&
    squares[3].innerHTML === "x" &&
    squares[6].innerHTML === "x"
  ) {
    title.children[0].innerHTML = "x";
    title.children[0].classList.add("x-o");
    title.children[1].innerHTML = "is Winner!";
    title.children[1].classList.add("winner");
    squares[0].classList.add("black-background");
    squares[3].classList.add("black-background");
    squares[6].classList.add("black-background");

    setInterval(function () {
      title.children[1].innerHTML += ".";
    }, 1000);

    setTimeout(function () {
      window.location.reload(1);
    }, 4000);
  } else if (
    squares[1].innerHTML === "x" &&
    squares[4].innerHTML === "x" &&
    squares[7].innerHTML === "x"
  ) {
    title.children[0].innerHTML = "x";
    title.children[0].classList.add("x-o");
    title.children[1].innerHTML = "is Winner!";
    title.children[1].classList.add("winner");
    squares[1].classList.add("black-background");
    squares[4].classList.add("black-background");
    squares[7].classList.add("black-background");

    setInterval(function () {
      title.children[1].innerHTML += ".";
    }, 1000);

    setTimeout(function () {
      window.location.reload(1);
    }, 4000);
  } else if (
    squares[2].innerHTML === "x" &&
    squares[5].innerHTML === "x" &&
    squares[8].innerHTML === "x"
  ) {
    title.children[0].innerHTML = "x";
    title.children[0].classList.add("x-o");
    title.children[1].innerHTML = "is Winner!";
    title.children[1].classList.add("winner");
    squares[2].classList.add("black-background");
    squares[5].classList.add("black-background");
    squares[8].classList.add("black-background");

    setInterval(function () {
      title.children[1].innerHTML += ".";
    }, 1000);

    setTimeout(function () {
      window.location.reload(1);
    }, 4000);
  } else if (
    squares[0].innerHTML === "x" &&
    squares[4].innerHTML === "x" &&
    squares[8].innerHTML === "x"
  ) {
    title.children[0].innerHTML = "x";
    title.children[0].classList.add("x-o");
    title.children[1].innerHTML = "is Winner!";
    title.children[1].classList.add("winner");
    squares[0].classList.add("black-background");
    squares[4].classList.add("black-background");
    squares[8].classList.add("black-background");

    setInterval(function () {
      title.children[1].innerHTML += ".";
    }, 1000);

    setTimeout(function () {
      window.location.reload(1);
    }, 4000);
  } else if (
    squares[2].innerHTML === "x" &&
    squares[4].innerHTML === "x" &&
    squares[6].innerHTML === "x"
  ) {
    title.children[0].innerHTML = "x";
    title.children[0].classList.add("x-o");
    title.children[1].innerHTML = "is Winner!";
    title.children[1].classList.add("winner");
    squares[2].classList.add("black-background");
    squares[4].classList.add("black-background");
    squares[6].classList.add("black-background");

    setInterval(function () {
      title.children[1].innerHTML += ".";
    }, 1000);

    setTimeout(function () {
      window.location.reload(1);
    }, 4000);
  }

  if (
    squares[0].innerHTML === "o" &&
    squares[1].innerHTML === "o" &&
    squares[2].innerHTML === "o"
  ) {
    title.children[0].innerHTML = "o";
    title.children[0].classList.add("x-o");
    title.children[1].innerHTML = "is Winner!";
    title.children[1].classList.add("winner");
    squares[0].classList.add("black-background");
    squares[1].classList.add("black-background");
    squares[2].classList.add("black-background");

    setInterval(function () {
      title.children[1].innerHTML += ".";
    }, 1000);

    setTimeout(function () {
      window.location.reload(1);
    }, 4000);
  } else if (
    squares[3].innerHTML === "o" &&
    squares[4].innerHTML === "o" &&
    squares[5].innerHTML === "o"
  ) {
    title.children[0].innerHTML = "o";
    title.children[0].classList.add("x-o");
    title.children[1].innerHTML = "is Winner!";
    title.children[1].classList.add("winner");
    squares[3].classList.add("black-background");
    squares[4].classList.add("black-background");
    squares[5].classList.add("black-background");

    setInterval(function () {
      title.children[1].innerHTML += ".";
    }, 1000);

    setTimeout(function () {
      window.location.reload(1);
    }, 4000);
  } else if (
    squares[6].innerHTML === "o" &&
    squares[7].innerHTML === "o" &&
    squares[8].innerHTML === "o"
  ) {
    title.children[0].innerHTML = "o";
    title.children[0].classList.add("x-o");
    title.children[1].innerHTML = "is Winner!";
    title.children[1].classList.add("winner");
    squares[6].classList.add("black-background");
    squares[7].classList.add("black-background");
    squares[8].classList.add("black-background");

    setInterval(function () {
      title.children[1].innerHTML += ".";
    }, 1000);

    setTimeout(function () {
      window.location.reload(1);
    }, 4000);
  } else if (
    squares[0].innerHTML === "o" &&
    squares[3].innerHTML === "o" &&
    squares[6].innerHTML === "o"
  ) {
    title.children[0].innerHTML = "o";
    title.children[0].classList.add("x-o");
    title.children[1].innerHTML = "is Winner!";
    title.children[1].classList.add("winner");
    squares[0].classList.add("black-background");
    squares[3].classList.add("black-background");
    squares[6].classList.add("black-background");

    setInterval(function () {
      title.children[1].innerHTML += ".";
    }, 1000);

    setTimeout(function () {
      window.location.reload(1);
    }, 4000);
  } else if (
    squares[1].innerHTML === "o" &&
    squares[4].innerHTML === "o" &&
    squares[7].innerHTML === "o"
  ) {
    title.children[0].innerHTML = "o";
    title.children[0].classList.add("x-o");
    title.children[1].innerHTML = "is Winner!";
    title.children[1].classList.add("winner");
    squares[1].classList.add("black-background");
    squares[4].classList.add("black-background");
    squares[7].classList.add("black-background");

    setInterval(function () {
      title.children[1].innerHTML += ".";
    }, 1000);

    setTimeout(function () {
      window.location.reload(1);
    }, 4000);
  } else if (
    squares[2].innerHTML === "o" &&
    squares[5].innerHTML === "o" &&
    squares[8].innerHTML === "o"
  ) {
    title.children[0].innerHTML = "o";
    title.children[0].classList.add("x-o");
    title.children[1].innerHTML = "is Winner!";
    title.children[1].classList.add("winner");
    squares[2].classList.add("black-background");
    squares[5].classList.add("black-background");
    squares[8].classList.add("black-background");

    setInterval(function () {
      title.children[1].innerHTML += ".";
    }, 1000);

    setTimeout(function () {
      window.location.reload(1);
    }, 4000);
  } else if (
    squares[0].innerHTML === "o" &&
    squares[4].innerHTML === "o" &&
    squares[8].innerHTML === "o"
  ) {
    title.children[0].innerHTML = "o";
    title.children[0].classList.add("x-o");
    title.children[1].innerHTML = "is Winner!";
    title.children[1].classList.add("winner");
    squares[0].classList.add("black-background");
    squares[4].classList.add("black-background");
    squares[8].classList.add("black-background");

    setInterval(function () {
      title.children[1].innerHTML += ".";
    }, 1000);

    setTimeout(function () {
      window.location.reload(1);
    }, 4000);
  } else if (
    squares[2].innerHTML === "o" &&
    squares[4].innerHTML === "o" &&
    squares[6].innerHTML === "o"
  ) {
    title.children[0].innerHTML = "o";
    title.children[0].classList.add("x-o");
    title.children[1].innerHTML = "is Winner!";
    title.children[1].classList.add("winner");
    squares[2].classList.add("black-background");
    squares[4].classList.add("black-background");
    squares[6].classList.add("black-background");

    setInterval(function () {
      title.children[1].innerHTML += ".";
    }, 1000);

    setTimeout(function () {
      window.location.reload(1);
    }, 4000);
  } else if (
    squares[0].innerHTML !== "" &&
    squares[1].innerHTML !== "" &&
    squares[2].innerHTML !== "" &&
    squares[3].innerHTML !== "" &&
    squares[4].innerHTML !== "" &&
    squares[5].innerHTML !== "" &&
    squares[6].innerHTML !== "" &&
    squares[7].innerHTML !== "" &&
    squares[8].innerHTML !== ""
  ) {
    title.children[0].innerHTML = "";
    title.children[1].innerHTML = "DRAW!! restart in 4s";
    title.children[1].classList.add("winner");

    setInterval(function () {
      title.children[1].innerHTML += ".";
    }, 1000);

    setTimeout(function () {
      window.location.reload(1);
    }, 4000);
  }
}

// طريقة مختصرة بس مو كتير منيحة

// function game() {
//       if (squares[0].innerHTML === turn && squares[1].innerHTML === turn && squares[2].innerHTML === turn) {
//             title.children[0].innerHTML = turn;
//             title.children[0].classList.add("x-o");
//             title.children[1].innerHTML = "is Winner!";
//             title.children[1].classList.add("winner");
//             squares[0].classList.add("black-background");
//             squares[1].classList.add("black-background");
//             squares[2].classList.add("black-background");
//             setTimeout(function () {
// window.location.reload(1);
//             }, 2000);

//       } else if (squares[3].innerHTML === turn && squares[4].innerHTML === turn && squares[5].innerHTML === turn){
//             title.children[0].innerHTML = turn;
//             title.children[0].classList.add("x-o");
//             title.children[1].innerHTML = "is Winner!";
//             title.children[1].classList.add("winner");
//             squares[3].classList.add("black-background");
//             squares[4].classList.add("black-background");
//             squares[5].classList.add("black-background");
//             setTimeout(function () {
//                   window.location.reload(1);
//             }, 2000);

//       } else if (squares[6].innerHTML === turn && squares[7].innerHTML === turn && squares[8].innerHTML === turn) {
//             title.children[0].innerHTML = turn;
//             title.children[0].classList.add("x-o");
//             title.children[1].innerHTML = "is Winner!";
//             title.children[1].classList.add("winner");
//             squares[6].classList.add("black-background");
//             squares[7].classList.add("black-background");
//             squares[8].classList.add("black-background");
//             setTimeout(function () {
//                   window.location.reload(1);
//             }, 2000);

//       } else if (squares[0].innerHTML === turn && squares[3].innerHTML === turn && squares[6].innerHTML === turn) {
//             title.children[0].innerHTML = turn;
//             title.children[0].classList.add("x-o");
//             title.children[1].innerHTML = "is Winner!";
//             title.children[1].classList.add("winner");
//             squares[0].classList.add("black-background");
//             squares[3].classList.add("black-background");
//             squares[6].classList.add("black-background");
//             setTimeout(function () {
//                   window.location.reload(1);
//             }, 2000);

//       } else if (squares[1].innerHTML === turn && squares[4].innerHTML === turn && squares[7].innerHTML === turn) {
//             title.children[0].innerHTML = turn;
//             title.children[0].classList.add("x-o");
//             title.children[1].innerHTML = "is Winner!";
//             title.children[1].classList.add("winner");
//             squares[1].classList.add("black-background");
//             squares[4].classList.add("black-background");
//             squares[7].classList.add("black-background");
//             setTimeout(function () {
//                   window.location.reload(1);
//             }, 2000);

//       } else if (squares[2].innerHTML === turn && squares[5].innerHTML === turn && squares[8].innerHTML === turn) {
//             title.children[0].innerHTML = turn;
//             title.children[0].classList.add("x-o");
//             title.children[1].innerHTML = "is Winner!";
//             title.children[1].classList.add("winner");
//             squares[2].classList.add("black-background");
//             squares[5].classList.add("black-background");
//             squares[8].classList.add("black-background");
//             setTimeout(function () {
//                   window.location.reload(1);
//             }, 2000);

//       } else if (squares[0].innerHTML === turn && squares[4].innerHTML === turn && squares[8].innerHTML === turn) {
//             title.children[0].innerHTML = turn;
//             title.children[0].classList.add("x-o");
//             title.children[1].innerHTML = "is Winner!";
//             title.children[1].classList.add("winner");
//             squares[0].classList.add("black-background");
//             squares[4].classList.add("black-background");
//             squares[8].classList.add("black-background");
//             setTimeout(function () {
//                   window.location.reload(1);
//             }, 2000);

//       } else if (squares[2].innerHTML === turn && squares[4].innerHTML === turn && squares[6].innerHTML === turn){
//             title.children[0].innerHTML = turn;
//             title.children[0].classList.add("x-o");
//             title.children[1].innerHTML = "is Winner!";
//             title.children[1].classList.add("winner");
//             squares[2].classList.add("black-background");
//             squares[4].classList.add("black-background");
//             squares[6].classList.add("black-background");
//             setTimeout(function () {
//                   window.location.reload(1);
//             }, 2000);

//       }
// }
