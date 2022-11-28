let username = document.querySelector("#username");
let password = document.querySelector("#password");
let email = document.querySelector("#email");
let loginpage = document.querySelector("#loginpage");
let nav = document.querySelector("#nav");
let main = document.querySelector("#main");
let body = document.querySelector("#body");
let cvform = document.querySelector("#cv-form");
let cvtemplate = document.getElementById("cv-template");
let namefield = document.getElementById("namefield");
let nameT1 = document.getElementById("nameT1");
let occfield = document.getElementById("occfield");
let occu = document.getElementById("occu");
let contactfield = document.getElementById("contactfield");
let contactT = document.getElementById("contactT");
let addressfield = document.getElementById("addressfield");
let addressT = document.querySelector("#addressT");
let gmfield = document.getElementById("gmfield");
let mailT = document.getElementById("mailT");
let linkedfield = document.getElementById("linkedfield");
let linkedT = document.querySelector("#linkedT");
let objectivefield = document.getElementById("objectivefield");
let objectiveT = document.getElementById("objectiveT");
function generateCV() {
  // console.log("CV GENERATED");
  //name
  nameT1.innerHTML = namefield.value;
  occu.innerHTML = occfield.value;

  //contact
  contactT.innerHTML = contactfield.value;

  //address
  addressT.innerHTML = addressfield.value;

  //mail
  mailT.innerHTML = gmfield.value;
  mailT.href = `mailto:${gmfield.value}`;

  //linkedin
  linkedT.innerHTML = linkedfield.value;
  linkedT.href = linkedfield.value;

  //objective
  objectiveT.innerHTML = objectivefield.value;

  //WE
  let wes = document.getElementsByClassName("wefield");
  let str = "";
  for (let e of wes) {
    str = str + `<li> ${e.value} </li>`;
  }
  document.getElementById("weT").innerHTML = str;

  //AQ

  let aqs = document.getElementsByClassName("aqfield");
  let str1 = "";
  for (let e of aqs) {
    str1 = str1 + `<li style="list-style-type:disc"> ${e.value} </li>`;
  }
  document.getElementById("aqT").innerHTML = str1;

  //Skills
  let skills = document.getElementsByClassName("skillfield");
  // let str2 = "";

  for (let e of skills) {
    // str2 = str2 + `<li> ${e.value} </li>`;
    let newNode = document.createElement("div");
    newNode.classList.add("box");
    let h4 = document.createElement("h4");
    h4.classList.add("fw-semibold");
    h4.classList.add("fs-5");
    h4.innerHTML = e.value;
    let div1 = document.createElement("div");
    div1.classList.add("percent");
    let div2 = document.createElement("div");
    div2.setAttribute("style", `width:${Math.random() * 50 + 50}%`);
    div1.append(div2);
    newNode.append(h4, div1);
    document.getElementById("skillT").append(newNode);
  }

  //Projects
  let projects = document.getElementsByClassName("projectfield");
  let str2 = "";
  for (let e of projects) {
    str2 = str2 + `<li class="fs-5"> ${e.value} </li>`;
  }
  document.getElementById("projectT").innerHTML = str2;

  //code for setting image
  let file = document.getElementById("imgfield").files[0];
  console.log(file.name);
  document.getElementById("imgT").src = file.name;
  // let reader = new FileReader();
  // console.log(reader);
  // reader.result = file.name;
  // console.log(reader.result);
  // document.getElementById("imgT").src = reader.result;

  // let namefield = document.getElementById("namefield").value;
  // let nameT1 = document.getElementById("nameT1");
  // // let occu = document.getElementById("occu");
  // nameT1.innerHTML = namefield;
  // //occu.innerHTML =

  // <li class="fs-5">Games</li>
  //           <li class="fs-5">Books</li>
  //           <li class="fs-5">Porn</li>
  //           <li class="fs-5">Hentai</li>

  // <div class="box">
  //           <h4 class="fw-semibold fs-5">Html</h4>
  //           <div class="percent">
  //             <div style="width: 90%"></div>
  //           </div>
  //         </div>
  //         <div class="box">
  //           <h4 class="fw-semibold fs-5">CSS</h4>
  //           <div class="percent">
  //             <div style="width: 80%"></div>
  //           </div>
  //         </div>
  //         <div class="box">
  //           <h4 class="fw-semibold fs-5">Javascript</h4>
  //           <div class="percent">
  //             <div style="width: 60%"></div>
  //           </div>
  //         </div>
  //         <div class="box">
  //           <h4 class="fw-semibold fs-5">React</h4>
  //           <div class="percent">
  //             <div style="width: 80%"></div>
  //           </div>
  //         </div>
  //         <div class="box">
  //           <h4 class="fw-semibold fs-5">Flutter</h4>
  //           <div class="percent">
  //             <div style="width: 70%"></div>
  //           </div>
  //         </div>
  //         <div class="box">
  //           <h4 class="fw-semibold fs-5">Gaming</h4>
  //           <div class="percent">
  //             <div style="width: 100%"></div>
  //           </div>
  //         </div>

  // let nameT2 = document.getElementById("nameT2");
  // nameT2.innerHTML = namefield;
  // let contactfield = document.getElementById("contactfield").value;
  // let contactT = document.getElementById("contactT");
  // contactT.innerHTML = contactfield;
  // let addressfield = document.getElementById("addressfield").value;
  // let addressT = document.querySelector(".addressT");
  // addressT.innerHTML = addressfield;
  // let fbfield = document.getElementById("fbfield").value;
  // let fbT = document.querySelector("#fbT");
  // fbT.href = fbfield;
  // let instafield = document.getElementById("instafield").value;
  // let instaT = document.querySelector("#instaT");
  // instaT.href = instafield;
  // let linkedfield = document.getElementById("linkedfield").value;
  // let linkedT = document.querySelector("#linkedT");
  // linkedT.href = linkedfield;
  // document.getElementById("objectiveT").innerHTML =
  //   document.getElementById("objectivefield").value;
  // //WE
  // let wes = document.getElementsByClassName("wefield");
  // let str = "";
  // for (let e of wes) {
  //   str = str + `<li> ${e.value} </li>`;
  // }
  // document.getElementById("weT").innerHTML = str;
  // //AQ
  // let aqs = document.getElementsByClassName("aqfield");
  // let str1 = "";
  // for (let e of aqs) {
  //   str1 = str1 + `<li> ${e.value} </li>`;
  // }
  // document.getElementById("aqT").innerHTML = str1;
  // //code for setting image
  // let file = document.getElementById("imgfield").files[0];
  // console.log(file);
  // let reader = new FileReader();
  // console.log(reader);
  // reader.readAsDataURL(file);
  // console.log(reader.result);
  // document.getElementById("imgT").src = reader.result;
  // // let imgT = document.querySelector("imgT");
  // // let imgfield = document.querySelector("imgfield");
  // // imgT.src = imgfield.value;
  // // const imgfield = document.querySelector("imgfield").files[0];
  // // const fileElem = document.getElementById("imgfield");
  // // let img = document.querySelector("imgT");
  // // img.src = URL.createObjectURL(fileElem.files[0]);
  // // img.height = 60;
  // // img.onload = () => {
  // //   URL.revokeObjectURL(img.src);
  // // };
  body.style = "";
  body.style = "background-color: lightblue";
  cvform.classList.add("d-none");
  cvtemplate.classList.remove("d-none");
  document.querySelector("#printCV").classList.remove("d-none");
}

function addNewWeField() {
  //   console.log("Adding new field");

  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("wefield");
  newNode.classList.add("mt-3");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let weOb = document.getElementById("we");
  let weAddBtn = document.getElementById("weaddbutton");
  weOb.insertBefore(newNode, weAddBtn);
}

function addNewAqField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("aqfield");
  newNode.classList.add("mt-3");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let aqOb = document.getElementById("aq");
  let aqAddBtn = document.getElementById("aqaddbutton");
  aqOb.insertBefore(newNode, aqAddBtn);
}

function addNewSkillField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("skillfield");
  newNode.classList.add("mt-3");
  newNode.setAttribute("rows", 1);
  newNode.setAttribute("placeholder", "Enter here");

  let skOb = document.getElementById("sk");
  let skAddBtn = document.getElementById("skilladdbutton");
  skOb.insertBefore(newNode, skAddBtn);
}

function addNewProjectField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("projectfield");
  newNode.classList.add("mt-3");
  newNode.setAttribute("rows", 1);
  newNode.setAttribute("placeholder", "Enter here");

  let prOb = document.getElementById("pr");
  let prAddBtn = document.getElementById("projectaddbutton");
  prOb.insertBefore(newNode, prAddBtn);
}

// generating CV

//print CV

function printCV() {
  // document.querySelector("#printCV").classList.add("d-none");

  window.print();
}

function logintohome() {
  if (!username.value || !password.value || !email.value) {
    alert("Please enter valid details!");
  } else {
    loginpage.classList.add("d-none");
    nav.classList.remove("d-none");
    main.classList.remove("d-none");

    body.style.display = "block";
  }
}

function hometoform() {
  nav.classList.add("d-none");
  main.classList.add("d-none");
  body.style.display = "flex";
  cvform.classList.remove("d-none");
}

function changecolor(color, gradient) {
  document.body.style.background = color;
  document.body.style.background = gradient;

  //mark as active selected color
  document.querySelectorAll("span").forEach(function (item) {
    item.classList.remove("active");
  });
  event.target.classList.add("active");
}
