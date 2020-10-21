import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Menu from './components/Body/Menu';
import MessageToolbar from './components/Body/MessageToolbar';
import Body from './components/Body/Body';
import Message from './components/Body/Message';
import { MessageContext } from './MessageContext';
import styled from 'styled-components';
import { getIcons } from './services/utils';

const BodyContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: row;
`;
const MessagesContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 100%;
`;

const Inbox = () => {
	const { icons } = useContext(MessageContext);
	const [iconsValues] = icons;

	return (
		<Router>
			<Header iconInfo={getIcons(iconsValues, 'headerIcons')} />
			<BodyContainer>
				<Menu iconInfo={getIcons(iconsValues, 'menuLeft')} />
				<MessagesContainer>
					<MessageToolbar iconInfo={getIcons(iconsValues, 'titleInfo')} />
					<Switch>
						<Route path='/' exact component={Body} />
						<Route path='/message/:id' component={Message} />
					</Switch>
				</MessagesContainer>
				<Menu iconInfo={getIcons(iconsValues, 'menuRight')} />
			</BodyContainer>
		</Router>
	);
};

export default Inbox;
