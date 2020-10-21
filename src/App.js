import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faClock,
	faSearch,
	faSortDown,
	faBars,
	faQuestionCircle,
	faCog,
	faTh,
	faPlus,
	faStar,
	faChevronRight,
	faPlane,
	faRecycle,
	faEllipsisV,
	faChevronDown,
	faCalendar,
	faStickyNote,
	faFile,
	faInbox,
	faPrint,
	faShare,
	faBackward,
} from '@fortawesome/free-solid-svg-icons';
import { MessageProvider } from './MessageContext';
import Inbox from './Inbox';
library.add(
	faClock,
	faSearch,
	faSortDown,
	faBars,
	faQuestionCircle,
	faCog,
	faTh,
	faPlus,
	faStar,
	faChevronRight,
	faPlane,
	faRecycle,
	faEllipsisV,
	faChevronDown,
	faCalendar,
	faStickyNote,
	faFile,
	faInbox,
	faPrint,
	faShare,
	faBackward
);

const App = () => {
	return (
		<MessageProvider>
			<div className='App'>
				<Inbox />
			</div>
		</MessageProvider>
	);
};

export default App;
