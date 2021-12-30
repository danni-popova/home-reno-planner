import Card from '@mui/material/Card';
import { CardActionArea, CardHeader, LinearProgress } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';

export default function NewRoomCard() {
	return (
		<Card sx={{ width: 345, margin: '10px' }}>
			<CardHeader
				title='Add new room'
				subheader='Use template to create new room'
			/>
			<CardActionArea>
				<CardMedia
					component='img'
					height='200'
					image='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAMAAACM/tznAAAAilBMVEX////e4v1TafZFXva+xPucpfmnsPptfffy9P7l6P1HYPb6+/+Fk/jz9f78/f8nSfU1U/V4h/fV2v2Aj/jHzfzEyfyyu/ru8P58jPhccfdlePfT1/ygqflNZvattfpwgffN0vzp6/6Tnvk+WPWLmPhmevfZ3v26wPsfQvQxTvWwufuPnPkANfQ5VfXxG7TiAAAETklEQVR4nO2di3KiMBSGQ5WLInZRRItU0Hqp7fb9X2/BzrZ09zAYPEEI/zfDtCbhJH6jgSAkQgAAAAAAAAAAAAAAAAAAAAAALuwfOsyeQcA4MDpLMOAQMGIIcidGY4YgEJAJSE2SmE5uCWtGARN/YxGMydR2sPEnnAIWZJbNEF4ZC1YBQyrHbbWAYeMCLL+Id0k7zv0arNLP+KtioinZ7uYF2MbyC8e/HDtGT9tlHVbrfG8n8gppsu/lDgK8wovJRYCVvRHXI7kEKMsaTfJsJymGf5Zs9x0EOIUX808BM2E8z1cEh03WxIjKmT+kYjTP99ZDwGZNh83eT+KROYbZCwFZ0xKHzDFiCIAACMj/gQAIKCZDwJXt/UvzAhK38GLSQwGRWRiNjzkEDIrXG2Qv7zUvYLsuMLsk3SZAHIsRZa/MNS+A4EYBN9EaATM6a/BPr/mNZgLCk5j+j/AiIVYGmRXoJWC6eqKIjKzTsMks39NIwLFenVttBOzCWsTaCLCCWoTaCOj9V6DkGFiFPp0gBNSrEwIgoN5+RSCg9wL22eG0zwIWL4kdyV5GouiqgHQVBCf/9jidFbC2hPD6LGAWC+H0Q8A+oniweiPgQKYGZm8E2C6VuoAACIAACICAevX/AAIgAAIgAAIggMqBAAio2hcCIKBenRAAATKlIQACqFQIgAAIgAAIgIB69f8AAiAAAiAAAiCAyoEACKjaFwIgoF6d+gig5yCrxNjJlG6xAG9sneogN4dhiwUIkdZ5bPBEP1RcRqsFNAEEQACVCgEQAAEQAAEQwBAeAiAAAkoETNsiYEqlsj41tt+lxFQni4ghPAPRgmhcarIK2JPD9pQhPAMp2bgd64OTNa/s3JO1+kdn203+8LTbZwHBs+8nHN10VwUMD2kQqp1Bot3kc4jwTaHRwU6QbRKVh8fz42uSmOTZRothE5CvguA6C0vEZ9lVLu4Km4BvRqHYh6wRVaJAQIYRcRxZG0GNgIzti6EgKj/KBIjF61JFWG7UCciIyRF4u1AqwDzL/Xx5D5QKEMOtqshsqBWQnR/Ra+S0B9UCpKe7bxrVAkTbx0fKBYggUBn9ZtQLMF5bfShQL+Cyllx7aUBANlC8otAsshUSlR6PmxBw1YyVpzd6VUEadzeUKv5eeitmEwKm14wKhiepmKZc12reVYC4ZvJ4rQVcczKgt4Bz9bUBvQXkP8BVoLeAK64L6C1A9P0TIH5Xng5rLuC5shfUXEB1J6C5gOpV8DovIE7syI+TxE3tZJpt3tq288055tvjpmr/zgsYhGl6sNJALINAOMHX32m+eUHlgLDzAsbb2+4P6L6AG2+QgAC1AkoHpLwCQs+piRe+yezr7YZSxd/TkuJeyCkgPv+qzcf5UYazZPGPsnrPMaMAam3Qq3GVUl6v4BTQUXgEdOJuAJoli4CXQWd54RCwNTpMhz+9AAAAAAAAAAAAAAAAAABg5w+i8dEkQACqfQAAAABJRU5ErkJggg=='
					alt='room-cover'
				/>
				<CardContent>
					<LinearProgress variant='determinate' value={100} />
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
