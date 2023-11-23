export const option = {
     introImage: '../../images/eye.svg',
     introImageSize: 3,
     introParticlesGap: 3,
     displayImageTime: 3000,
     displayInstructionTime: 7000,
     introSpeed: 0.04,
     mousePosition: {
          x: 0,
          y: 0,
     },
     torchLightRadius: 60,
     clearScreen: function (context, game) {
          context.clearRect(0, 0, game.width, game.height);
     },
     calculateDistance: (x1, y1, x2, y2) => {
          const dx = x2 - x1;
          const dy = y2 - y1;
          return Math.sqrt(dx * dx + dy * dy);
     },
};
