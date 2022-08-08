import {
	ClickAwayListener as MUIClickAwayListener,
	ClickAwayListenerProps,
} from '@mui/material';
import React from 'react';

const ClickAwayListener: React.FC<ClickAwayListenerProps> = (props) => (
	<MUIClickAwayListener {...props} />
);

export default ClickAwayListener;
