import Grid from '@components/Grid';
import Spin from '@components/Spin';
import NorthIcon from '@mui/icons-material/North';
import {useAppSelector} from '@shared/store/hooks';
import React from 'react';

import {Move} from '../../model/types';

interface GameMovesProps {
	moves: Move[];
	fieldSize?: number;
}

const moveIcon: {[K in Move]: React.ReactNode} = {
	[Move.UP]: <NorthIcon />,
	[Move.LEFT]: <NorthIcon sx={{transform: 'rotate(270deg)'}} />,
	[Move.DOWN]: <NorthIcon sx={{transform: 'rotate(180deg)'}} />,
	[Move.RIGHT]: <NorthIcon sx={{transform: 'rotate(90deg)'}} />,
};

export const GameMovesRoot: React.FC<GameMovesProps> = ({
	moves,
	fieldSize = 50,
}) => {
	return (
		<Grid container gap={1}>
			{moves.map((move, i) => (
				<Grid
					key={i}
					item
					container
					sx={{
						width: fieldSize,
						height: fieldSize,
						border: '1px solid var(--color-primary)',
						borderRadius: 1,
					}}
					justifyContent="center"
					alignItems="center"
				>
					{moveIcon[move]}
				</Grid>
			))}
		</Grid>
	);
};

const GameMoves: React.FC = () => {
	const {moves} = useAppSelector((state) => state.labyrinth);

	return moves !== null ? <GameMovesRoot moves={moves} /> : <Spin />;
};

export default GameMoves;
