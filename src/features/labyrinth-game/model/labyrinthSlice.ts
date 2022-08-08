import {GameView, Move} from '@features/labyrinth-game/model/types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {randomArrayItem} from '@shared/utils/randomArrayItem';
import {randomInt} from '@shared/utils/randomInt';

interface LabyrinthState {
	view: GameView;
	size: number;
	movesCount: number;
	startPosition: number | null;
	pickedPosition: number | null;
	answer: number | null;
	moves: Move[] | null;
}

const initialState: LabyrinthState = {
	view: 'inGame',
	size: 3,
	movesCount: 10,
	startPosition: null,
	pickedPosition: null,
	answer: null,
	moves: null,
};

export const labyrinthSlice = createSlice({
	name: 'labyrinth',
	initialState,
	reducers: {
		startGame: (state: LabyrinthState) => {
			state.view = 'inGame';
			state.startPosition = randomInt(0, state.size * state.size - 1);

			const moves: Move[] = [];
			let tmpPosition: number = state.startPosition;
			for (let i = 0; i < state.movesCount; i++) {
				const possibleMoves: Move[] = [];

				if (tmpPosition % state.size > 0) possibleMoves.push(Move.LEFT);
				if (tmpPosition % state.size < state.size - 1)
					possibleMoves.push(Move.RIGHT);
				if (Math.floor(tmpPosition / state.size) > 0)
					possibleMoves.push(Move.UP);
				if (Math.floor(tmpPosition / state.size) < state.size - 1)
					possibleMoves.push(Move.DOWN);

				const nextMove = randomArrayItem(possibleMoves);
				moves.push(nextMove);
				if (nextMove === Move.LEFT) tmpPosition--;
				if (nextMove === Move.RIGHT) tmpPosition++;
				if (nextMove === Move.DOWN) tmpPosition += state.size;
				if (nextMove === Move.UP) tmpPosition -= state.size;
			}
			state.moves = moves;
			state.answer = tmpPosition;
		},
		pickField: (state: LabyrinthState, action: PayloadAction<number>) => {
			state.view = 'finished';
			state.pickedPosition = action.payload;
		},
	},
});

export const {startGame, pickField} = labyrinthSlice.actions;
export default labyrinthSlice.reducer;
