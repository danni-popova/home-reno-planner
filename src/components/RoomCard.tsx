import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {Room} from "../types/Room";

interface RoomCardProps{
    room: Room;
}

export default function RoomCard(props: RoomCardProps) {
    return (
        <Card sx={{width: 345}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={props.room.cover}
                    alt="room-cover"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.room.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Open
                </Button>
            </CardActions>
        </Card>
    )
}