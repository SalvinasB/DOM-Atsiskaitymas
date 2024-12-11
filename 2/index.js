const con = document.getElementById("container");
const inputRows = document.createElement("input");
const inputSub = document.createElement("input");
const button = document.createElement("button");
const div = document.createElement("div");

inputRows.type = "number";
inputRows.placeholder = "Numeruotų eilučių skaičius";
inputRows.style.margin = "5px";

inputSub.type = "number";
inputSub.placeholder = "Nenumeruotų eilučių skaičius";
inputSub.style.margin = "5px";

button.textContent = "Generuoti sąrašus";
button.style.padding = "10px 20px";
button.style.margin = "10px";
button.style.backgroundColor = "lightblue";
button.style.border = "none";
button.style.cursor = "pointer";

div.style.marginTop = "20px";

con.appendChild(inputRows);
con.appendChild(inputSub);
con.appendChild(button);
con.appendChild(div);

button.addEventListener("click", () => {
  const eiluciu = parseInt(inputRows.value) || 0;
  const vidiniuEil = parseInt(inputSub.value) || 0;

  div.innerHTML = "";

  const createListItem = (text, childList = null) => {
    const li = document.createElement("li");
    li.textContent = text;
    if (childList) li.appendChild(childList);
    return li;
  };

  for (let i = 1; i <= eiluciu; i++) {
    const ol = document.createElement("ol");
    const ul = document.createElement("ul");

    for (let j = 1; j <= vidiniuEil; j++) {
      ul.appendChild(createListItem(`Nenumeruota eilutė ${j}`));
    }

    ol.appendChild(createListItem(`Numeruota eilutė ${i}`, ul));
    div.appendChild(ol);
  }
});
