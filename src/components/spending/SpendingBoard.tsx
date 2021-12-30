import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';
import { Box } from '@mui/material';

export default function SpendingBoard() {
	return (
		<Box display='flex' justifyContent='center' paddingLeft='25%'>
			<PieChart width={1000} height={200}>
				<Pie
					dataKey='value'
					isAnimationActive={false}
					data={data01}
					cx={200}
					cy={100}
					innerRadius={40}
					outerRadius={80}
					fill='#1db954'
				/>
				<Pie
					dataKey='value'
					data={data02}
					cx={500}
					cy={100}
					innerRadius={40}
					outerRadius={80}
					fill='#cd212a'
				/>
				<Tooltip />
			</PieChart>
		</Box>
	);
}

const data01 = [
	{ name: 'Amount spent so far', value: 400 },
	{ name: 'Amount remaining (estimate)', value: 300 },
];

const data02 = [
	{ name: 'Group A', value: 2400 },
	{ name: 'Group B', value: 4567 },
];
