import Button from '@components/Button';
import Grid from '@components/Grid';
import Spin from '@components/Spin';
import Tooltip from '@components/Tooltip';
import {pickField} from '@features/labyrinth-game/model/labyrinthSlice';
import CheckIcon from '@mui/icons-material/Check';
import FlagIcon from '@mui/icons-material/Flag';
import StarIcon from '@mui/icons-material/Star';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import {useAppDispatch, useAppSelector} from '@shared/store/hooks';
import React, {useCallback} from 'react';

interface GameFieldProps {
	view: 'inGame' | 'finished';
	size: number;
	buttonSize?: number;
	startPosition: number;
	pickedPosition: number | null;
	answer: number;
	onPick: (index: number) => void;
}

export const GameFieldRoot: React.FC<GameFieldProps> = ({
	view,
	size,
	buttonSize = 100,
	startPosition,
	pickedPosition,
	answer,
	onPick,
}) => {
	return (
		<Grid
			display="grid"
			justifyContent="center"
			gap={2}
			gridTemplateColumns={`repeat(${size}, 1fr)`}
		>
			{new Array(size * size).fill(0).map((_, i) => {
				const isPickedCorrectly =
					view === 'finished' && i === pickedPosition && i === answer;
				const isPickedWrong =
					view === 'finished' && i === pickedPosition && i !== answer;
				const isAnswerWithFail =
					view === 'finished' && i === answer && i !== pickedPosition;

				return (
					<Grid key={i} item>
						<Button
							variant="contained"
							sx={{
								width: buttonSize,
								height: buttonSize,
								position: 'relative',
							}}
							onClick={view === 'inGame' ? () => onPick(i) : undefined}
						>
							{startPosition === i ? (
								<Tooltip title="Start">
									<FlagIcon sx={{fontSize: '2rem'}} />
								</Tooltip>
							) : null}
							<Grid position="absolute" top={5} right={5}>
								{isPickedCorrectly ? (
									<Tooltip title="Correct">
										<CheckIcon
											sx={{fontSize: '2rem', color: 'var(--color-success)'}}
										/>
									</Tooltip>
								) : isPickedWrong ? (
									<Tooltip title="Wrong">
										<ThumbDownAltIcon
											sx={{fontSize: '2rem', color: 'var(--color-failure)'}}
										/>
									</Tooltip>
								) : isAnswerWithFail ? (
									<Tooltip title="Answer">
										<StarIcon sx={{fontSize: '2rem', color: 'gold'}} />
									</Tooltip>
								) : null}
							</Grid>
						</Button>
					</Grid>
				);
			})}
		</Grid>
	);
};

const GameField: React.FC = () => {
	const {view, size, startPosition, pickedPosition, answer} = useAppSelector(
		(state) => state.labyrinth
	);
	const dispatch = useAppDispatch();

	const onPick = useCallback(
		(index: number) => {
			dispatch(pickField(index));
		},
		[dispatch]
	);

	return startPosition !== null && answer !== null ? (
		<GameFieldRoot
			view={view}
			size={size}
			startPosition={startPosition}
			pickedPosition={pickedPosition}
			answer={answer}
			onPick={onPick}
		/>
	) : (
		<Spin />
	);
};

export default GameField;
