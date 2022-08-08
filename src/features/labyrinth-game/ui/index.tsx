import Button from '@components/Button';
import Grid from '@components/Grid';
import {startGame} from '@features/labyrinth-game/model/labyrinthSlice';
import {useAppDispatch, useAppSelector} from '@shared/store/hooks';
import React, {useCallback, useEffect} from 'react';

import GameField from './game-field';
import GameMoves from './game-moves';

interface LabyrinthGameRootProps {
	view: 'inGame' | 'finished';
	success?: boolean;
	onTryAgain: () => void;
}

export const LabyrinthGameRoot: React.FC<LabyrinthGameRootProps> = ({
	view,
	success,
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
					<Grid
						container
						gap={2}
						justifyContent="center"
						flexDirection="column"
					>
						<Grid item sx={{fontSize: '1.5rem'}}>
							{success ? 'Correct! 🙂' : 'Wrong 🙁'}
						</Grid>
						<Grid item>
							<Button fullWidth variant="contained" onClick={onTryAgain}>
								{success ? 'Play again' : 'Try again'}
							</Button>
						</Grid>
					</Grid>
				</Grid>
			)}
		</Grid>
	);
};

const LabyrinthGame: React.FC = () => {
	const {view, answer, pickedPosition} = useAppSelector(
		(state) => state.labyrinth
	);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(startGame());
	}, [dispatch]);

	const tryAgain = useCallback(() => {
		dispatch(startGame());
	}, [dispatch]);

	return (
		<LabyrinthGameRoot
			view={view}
			onTryAgain={tryAgain}
			success={answer !== null && answer === pickedPosition}
		/>
	);
};

export default LabyrinthGame;
