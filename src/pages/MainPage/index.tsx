import './styles.scss';

import {cn} from '@bem-react/classname';
import Grid from '@components/Grid';
import Page from '@components/Page';
import React from 'react';

const cnMainPage = cn('MainPage');

const MainPage: React.FC = () => {
	return (
		<Page>
			<Grid container className={cnMainPage()} justifyContent="center">
				Main page
			</Grid>
		</Page>
	);
};

export default MainPage;
