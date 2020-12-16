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

  ce(".Bubble", `<div>${text}</div><span></span><span></span><span></span>`);

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

  ce(".SpinningBorder", `<svg><rect></rect><span>${text}</span></svg>`);
};

const ce = (target, contents) =>
  (document.querySelector(target).innerHTML = contents);
