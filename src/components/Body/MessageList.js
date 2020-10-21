import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from '../sharedComponents/Icon';
import Tag from '../sharedComponents/Tag';

const MessageContainer = styled.div`
	width: 100%;
	box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.12);
	background: ${(p) => (p.checked ? '#174ea6' : 'transparent')};
	cursor: pointer;
`;
const GridContainer = styled.div`
	display: grid;
	grid-template-columns: 0.1fr 0.1fr 0.1fr 0.4fr 1.6fr 0.1fr;
	grid-template-rows: 0.1fr;
	gap: 0px 0px;
	width: 100%;
	grid-template-areas:
		'. . . . . . .'
		'. . . . . . .'
		'. . . . . . .'
		'. . . . . . .'
		'. . . . . . .';
	&:hover {
		box-shadow: 0px 0px 8px 0px rgba(255, 255, 255, 0.98);
	}
`;
const GridItem = styled.div`
	display: flex;
	justify-content: ${(p) => (p.text ? 'flex-start' : 'center')};
	align-items: center;
	width: 100%;
	color: rgba(255, 255, 255, 1);
	flex-wrap: nowrap;
`;

const MessageList = ({ body, fname, lname, tags, date }) => {
	const [selected, setSelected] = useState(false);

	const handleCheck = (e) => {
		setSelected(!selected);
	};
	const shortenBody = (b) => b.slice(0, 90);
	const shortenDate = (d) => d.slice(0, -5);

	return (
		<MessageContainer checked={selected}>
			<GridContainer>
				<GridItem>
					<input type='checkbox' onChange={handleCheck} />
				</GridItem>
				<GridItem>
					<Icon icon='star' size='sm' />
				</GridItem>
				<GridItem>
					<Icon icon='chevron-right' size='sm' />
				</GridItem>
				<GridItem text>
					<p>
						{fname} {lname}
					</p>
				</GridItem>
				<GridItem text>
					{tags ? <Tag tags={tags} /> : ''}
					<p>{shortenBody(body)}...</p>
				</GridItem>
				<GridItem text>
					<p>{shortenDate(date)}</p>
				</GridItem>
			</GridContainer>
		</MessageContainer>
	);
};

export default MessageList;
