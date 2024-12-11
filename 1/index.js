const con = document.getElementById("container");
const par = document.createElement("p");
const DidBut = document.createElement("button");
const MazBut = document.createElement("button");

par.textContent = "0";
par.style.fontSize = "24px";
par.style.textAlign = "center";

DidBut.textContent = "didinti";
DidBut.style.padding = "10px 20px";
DidBut.style.margin = "5px";
DidBut.style.backgroundColor = "lightgray";

MazBut.textContent = "mazinti";
MazBut.style.padding = "10px 20px";
MazBut.style.margin = "5px";
MazBut.style.backgroundColor = "lightgray";

con.appendChild(par);
con.appendChild(DidBut);
con.appendChild(MazBut);

function sukurtPar() {
  par.textContent = count;

  if (count % 2 === 0) {
    DidBut.style.backgroundColor = "red";
    MazBut.style.backgroundColor = "red";
  } else {
    DidBut.style.backgroundColor = "lightgray";
    MazBut.style.backgroundColor = "lightgray";
  }
}

let count = 0;

function didinti() {
  count++;
  sukurtPar();
}

function mazinti() {
  count--;
  sukurtPar();
}

DidBut.addEventListener("click", didinti);
MazBut.addEventListener("click", mazinti);
