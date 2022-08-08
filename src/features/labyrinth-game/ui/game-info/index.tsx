import ClickAwayListener from '@components/ClickAwayListener';
import Grid from '@components/Grid';
import Tooltip from '@components/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import {IconButton} from '@mui/material';
import React, {useCallback, useState} from 'react';

const GameInfo: React.FC = () => {
	const [isOpened, setIsOpened] = useState(false);

	const closeTooltip = useCallback(() => setIsOpened(false), []);

	return (
		<ClickAwayListener onClickAway={closeTooltip}>
			<Tooltip
				placement="right"
				arrow
				open={isOpened}
				onClose={closeTooltip}
				title={
					<Grid container padding={1}>
						<Grid
							item
							whiteSpace="nowrap"
							sx={{fontSize: '0.8rem', fontWeight: 400}}
						>
							Follow the arrows to find final position
						</Grid>
					</Grid>
				}
				disableFocusListener
				disableHoverListener
				disableTouchListener
			>
				<IconButton onClick={() => setIsOpened(true)}>
					<HelpIcon />
				</IconButton>
			</Tooltip>
		</ClickAwayListener>
	);
};

export default GameInfo;
