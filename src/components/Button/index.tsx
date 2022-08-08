import {Button as MUIButton, ButtonProps} from '@mui/material';
import React from 'react';

const Button: React.FC<ButtonProps> = React.forwardRef((props, ref) => (
	<MUIButton ref={ref} {...props} />
));

export default Button;
