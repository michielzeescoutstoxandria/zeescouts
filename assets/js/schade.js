const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
const textarea = document.querySelector("textarea");
let closeBtn = document.querySelector(".close");
let bootnaam = document.getElementById("bootnaam");
let c_bootnaam = document.getElementById("c_bootnaam");
let prioriteit = document.getElementById("prioriteit");
let c_prioriteit = document.getElementById("c_prioriteit");
let desc = document.getElementById("desc");
let c_desc = document.getElementById("c_desc");


let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}

textarea.addEventListener("keyup", e => {
  textarea.style.height = `auto`;
  let srcheight = e.target.scrollHeight;
  textarea.style.height = `${srcheight}px`;
});

bootnaam.addEventListener("change", () => {
  c_bootnaam.value = bootnaam.value;
});

prioriteit.addEventListener("change", () => {
  c_prioriteit.value = prioriteit.value;
});

desc.addEventListener("change", () => {
  c_desc.value = desc.value;
});

function schadeBtn(Btn){
  document.getElementById("schadeform").style.display = "flex";
  let select = document.getElementById('bootnaam');
  select.value = Btn.getAttribute("data-bootnaam");
  c_bootnaam.value = Btn.getAttribute("data-bootnaam");
}

  closeBtn.onclick = function () {
    // let modal = btn.closest(".modal");
    // modal.style.display = "none";
    document.getElementById("schadeform").style.display = "none";
    formStepsNum = 0;
    c_prioriteit.value = prioriteit.value = "niet dringend";
    c_desc.value = desc.value = "";
    updateFormSteps();
    updateProgressbar();
  };


window.onclick = function (event) {
  if (event.target.className === "schadeform") {
    event.target.style.display = "none";
    formStepsNum = 0;
    c_prioriteit.value = prioriteit.value = "niet dringend";
    c_desc.value = desc.value = "";
    updateFormSteps();
    updateProgressbar();
  }
};


function playSound(url) {
  // <button onclick="playSound('https://www.youtube.com/watch?v=Soa3gO7tL-c');">Play</button>
  const audio = new Audio(url);
  audio.play();
}