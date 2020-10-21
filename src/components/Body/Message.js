import React, { useContext } from 'react';
import styled from 'styled-components';
import Icon from '../sharedComponents/Icon';
import IconRow from '../sharedComponents/IconRow';
import Tag from '../sharedComponents/Tag';
import { MessageContext } from '../../MessageContext';
import { getEmailDetails, getIcons } from '../../services/utils';

const MessageContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	color: black;
	background: white;
	width: 100%;
	padding: 1rem 2rem;
	height: 500px;
`;
const MessageHeading = styled.div`
	display: flex;
	align-items: center;
`;
const TitleContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	color: black;
	fill: black;
	&::nth-child(2) {
		color: gold;
	}
`;
const Title = styled.h2`
	font-size: 1.5rem;
	font-weight: bold;
`;
const IconRowContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	color: black;
	margin-left: auto;
`;
const MessageBody = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	color: black;
`;
const MessageDetailContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;
const MessageEmail = styled.div`
	font-weight: bold;
	font-size: 0.8rem;
`;
const MessageOptions = styled.div`
	margin-left: auto;
`;

const Message = ({ match }) => {
	const { icons, emails } = useContext(MessageContext);
	const [email] = emails;
	const message = getEmailDetails(email, match.params.id)[0];
	const [iconValues] = icons;
	const emailandNames = `${message.first_name} ${message.last_name}<${message.email}>`;

	return (
		<MessageContainer>
			<MessageHeading>
				<TitleContainer>
					<Title>{message.subject}</Title>
					<Icon icon='chevron-right' size='lg' />
					<Tag tag={message.tag} />
				</TitleContainer>
				<IconRowContainer>
					<IconRow message iconInfo={getIcons(iconValues, 'titleInfo')} />
				</IconRowContainer>
			</MessageHeading>
			<MessageBody>
				<MessageDetailContainer>
					<MessageEmail>
						<p>{emailandNames}</p>
					</MessageEmail>
					<MessageOptions>
						{message.date}
						{message.time}
					</MessageOptions>
				</MessageDetailContainer>
				<p>{message.body}</p>
			</MessageBody>
		</MessageContainer>
	);
};

export default Message;
