import Button from '@components/Button';
import Grid from '@components/Grid';
import React from 'react';

import {Move} from '../model/types';
import GameField from './game-field';
import GameMoves from './game-moves';

interface LabyrinthGameRootProps {
	view: 'inGame' | 'finished';
	onTryAgain: () => void;
	size: number;
	startPosition: number;
	moves: Move[];
	onPick: (index: number) => void;
}

export const LabyrinthGameRoot: React.FC<LabyrinthGameRootProps> = ({
	view,
	onTryAgain,
	size,
	startPosition,
	moves,
	onPick,
}) => {
	return (
		<Grid container direction="column" alignItems="center" gap={5}>
			<Grid item>
				<GameField
					view={view}
					size={size}
					startPosition={startPosition}
					onPick={onPick}
					answer={7}
					pickedPosition={7}
				/>
			</Grid>
			<Grid item>
				<GameMoves moves={moves} />
			</Grid>
			{view === 'finished' && (
				<Grid item>
					<Button onClick={onTryAgain}>Try again</Button>
				</Grid>
			)}
		</Grid>
	);
};

const LabyrinthGame: React.FC = () => {
	return (
		<LabyrinthGameRoot
			view="finished"
			size={3}
			startPosition={3}
			moves={[
				Move.UP,
				Move.RIGHT,
				Move.DOWN,
				Move.RIGHT,
				Move.DOWN,
				Move.LEFT,
				Move.UP,
				Move.LEFT,
				Move.DOWN,
				Move.RIGHT,
			]}
			/* eslint-disable-next-line no-console */
			onPick={(i) => console.log('[Result]', i)}
			/* eslint-disable-next-line no-console */
			onTryAgain={() => console.log('[Try again]')}
		/>
	);
};

export default LabyrinthGame;
