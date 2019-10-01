import Point from "./Point";
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
	},

	getMousePosition: (relative: boolean = false) => {
		const res = Screen.ResolutionMantainRatio();
		const cursor = mp.gui.cursor.position;
		let [mouseX, mouseY] = [cursor[0], cursor[1]];
		if (relative) [mouseX, mouseY] = [cursor[0] / res.Width, cursor[1] / res.Height];
		return [mouseX, mouseY];
	},

	IsMouseInBounds: (topLeft: Point, boxSize: Size) => {
		const [mouseX, mouseY] = Screen.getMousePosition();
		return (
			mouseX >= topLeft.X &&
			mouseX <= topLeft.X + boxSize.Width &&
			(mouseY > topLeft.Y && mouseY < topLeft.Y + boxSize.Height)
		);
	}
};
