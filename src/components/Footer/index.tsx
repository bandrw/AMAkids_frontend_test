import './styles.scss';

import {cn} from '@bem-react/classname';
import ExternalLink from '@components/ExternalLink';
import Grid from '@components/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react';

const cnFooter = cn('Footer');

const Footer: React.FC = () => {
	return (
		<Grid
			className={cnFooter()}
			container
			width="100%"
			height={40}
			justifyContent="center"
			alignItems="center"
			gap={1}
		>
			<Grid item>
				<Grid container alignItems="center">
					<GitHubIcon />
				</Grid>
			</Grid>
			<Grid item>
				<ExternalLink href="https://github.com/bandrw/AMAkids_frontend_test">
					github.com/bandrw/AMAkids_frontend_test
				</ExternalLink>
			</Grid>
		</Grid>
	);
};

export default Footer;
