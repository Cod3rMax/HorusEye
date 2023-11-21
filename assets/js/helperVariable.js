export const option = {
     introImage: '../../images/eye.svg',
     mousePosition: {
          x: undefined,
          y: undefined,
     },
     clearScreen: function (context, game) {
          context.clearRect(0, 0, game.width, game.height);
     },
};
