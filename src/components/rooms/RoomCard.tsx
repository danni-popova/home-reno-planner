import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {
	Button,
	CardActionArea,
	CardActions,
	CardHeader,
	LinearProgress,
} from '@mui/material';
import { Room } from '../../types/Room';
import LibraryAddCheckSharpIcon from '@mui/icons-material/LibraryAddCheckSharp';
import ClearAllSharpIcon from '@mui/icons-material/ClearAllSharp';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';

interface RoomCardProps {
	room: Room;
}

export default function RoomCard(props: RoomCardProps) {
	const handleClick = () => {
		console.log('clicked');
	};

	return (
		<Card sx={{ width: 345, margin: '10px' }}>
			<CardActionArea onClick={handleClick}>
				<CardHeader
					title={props.room.name}
					subheader='Last updated: Thu 30 Dec 15:28'
				/>
				<CardMedia
					component='img'
					height='200'
					image={props.room.cover}
					alt='room-cover'
				/>
				<CardContent>
					<LinearProgress variant='determinate' value={95} />
				</CardContent>
			</CardActionArea>
			<CardActions disableSpacing>
				<Button startIcon={<LibraryAddCheckSharpIcon color='secondary' />}>
					1/7
				</Button>
				<Button startIcon={<ClearAllSharpIcon color='error' />}>8/10</Button>
				<Button startIcon={<CurrencyPoundIcon color='primary' />}>1234</Button>
			</CardActions>
		</Card>
	);
}
