import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from '@mui/material';
import React from 'react';

export interface ComboBoxOption<T> {
	key: string;
	value: T;
}

interface ComboBoxProps<T> {
	labelId: string;
	label: string;
	options: ComboBoxOption<T>[];
	value: T;
	onChange: (e: SelectChangeEvent<T>) => void;
}

// eslint-disable-next-line react/function-component-definition
function ComboBox<T>({
	labelId,
	label,
	value,
	onChange,
	options,
}: ComboBoxProps<T>) {
	return (
		<FormControl size="small" fullWidth>
			<InputLabel id={labelId}>{label}</InputLabel>
			<Select labelId={labelId} label={label} value={value} onChange={onChange}>
				{options.map((option) => (
					<MenuItem key={option.key} value={option.key}>
						{String(option.value)}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}

export default ComboBox;
