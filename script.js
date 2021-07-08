const resetBtn = document.getElementById("reset");

function addWxp() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control", "workExp", "mt-2");
  newNode.setAttribute("rows", 3);

  let weOb = document.getElementById("we");
  let weAddBtnOb = document.getElementById("wAddBtn");
  weOb.insertBefore(newNode, weAddBtnOb);
}

function addQual() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control", "qual", "mt-2");
  newNode.setAttribute("rows", 3);

  let QOb = document.getElementById("Qual");
  let QAddBtnOb = document.getElementById("QaddBtn");

  QOb.insertBefore(newNode, QAddBtnOb);
}

resetBtn.addEventListener("click", () => {
  document.getElementById("myForm1").reset();
  document.getElementById("myForm2").reset();
});
//generating CV

function generateCv() {
  //input value
  const nameField = document.getElementById("namefield").value;
  const ageField = document.getElementById("agefield").value;
  const genderField = document.getElementById("genderfield").value;
  const contactField = document.getElementById("contact").value;
  const addressField = document.getElementById("address").value;
  const emailField = document.getElementById("email").value;
  const faceField = document.getElementById("facebook").value;
  const instaField = document.getElementById("insta").value;
  const linkedField = document.getElementById("linkedin").value;
  const jobField = document.getElementById("jobfield").value;
  const objField = document.getElementById("objective").value;
  const skill1 = document.getElementById("skillfield1").value;
  const skill2 = document.getElementById("skillfield2").value;
  const skill3 = document.getElementById("skillfield3").value;
  const skill4 = document.getElementById("skillfield4").value;

  const range1 = document.getElementById("range1").value;
  const range2 = document.getElementById("range2").value;
  const range3 = document.getElementById("range3").value;
  const range4 = document.getElementById("range4").value;

  //assingin value
  document.getElementById("Tname1").innerHTML = nameField;
  document.getElementById("Tname2").innerHTML = nameField;
  document.getElementById("Tage").innerHTML = "Age: " + ageField;
  document.getElementById("Tgender").innerHTML = "Gender: " + genderField;
  document.getElementById("Tcontact").innerHTML = contactField;
  document.getElementById("Taddress").innerHTML = addressField;
  document.getElementById("Temail").innerHTML = emailField;
  document.getElementById("Tfb").href = faceField;
  document.getElementById("Tinsta").href = instaField;
  document.getElementById("Tlinked").href = linkedField;
  document.getElementById("Tjob").innerHTML = jobField;
  document.getElementById("Tobjectives").innerHTML = objField;

  document.getElementById("skillname1").innerHTML = skill1;
  document.getElementById("skillname2").innerHTML = skill2;
  document.getElementById("skillname3").innerHTML = skill3;
  document.getElementById("skillname4").innerHTML = skill4;
  document.getElementById("progress1").style.width = range1 + "%";
  document.getElementById("progress2").style.width = range2 + "%";
  document.getElementById("progress3").style.width = range3 + "%";
  document.getElementById("progress4").style.width = range4 + "%";

  // work experience
  const Wexp = document.getElementsByClassName("workExp");
  let str = "";

  for (let e of Wexp) {
    str = str + `<li> ${e.value} </li>`;
  }
  document.getElementById("TWexp").innerHTML = str;

  //qualification

  const qualEl = document.getElementsByClassName("qual");
  let str1 = "";

  for (let e of qualEl) {
    str1 = str1 + `<li> ${e.value} </li>`;
  }
  document.getElementById("TQual").innerHTML = str1;
  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";

  //image setting
  let file = document.getElementById("imgField").files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = function () {
    document.getElementById("imgTemplate").src = reader.result;
  };
}

function EditForm() {
  document.getElementById("cv-form").style.display = "block";
  document.getElementById("cv-template").style.display = "none";
}

// sync function call
// setInterval(function () {
//   generateCv();
// }, 100);

function autoFill() {
  document.getElementById("namefield").value = "KYLE RYAN";
  document.getElementById("agefield").value = "35";
  document.getElementById("contact").value = "+91-987654321";
  document.getElementById("address").value = "Street 19 florida USA";
  document.getElementById("email").value = "kyleryan@email.com";
  document.getElementById("facebook").value = "facebookUsername";
  document.getElementById("insta").value = "instagramUsername";
  document.getElementById("linkedin").value = "linkedInUsername";
  document.getElementById("jobfield").value = "Web Design";
  document.getElementById("objective").value =
    "Versatile Front-end Developer with 3+ years of experience designing, developing, and managing complex e-commerce sites and internal frameworks. Specializes in AngularJS and responsive design";
  document.getElementById("workExp").value =
    "Develop new UI functionality for multithreaded user-facing applications running on touchscreen devices, using AngularJS";
  document.getElementById("qual").value =
    "Bachelor of Science in Computer Science";
  document.getElementById("skillfield1").value = "html";
  document.getElementById("skillfield2").value = "css";
  document.getElementById("skillfield3").value = "javascript";
  document.getElementById("skillfield4").value = "Database";
}

/*==================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ====================*/
function scaleCv() {
  document.body.classList.add("scale-cv");
}
/*==================== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ====================*/
function removeScale() {
  document.body.classList.remove("scale-cv");
}
/*==================== GENERATE PDF ====================*/
// PDF generated area
let areaCv = document.getElementById("cv-template");
let resumeButton = document.getElementById("print-cv");

// Html2pdf options
let opt = {
  margin: 0,
  filename: "myResume.pdf",
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: { scale: 1 },
  jsPDF: { unit: "mm", format: "letter", orientation: "portrait" },
};
// Function to call areaCv and Html2Pdf options
function generateResume() {
  html2pdf(areaCv, opt);
}
resumeButton.addEventListener("click", () => {
  scaleCv();
  generateResume();
  setTimeout(removeScale, 1000);
});
