export const setText = (text) => {
  innerText(".CircleArrow .text", text);
  innerText(".Layered .text", text);
  innerText(".WaveBrick span", text);
  innerText(".Ripple span", text);
  innerText(".VerticalBrick span", text);
  innerText(".PoppingCircle .text", text);
  innerText(".NuneTine span", text);
  innerText(".UpdownUpdown span", text);
  innerText(".Overlap span", text);
  innerText(".UpdownUpdown span", text);
  innerText(".Overlap span", text);
  innerText(".SpinningBorder .text", text);
  innerText(".Trees .text", text);
  innerText(".Trees .text", text);
  innerText(".Bubble .text", text);
  innerText(".DetectClick .text", text);
  innerText(".DetectEnter .text", text);
  innerText(".AddAndDelete .text", text);
  innerText(".SlideText .text", text);
  innerText(".MakeFrame .text", text);
  innerText(".FlyAway .text", text);
  innerText(".Net .text", text);
  innerText(".RollingOX .text", text);
  innerText(".ABSlide .text", text);
  innerText(".BubbleCheck .text", text);
  innerText(".IndicatingArrow .text", text);
  innerText(".Checklist .text", text);
  innerText(".StretchWindow span.text", text);
  innerText(".TodoList span.text", text);
  innerText(".FollowingCursor .text", text);
};

const innerText = (target, text) => {
  document.querySelector(target).innerHTML = text;
};
