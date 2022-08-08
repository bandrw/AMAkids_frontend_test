import './styles.scss';

import {cn} from '@bem-react/classname';
import Grid from '@components/Grid';
import Page from '@components/Page';
import LabyrinthGame from '@features/labyrinth-game/ui';
import React from 'react';

const cnMainPage = cn('MainPage');

const MainPage: React.FC = () => {
	return (
		<Page>
			<Grid container className={cnMainPage()} justifyContent="center">
				<LabyrinthGame />
			</Grid>
		</Page>
	);
};

export default MainPage;
