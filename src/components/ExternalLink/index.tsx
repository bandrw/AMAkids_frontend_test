import {Link, LinkProps} from '@mui/material';
import React from 'react';

const ExternalLink: React.FC<LinkProps> = (props) => {
	return <Link target="_blank" rel="noopener" underline="hover" {...props} />;
};

export default ExternalLink;
