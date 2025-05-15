gsap.registerPlugin(ScrollSmoother);

const skewSetter = gsap.quickTo("img", "skewY", {duration: 0.3}), // duration 지정 권장
      clamp = gsap.utils.clamp(-20, 20);

ScrollSmoother.create({
  wrapper: "#wrapper",
  content: "#content",
  smooth: 2,
  speed: 3,
  effects: true,
  onUpdate: self => skewSetter(clamp(self.getVelocity() / -50)),
  onStop: () => skewSetter(0)
});