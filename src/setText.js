export const setText = (text) => {
  innerTextArray.map((item) => document.querySelector(item).innerHTML = text)
};

const innerTextArray = [
  ".CircleArrow .text",
".Layered .text",
".WaveBrick span",
".Ripple span",
".VerticalBrick span",
".PoppingCircle .text",
".NuneTine span",
".UpdownUpdown span",
".Overlap span",
".UpdownUpdown span",
".Overlap span",
".SpinningBorder .text",
".Trees .text",
".Trees .text",
".Bubble .text",
".DetectClick .text",
".DetectEnter .text",
".AddAndDelete .text",
".SlideText .text",
".MakeFrame .text",
".FlyAway .text",
".Net .text",
".RollingOX .text",
".ABSlide .text",
".BubbleCheck .text",
".IndicatingArrow .text",
".Checklist .text",
".StretchWindow span.text",
".TodoList .text",
".FollowingCursor .text",
".Gathering .text",
".MakeDistance .text",
".BoxCheck .text",
".CheckToX .text",
".SwitchCircle .text",
".ShadowParticle .text",
".ExpendingChecker .text",
".FourBalls .text",
]
