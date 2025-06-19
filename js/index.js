// let nums = document.querySelectorAll(".nums .num");
// let section = document.querySelector(".gallery");
// let started = false;

// window.onscroll = function () {
//   if (window.scrollY >= section.offsetTop) {
//     if (!started) {
//       nums.forEach((num) => startCount(num));
//     }
//     started = true;
//   }
// };

// function startCount(el) {
//   let goal = el.dataset.goal;
//   let count = setInterval(() => {
//     el.textContent++;
//     if (el.textContent == el.dataset.goal) {
//       clearInterval(count);
//     }
//   }, 100);
// }

let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".gallery");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}


var imgBox = document.querySelectorAll(".card-img");
var pop = document.querySelector(".pop");
var popBox = document.querySelector(".pop-box");
var prevArrow = document.querySelector("#prev");
var nextArrow = document.querySelector("#next");
var closBtn = document.querySelector("#close");

var curIndex;

for (let i = 0; i < imgBox.length; i++) {
  imgBox[i].addEventListener("click", function (e) {
    curIndex = i;
    let imgSrc = e.currentTarget.querySelector("img").getAttribute("src");
    pop.classList.replace("d-none", "d-flex");

    popBox.style.setProperty("background-image", `url(${imgSrc})`);
  });
}

function nextImg() {
  curIndex++;

  if (curIndex >= imgBox.length) {
    curIndex = 0;
    let imgSrc = imgBox[curIndex].querySelector("img").getAttribute("src");
    console.log(imgSrc);
    popBox.style.setProperty("background-image", `url(${imgSrc})`);
  } else {
    let imgSrc = imgBox[curIndex].querySelector("img").getAttribute("src");
    console.log(imgSrc);
    popBox.style.setProperty("background-image", `url(${imgSrc})`);
  }
}

nextArrow.addEventListener("click", function () {
  nextImg();
});

function prevImg() {
  curIndex--;

  if (curIndex < 0) {
    curIndex = imgBox.length - 1;
    let imgSrc = imgBox[curIndex].querySelector("img").getAttribute("src");
    popBox.style.setProperty("background-image", `url(${imgSrc})`);
  } else {
    let imgSrc = imgBox[curIndex].querySelector("img").getAttribute("src");
    popBox.style.setProperty("background-image", `url(${imgSrc})`);
  }
}

prevArrow.addEventListener("click", function () {
  prevImg();
});

closBtn.addEventListener("click", function () {
  closeButton();
});

function closeButton() {
  pop.classList.replace("d-flex", "d-none");
}

pop.addEventListener("click", function () {
  closeButton();
});

popBox.addEventListener("click", function (e) {
  e.stopPropagation();
});
