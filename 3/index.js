const uzduotisText = document.getElementById("uzduotis-text");
const uzduotisPrioritetas = document.getElementById("uzduotis-prioritetas");
const forma = document.getElementById("forma");
const lentelė = document.getElementById("uzduociu-lentelė");
const sarasas = document.getElementById("uzduociu-sarasas");

function atvaizduotiUzduotis() {
  const uzduotys = JSON.parse(localStorage.getItem("uzduotys")) || [];
  sarasas.innerHTML = "";
  lentelė.classList.toggle("hidden", uzduotys.length === 0);

  uzduotys.forEach((uzduotis, index) => {
    const eilutė = document.createElement("tr");

    eilutė.innerHTML = `
        <td class="${uzduotis.atlikta ? "completed" : ""}">${uzduotis.text}</td>
        <td>${uzduotis.prioritetas}</td>
        <td><input type="checkbox" ${
          uzduotis.atlikta ? "checked" : ""
        } onchange="pakeistiUzduotiesStatusa(${index})"></td>
        <td><button onclick="istrintiUzduoti(${index})">Ištrinti</button></td>
      `;

    sarasas.appendChild(eilutė);
  });
}

forma.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = uzduotisText.value.trim();
  if (!text) return;

  const uzduotys = JSON.parse(localStorage.getItem("uzduotys") || "[]");
  uzduotys.push({
    text,
    prioritetas: uzduotisPrioritetas.value,
    atlikta: false,
  });

  localStorage.setItem("uzduotys", JSON.stringify(uzduotys));
  uzduotisText.value = "";
  atvaizduotiUzduotis();
});

function pakeistiUzduotiesStatusa(index) {
  const uzduotys = JSON.parse(localStorage.getItem("uzduotys"));
  uzduotys[index].atlikta = !uzduotys[index].atlikta;
  localStorage.setItem("uzduotys", JSON.stringify(uzduotys));
  atvaizduotiUzduotis();
}

function istrintiUzduoti(index) {
  const uzduotys = JSON.parse(localStorage.getItem("uzduotys"));
  uzduotys.splice(index, 1);
  localStorage.setItem("uzduotys", JSON.stringify(uzduotys));
  atvaizduotiUzduotis();
}

atvaizduotiUzduotis();
