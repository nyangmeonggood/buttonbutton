export const createElem = (text) => {
  ce(".Gooey", `<div class="blurred"><span></span><span></span></div>`);

  ce(".MoveBehind", `<div class="wave"></div>`);

  ce(
    ".CircleArrow",
    `<span class="text">${text}</span><span class="add"><div class="icon">-></div></span>`
  );

  ce(
    ".Layered",
    `<span></span><span></span><span class="text">${text}</span><span></span>`
  );

  ce(
    ".Bubble",
    `<div class="text">${text}</div><span></span><span></span><span></span>`
  );

  for (var i = 0; i < 8; i++) {
    var $li = document.createElement("div");
    $li.style.left = `${i * 22.5}px`;
    document.querySelector(".WaveBrick").appendChild($li);
  }
  ce(".WaveBrick span", `${text}`);

  for (var i = 0; i < 8; i++) {
    var $li = document.createElement("div");
    $li.style.left = `${i * 22.5}px`;
    document.querySelector(".Ripple").appendChild($li);
  }
  ce(".Ripple span", `${text}`);
  document.querySelector(".Ripple").parentElement.style.filter = `url(#Ripple)`;

  for (var i = 0; i < 2; i++) {
    var $ul = document.createElement("ul");
    $ul.classList.add(`side${i}`);
    for (var j = 0; j < 10; j++) {
      $li = document.createElement("li");
      $li.style.transitionDelay = `${j * 0.05}s`;
      $ul.appendChild($li);
    }
    document.querySelector(".VerticalBrick").appendChild($ul);
  }
  ce(".VerticalBrick span", `${text}`);
  ce(".PoppingCircle", `<div></div><span class="text">${text}</span>`);

  ce(".Overlap", `<span>${text}</span>`);
  ce(".NuneTine", `<span>${text}</span>`);
  ce(".UpdownUpdown", `<span>${text}</span>`);

  ce(
    ".SpinningBorder",
    `<svg><rect></rect><span class="text">${text}</span></svg>`
  );

  ce(
    ".Trees",
    `<span class="text">${text}</span><span class="tree tree1"></span><span class="tree tree2"></span>`
  );

  ce(
    ".DetectClick",
    `<span class="text">${text}</span><span class="circle"></span>`
  );
  document.querySelector(".DetectClick").addEventListener("click", (e) => {
    mouseDetect(e, ".DetectClick", ".DetectClick .circle");
    document.querySelector(".DetectClick .circle").classList.add("active");

    setTimeout(() => {
      document.querySelector(".DetectClick .circle").classList.remove("active");
    }, 700);
  });

  ce(
    ".DetectEnter",
    `<span class="text">${text}</span><span class="circle"></span>`
  );
  document
    .querySelector(".DetectEnter")
    .addEventListener("pointerenter", (e) => {
      mouseDetect(e, ".DetectEnter", ".DetectEnter .circle");
      document.querySelector(".DetectEnter").classList.add("active");
    });
  document
    .querySelector(".DetectEnter")
    .addEventListener("pointerleave", (e) => {
      mouseDetect(e, ".DetectEnter", ".DetectEnter .circle");
      document.querySelector(".DetectEnter").classList.remove("active");
    });

  setBorder(".MakeFrame", text);
  setBorder(".Gathering", text);
  setBorder(".MakeDistance", text);

  clickActive(".MovieCut");
  clickActive(".KungDuck");
  clickActive(".Receipt");

  ce(
    ".AddAndDelete",
    `<span class="text">${text}</span><div class="icon"><span></span><span></span></div>`
  );
  clickActive(".AddAndDelete");

  clickActive(".ButtonWindow");

  ce(
    ".SlideText",
    `<div class="icon"><i class="fas fa-plus"></i></div><span class="text">${text}</span>`
  );
  clickActive(".SlideText");

  ce(
    ".StretchWindow",
    `<div class="icon"><i class="fas fa-plus"></i></div><span class="text">${text}</span>`
  );
  clickActive(".StretchWindow");

  ce(".FlyAway", `<div><span class="text">${text}</span></div>`);

  ce(
    ".Net",
    `<div class="netInner top"></div><div class="netInner left"></div><div class="netInner right"></div><div class="netInner bottom"></div><span class="text">${text}</span>`
  );

  ce(
    ".RollingOX",
    `<span class="text">${text}</span><div class="icon"><i class="fas fa-check"></i><i class="fas fa-times"></i></div>`
  );

  ce(
    ".ABSlide",
    `<div><span class="text">${text}</span><span class="right">No,<br>It isn't!</span><div class="block"></div></div>`
  );
  document.querySelector(".ABSlide .text").addEventListener("click", () => {
    document.querySelector(".ABSlide .block").style.left = 0;
    document.querySelector(".ABSlide .text").style.color = `#3c4086`;
    document.querySelector(".ABSlide .right").style.color = `#fff`;
  });
  document.querySelector(".ABSlide .right").addEventListener("click", () => {
    document.querySelector(".ABSlide .block").style.left = `50%`;
    document.querySelector(".ABSlide .text").style.color = `#fff`;
    document.querySelector(".ABSlide .right").style.color = `#3c4086`;
  });

  setInputRadio(".Checklist", text);
  setInputRadio(".BubbleCheck", text);
  setInputRadio(".IndicatingArrow", text);
  setInputRadio(".FollowingCursor", text);
  setInputRadio(".BoxCheck", text);

  document
    .querySelector(".FollowingCursor .text1")
    .addEventListener("click", () => {
      document.querySelector(".FollowingCursor").classList.remove("activeDown");
      document.querySelector(".FollowingCursor").classList.add("activeUp");
    });
  document
    .querySelector(".FollowingCursor .text2")
    .addEventListener("click", () => {
      document.querySelector(".FollowingCursor").classList.remove("activeUp");
      document.querySelector(".FollowingCursor").classList.add("activeDown");
    });
  document
    .querySelector(".FollowingCursor .text1")
    .addEventListener("pointerenter", () => {
      document.querySelector(".FollowingCursor").classList.add("moveUp");
    });
  document
    .querySelector(".FollowingCursor .text1")
    .addEventListener("pointerleave", () => {
      document.querySelector(".FollowingCursor").classList.remove("moveUp");
    });
  document
    .querySelector(".FollowingCursor .text2")
    .addEventListener("pointerenter", () => {
      document.querySelector(".FollowingCursor").classList.add("moveDown");
    });
  document
    .querySelector(".FollowingCursor .text2")
    .addEventListener("pointerleave", () => {
      document.querySelector(".FollowingCursor").classList.remove("moveDown");
    });
  setMutliCheck(".TodoList", text, "Eat food", "Study CSS");
  clickActive(".RollingDia");
  clickActive(".BGChangeButton");
  clickActive(".Gathering");

  setMutliCheck(".BoxCheck", text, "Yes", "No");
  setMutliCheck(".CheckToX", text, "No", "So so");

  ce(
    ".SwitchCircle",
    `<span class="text">${text}</span><div><span class="circle"></span></div>`
  );
  clickActive(".SwitchCircle");

  clickActive(".MoveNamecard");
  clickActive(".PopNamecard");
  clickActive(".FalldownNamecard");
  clickActive(".Shield");

  let longshadow = ``;
  for (let longshadows = 0; longshadows < 200; longshadows++) {
    longshadow +=
      (longshadow ? "," : "") +
      `${longshadows + 1}px ${longshadows + 1}px 0 #2c2c54`;
  }
  document.querySelector(".LongShadow").style.boxShadow = longshadow;

  setBorder(".ShadowParticle", text);

  clickActive(".Machine");

  ce(
    ".ExpendingChecker",
    `<div><ul><li class="ExpendingChecker1 text">${text}</li><li class="ExpendingChecker2">Another</li></ul><div class="ball"></div></div>`
  );
  document.querySelector(".ExpendingChecker").classList.add("act1");
  document
    .querySelector(".ExpendingChecker .ExpendingChecker1")
    .addEventListener("click", () => {
      document.querySelector(".ExpendingChecker").classList.remove("act2");
      document.querySelector(".ExpendingChecker").classList.add("act1");
    });
  document
    .querySelector(".ExpendingChecker .ExpendingChecker2")
    .addEventListener("click", () => {
      document.querySelector(".ExpendingChecker").classList.remove("act1");
      document.querySelector(".ExpendingChecker").classList.add("act2");
    });

  ce(
    ".FourBalls",
    `<div><span class="ball ball1"></span><span class="ball ball2"></span><span class="ball ball3"></span><span class="ball ball4"></span></div><span class="text">${text}</span>`
  );
  clickActive(".FourBalls");

  ce(
    ".LoadingBalls",
    `<div><span class="ball ball1"></span><span class="ball ball2"></span><span class="ball ball3"></span></div><span class="text">${text}</span>`
  );
  clickActive(".LoadingBalls");

  // clickActive(".Raindrop");
}; /* end */

const ce = (target, contents) =>
  (document.querySelector(target).innerHTML = contents);

const mouseDetect = (e, target, eTarget) => {
  var dcx =
    e.clientX - document.querySelector(target).getBoundingClientRect().left;
  var dcy =
    e.clientY - document.querySelector(target).getBoundingClientRect().top;

  document.querySelector(eTarget).style.left = `${dcx}px`;
  document.querySelector(eTarget).style.top = `${dcy}px`;
};

const setBorder = (target, text) => {
  document.querySelector(
    target
  ).innerHTML = `<span class="text">${text}</span><span class="border borderTop"></span><span class="border borderLeft"></span><span class="border borderRight"></span><span class="border borderBottom"></span>`;
};

const clickActive = (target) => {
  document.querySelector(target).addEventListener("click", () => {
    document.querySelector(target).classList.toggle("active");
  });
};

const setInputRadio = (target, text) => {
  document.querySelector(
    target
  ).innerHTML = `<input type="radio" name="${target}1" id="${target}1_1" checked><label class="text text1" for="${target}1_1">${text}</label><input type="radio" name="${target}1" id="${target}1_2"><label class="text text2" for="${target}1_2">No</label>`;
};

const setMutliCheck = (target, text, text2, text3) => {
  document.querySelector(target).innerHTML = `<fieldset>
  <label class="${target}-item">
    <input type="checkbox" name="todo_1" value="1" class="${target}-cb" checked>
    <span class="${target}-desc"><b class="text">${text}</b></span>
  </label>
  <label class="${target}-item">
    <input type="checkbox" name="todo_2" value="1" class="${target}-cb">
    <span class="${target}-desc"><b>${text2}</b></span>
  </label>
  <label class="${target}-item">
    <input type="checkbox" name="todo_3" value="1" class="${target}-cb">
    <span class="${target}-desc"><b>${text3}</b></span>
  </label>
</fieldset>`;
};
