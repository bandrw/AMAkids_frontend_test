import Button from '@components/Button';
import ComboBox, {ComboBoxOption} from '@components/ComboBox';
import Grid from '@components/Grid';
import {
	setSize,
	startGame,
} from '@features/labyrinth-game/model/labyrinthSlice';
import {useAppDispatch, useAppSelector} from '@shared/store/hooks';
import React, {useCallback, useEffect} from 'react';

import GameField from './game-field';
import GameMoves from './game-moves';

interface LabyrinthGameRootProps {
	view: 'inGame' | 'finished';
	size: number;
	success?: boolean;
	onTryAgain: () => void;
	onSizeChange: (size: number) => void;
}

const sizeOptions: ComboBoxOption<number>[] = [
	{key: '3', value: 3},
	{key: '4', value: 4},
	{key: '5', value: 5},
];

export const LabyrinthGameRoot: React.FC<LabyrinthGameRootProps> = ({
	view,
	success,
	size,
	onSizeChange,
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
			<Grid item>
				<Grid
					container
					gap={2}
					justifyContent="center"
					flexDirection="column"
					minWidth={120}
				>
					<>
						{view === 'finished' && (
							<>
								<Grid item sx={{fontSize: '1.5rem', textAlign: 'center'}}>
									{success ? 'Correct! 🙂' : 'Wrong 🙁'}
								</Grid>
								<Grid item>
									<Button fullWidth variant="contained" onClick={onTryAgain}>
										{success ? 'Play again' : 'Try again'}
									</Button>
								</Grid>
							</>
						)}
						<ComboBox<number>
							labelId="set-labyrinth-size"
							label="Labyrinth size"
							value={size}
							options={sizeOptions}
							onChange={(e) => onSizeChange(Number(e.target.value))}
						/>
					</>
				</Grid>
			</Grid>
		</Grid>
	);
};

const LabyrinthGame: React.FC = () => {
	const {view, answer, pickedPosition, size} = useAppSelector(
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
			size={size}
			onTryAgain={tryAgain}
			success={answer !== null && answer === pickedPosition}
			onSizeChange={(s: number) => {
				if (s !== size) {
					dispatch(setSize(s));
					dispatch(startGame());
				}
			}}
		/>
	);
};

export default LabyrinthGame;
