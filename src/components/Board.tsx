import {Box} from "@mui/material";
import {Room} from "../types/Room";
import RoomCard from "./RoomCard";

export default function Board(){
    return (
        <Box display='flex' gap='20px' flexWrap='wrap' margin='20px'>
            {rooms.map((room) => (<RoomCard room={room} />))}
        </Box>
    );
}

const rooms: Room[] = [
    {
        name: "Kitchen",
        cover: "https://trello.com/1/cards/61a8c04ec68b4623ab266aa2/attachments/61c6271379190b04e3d65e79/previews/61c6271479190b04e3d65e9f/download/image.png",
        colour: "",
        windows: [],
        walls: [],
        door: {
            size: {
                height: 200,
                width: 86,
            },
            cost: 200,
        },
        dimensions: {
            height: 316,
            width: 416
        },
    },
    {
        name: "Dinning room",
        cover: "https://trello.com/1/cards/61a8c065772a6e6388962cff/attachments/61c626afde36b26f19fdc918/previews/61c626b0de36b26f19fdc91f/download/image.png",
        colour: "",
        windows: [],
        walls: [],
        door: {
            size: {
                height: 200,
                width: 86,
            },
            cost: 200,
        },
        dimensions: {
            height: 316,
            width: 416
        },
    },
    {
        name: "Living room",
        cover: "https://trello.com/1/cards/61a8c0586dc9dc2730ef70cb/attachments/61c62690ad77fb0b194ca56d/previews/61c62692ad77fb0b194ca621/download/image.png",
        colour: "",
        windows: [],
        walls: [],
        door: {
            size: {
                height: 200,
                width: 86,
            },
            cost: 200,
        },
        dimensions: {
            height: 316,
            width: 416
        },
    },
    {
        name: "Office",
        cover: "https://trello.com/1/cards/61a8c08394837c46e7493f24/attachments/61c618ae9dc6e44925417ca3/previews/61c618af9dc6e44925417caa/download/image.png",
        colour: "",
        windows: [],
        walls: [],
        door: {
            size: {
                height: 200,
                width: 86,
            },
            cost: 200,
        },
        dimensions: {
            height: 316,
            width: 416
        },
    },
    {
        name: "Wardrobe",
        cover: "https://trello.com/1/cards/61a8c02d49c0b21e4c4eb44f/attachments/61c61851da3bc56ddcdc1e41/previews/61c61853da3bc56ddcdc1e4f/download/image.png",
        colour: "",
        windows: [],
        walls: [],
        door: {
            size: {
                height: 200,
                width: 86,
            },
            cost: 200,
        },
        dimensions: {
            height: 316,
            width: 416
        },
    },
    {
        name: "Bedroom",
        cover: "https://trello.com/1/cards/61a8c070066b906048457cca/attachments/61c6194971e2b87b7971436a/previews/61c6194a71e2b87b7971437c/download/image.png",
        colour: "",
        windows: [],
        walls: [],
        door: {
            size: {
                height: 200,
                width: 86,
            },
            cost: 200,
        },
        dimensions: {
            height: 316,
            width: 416
        },
    },
    {
        name: "Bathroom",
        cover: "https://trello.com/1/cards/61a8c0d52a08c909c449afcf/attachments/61c62afe501fa5385f7b45c4/previews/61c62b00501fa5385f7b45d3/download/image.png",
        colour: "",
        windows: [],
        walls: [],
        door: {
            size: {
                height: 200,
                width: 86,
            },
            cost: 200,
        },
        dimensions: {
            height: 316,
            width: 416
        },
    },
    {
        name: "Sunroom",
        cover: "",
        colour: "https://i.imgur.com/cpwR3Jz.png",
        windows: [],
        walls: [],
        door: {
            size: {
                height: 200,
                width: 86,
            },
            cost: 200,
        },
        dimensions: {
            height: 316,
            width: 416
        },
    },
    {
        name: "Garden",
        cover: "https://i.imgur.com/OgBSIpz.png",
        colour: "",
        windows: [],
        walls: [],
        door: {
            size: {
                height: 200,
                width: 86,
            },
            cost: 200,
        },
        dimensions: {
            height: 316,
            width: 416
        },
    }

];