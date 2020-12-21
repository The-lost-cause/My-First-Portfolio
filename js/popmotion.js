// Popmotion API

const homeButton = document.querySelector('.home-button');

const { styler, spring, listen, pointer, value } = window.popmotion;
const divStyler = styler(homeButton);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(homeButton, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(ballXY.get()).start(ballXY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    spring({
      from: ballXY.get(),
      velocity: ballXY.getVelocity(),
      to: { x: 0, y: 0 },
      stiffness: 200,
    //   mass: 10,
      damping: 10
    }).start(ballXY);
  });