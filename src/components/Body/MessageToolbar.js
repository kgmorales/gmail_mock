import React from 'react';
import styled from 'styled-components';
import Icon from '../sharedComponents/Icon';

const ToolbarContainer = styled.div`
	width: 100%;
	box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.12);
	display: flex;
	flex-direction: row;
`;
const Toolbar = styled.div`
	display: grid;
	grid-template-columns: 0.1fr 0.1fr 0.1fr 0.4fr 1.6fr 0.1fr 0.1fr;
	grid-template-rows: 0.1fr;
	gap: 0px 0px;
	width: 100%;
	grid-template-areas: '. . . . . MsgCount .';
`;

const InputContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const MessageToolbar = () => {
	return (
		<ToolbarContainer>
			<Toolbar>
				<InputContainer>
					<input type='checkbox' />
					<Icon icon='chevron-down'></Icon>
				</InputContainer>

				<Icon icon='recycle' size='sm' />
				<Icon icon='ellipsis-v' size='sm' />
			</Toolbar>
		</ToolbarContainer>
	);
};

export default MessageToolbar;
