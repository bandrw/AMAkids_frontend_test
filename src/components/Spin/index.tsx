import './styles.scss';

import {cn} from '@bem-react/classname';
import React from 'react';

const cnSpin = cn('Spin');

interface SpinProps {
	size?: 's' | 'm' | 'l';
}

const Spin: React.FC<SpinProps> = ({size = 's'}) => {
	return <div className={cnSpin({[`size_${size}`]: true})} />;
};

export default Spin;
