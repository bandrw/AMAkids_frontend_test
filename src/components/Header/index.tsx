import './styles.scss';

import {cn} from '@bem-react/classname';
import Grid from '@components/Grid';
import GameInfo from '@features/labyrinth-game/ui/game-info';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import React from 'react';

const cnHeader = cn('Header');

const Header: React.FC = () => {
	return (
		<Grid
			container
			width="100%"
			height={80}
			justifyContent="center"
			alignItems="center"
			className={cnHeader()}
			gap={1.5}
		>
			<Grid item>
				<SportsEsportsIcon sx={{fontSize: '2.5rem', marginTop: '6px'}} />
			</Grid>
			<Grid item>
				<h1>Labyrinth</h1>
			</Grid>
			<Grid item>
				<GameInfo />
			</Grid>
		</Grid>
	);
};

export default Header;
