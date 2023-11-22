export const option = {
     introImage: '../../images/eye.svg',
     introImageSize: 3,
     introParticlesGap: 3,
     displayImageTime: 3000,
     introSpeed: 0.05,
     mousePosition: {
          x: undefined,
          y: undefined,
     },
     clearScreen: function (context, game) {
          context.clearRect(0, 0, game.width, game.height);
     },
};
