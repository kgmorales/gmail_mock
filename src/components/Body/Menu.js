import React from 'react';
import IconRow from '../sharedComponents/IconRow';
import styled from 'styled-components';

const SideNav = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: flex-end;
	height: 100%;
	padding: 0.5rem;
	flex-direction: column;
	position: relative;
	transition: all 0.3s ease-in-out;
`;

const Menu = ({ iconInfo, left }) => {
	return (
		<SideNav>
			<IconRow column iconInfo={iconInfo} />
		</SideNav>
	);
};

export default Menu;
