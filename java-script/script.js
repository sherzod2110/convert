var elInp = document.querySelector("#inp");
var elInpu = document.querySelector("#inpu");
var elbtn = document.querySelector("#btchange");
var elList = document.querySelector("ol");
var kurs = 11400;

elbtn.addEventListener('click', ()=> {
  var jami = elInp.value * kurs;
  elInpu.value = jami;
});

elbtn.addEventListener("click", function(evt) {
  evt.preventDefault();

  var firtname = elInp.value.trim();
  var lastName = elInpu.value.trim();

  var newLi = document.createElement("li");
  var newP1 = document.createElement("p");
  var newP2 = document.createElement("p");
  var newP3 = document.createElement("p");
  newP1.textContent = `Dollor: ${firtname}`;
  newP2.textContent = `Sum: ${lastName}`;

  newLi.appendChild(newP1);
  newLi.appendChild(newP2);
  elList.appendChild(newLi);

  var sherka = elInpu.value;
})
