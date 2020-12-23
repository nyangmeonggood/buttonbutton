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

  document.querySelector(".MovieCut").addEventListener("click", () => {
    document.querySelector(".MovieCut").classList.toggle("active");
  });
};

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
