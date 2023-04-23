async function loadDataNavbar() {
  const response = await fetch("http://localhost:3000/category");
  const jsonData = await response.json();
  jsonData.forEach((element) => {
    var linkCat = document.createElement("a");
    linkCat.href = "category.html?id=" + element.id;
    var linkCat_text = document.createTextNode(element.name);
    linkCat.appendChild(linkCat_text);
    document.getElementById("navLinks").appendChild(linkCat);
  });

  if (localStorage.getItem("tokens")) {
    var button = document.getElementById("connectButton");
    button.innerHTML = "Se déconnecter";
    button.onclick = (e) => {
      e.preventDefault();
      localStorage.removeItem("tokens");
      window.location.reload();
    };
  }
}

document.addEventListener("DOMContentLoaded", function () {
  console.log(document.getElementById("navLinks"));
  loadDataNavbar();
});
