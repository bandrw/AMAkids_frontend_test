import Grid from '@components/Grid';
import NorthIcon from '@mui/icons-material/North';
import React from 'react';

import {Move} from '../../model/types';

interface GameMovesProps {
	moves: Move[];
	size?: number;
}

const moveIcon: {[K in Move]: React.ReactNode} = {
	[Move.UP]: <NorthIcon />,
	[Move.LEFT]: <NorthIcon sx={{transform: 'rotate(270deg)'}} />,
	[Move.DOWN]: <NorthIcon sx={{transform: 'rotate(180deg)'}} />,
	[Move.RIGHT]: <NorthIcon sx={{transform: 'rotate(90deg)'}} />,
};

const GameMoves: React.FC<GameMovesProps> = ({moves, size = 50}) => {
	return (
		<Grid container gap={1}>
			{moves.map((move, i) => (
				<Grid
					key={i}
					item
					container
					sx={{
						width: size,
						height: size,
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

export default GameMoves;
