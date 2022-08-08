import Button from '@components/Button';
import Grid from '@components/Grid';
import {startGame} from '@features/labyrinth-game/model/labyrinthSlice';
import {useAppDispatch, useAppSelector} from '@shared/store/hooks';
import React, {useCallback, useEffect} from 'react';

import GameField from './game-field';
import GameMoves from './game-moves';

interface LabyrinthGameRootProps {
	view: 'inGame' | 'finished';
	onTryAgain: () => void;
}

export const LabyrinthGameRoot: React.FC<LabyrinthGameRootProps> = ({
	view,
	onTryAgain,
}) => {
	return (
		<Grid container direction="column" alignItems="center" gap={5}>
			<Grid item>
				<GameField />
			</Grid>
			<Grid item>
				<GameMoves />
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
	const {view} = useAppSelector((state) => state.labyrinth);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(startGame());
	}, [dispatch]);

	const tryAgain = useCallback(() => {
		dispatch(startGame());
	}, [dispatch]);

	return <LabyrinthGameRoot view={view} onTryAgain={tryAgain} />;
};

export default LabyrinthGame;
