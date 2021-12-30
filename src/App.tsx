import React from 'react';
import './App.css';
import RoomBoard from './components/rooms/RoomBoard';
import SpendingBoard from './components/spending/SpendingBoard';
import { Box, ThemeProvider } from '@mui/material';
import TasksBoard from './components/tasks/TasksBoard';
import { theme } from './theme';
import TopBar from './components/navigation/TopBar';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className='App'>
				<TopBar />
				<Box>
					<SpendingBoard />
					<RoomBoard />
					<TasksBoard />
				</Box>
			</div>
		</ThemeProvider>
	);
}

export default App;
