import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		background: {
			default: '#ffffff',
		},
		primary: {
			main: '#212121',
			contrastText: '#b3b3b3',
			dark: '#121212',
			light: '#1db954',
		},
		secondary: {
			main: '#1db954',
		},
		error: {
			main: '#cd212a',
		},
	},
	shape: {
		borderRadius: 0,
	},
	components: {
		MuiTableCell: {
			styleOverrides: {
				head: {
					fontWeight: 900,
				},
			},
		},
	},
});

export type Theme = typeof theme;

export type ThemeProps = Readonly<{
	theme: Theme;
}>;

export { theme };
