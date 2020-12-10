export const setText = (text) => {
  innerText(".CircleArrow .text", text);
  innerText(".Layered .text", text);
  innerText(".WaveBrick span", text);
  innerText(".Ripple span", text);
  innerText(".VerticalBrick span", text);
  innerText(".PoppingCircle .text", text);
};

const innerText = (target, text) => {
  document.querySelector(target).innerHTML = text;
};
