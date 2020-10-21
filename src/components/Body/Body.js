import React, { useContext } from 'react';
import MessageList from './MessageList';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MessageContext, MessageProvider } from '../../MessageContext';

const MessagesBody = styled.div`
	display: block;
	> * {
		text-decoration: none;
	}
`;

const Body = () => {
	const { emails } = useContext(MessageContext);
	const [email] = emails;

	return (
		<MessageProvider>
			<MessagesBody>
				{email.map((m, i) => {
					return (
						<Link to={`/message/${m.id}`} key={i}>
							<MessageList
								fname={m.first_name}
								lname={m.last_name}
								body={m.body}
								email={m.email}
								tags={m.tags}
								date={m.date}
								key={i}
							/>
						</Link>
					);
				})}
			</MessagesBody>
		</MessageProvider>
	);
};

export default Body;
