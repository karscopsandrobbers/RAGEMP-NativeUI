import Size from "./Size";

const gameScreen = mp.game.graphics.getScreenActiveResolution(0, 0);

export const Screen = {
	width: gameScreen.x,
	height: gameScreen.y,

	ResolutionMantainRatio: () => {
		const screenw = gameScreen.x;
		const screenh = gameScreen.y;
		const ratio = screenw / screenh;
		const width = 1080.0 * ratio;

		return new Size(width, 1080.0);
	}
};
