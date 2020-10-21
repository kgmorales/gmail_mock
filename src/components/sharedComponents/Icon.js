import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const IconContainer = styled.div`
	padding: 0.5rem;
	margin: 0.5rem 0;
	background: transparent;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	&:hover {
		background: rgba(241, 243, 244, 0.24);
	}
`;

const Icon = ({ icon, size }) => {
	return (
		<IconContainer>
			<FontAwesomeIcon icon={icon} size={size} />
		</IconContainer>
	);
};

export default Icon;
