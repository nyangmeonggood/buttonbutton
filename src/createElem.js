export const createElem = (text) => {
  document.querySelector(".Gooey").innerHTML = `<div class="blurred">
    <span></span>
    <span></span>
  </div>`;

  document.querySelector(".MoveBehind").innerHTML = `<div class="wave"></div>`;

  document.querySelector(
    ".CircleArrow"
  ).innerHTML = `<span class="text">${text}</span><span class="add"><div class="icon">-></div></span>`;

  document.querySelector(".Layered").innerHTML = `
  <span></span>
  <span></span>
  <span class="text">${text}</span>
  <span></span>`;

  document.querySelector(".Bubble").innerHTML = `
  <div></div>
  <span></span>
  <span></span>
  <span></span>`;

  for (var i = 0; i < 8; i++) {
    var $li = document.createElement("div");
    $li.style.left = `${i * 22.5}px`;
    document.querySelector(".WaveBrick").appendChild($li);
  }
  document.querySelector(".WaveBrick span").innerHTML = text;

  for (var i = 0; i < 8; i++) {
    var $li = document.createElement("div");
    $li.style.left = `${i * 22.5}px`;
    document.querySelector(".Ripple").appendChild($li);
  }
  document.querySelector(".Ripple span").innerHTML = text;
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
  document.querySelector(".VerticalBrick span").innerHTML = text;

  document.querySelector(".PoppingCircle").innerHTML = `
    <div></div>
    <span class="text">${text}</span>
  `;
};
