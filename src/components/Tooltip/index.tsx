import {Tooltip as MUITooltip, TooltipProps} from '@mui/material';
import {makeStyles} from '@mui/styles';
import React from 'react';

const useClasses = makeStyles(() => ({
	tooltip: {
		backgroundColor: '#fff',
		borderRadius: 5,
		color: '#000',
		boxShadow: 'rgba(0, 0, 0, 0.3) 0 2px 15px',
		fontWeight: 'normal',
	},
}));

const Tooltip = React.forwardRef<unknown, TooltipProps>(
	({children, ...props}, ref) => {
		const classes = useClasses();

		return (
			<MUITooltip ref={ref} classes={classes} {...props}>
				{children}
			</MUITooltip>
		);
	}
);

export default Tooltip;
