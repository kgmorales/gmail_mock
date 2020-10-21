import React from 'react';
import Search from './Search';
import styled from 'styled-components';
import Icon from '../sharedComponents/Icon';
import Logo from './Logo';
import IconRow from '../sharedComponents/IconRow';

const HeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	position: relative;
	align-items: center;
	width: 100%;
	height: auto;
	padding: 0.5rem 0;
	margin-bottom: 0;
	box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.12);
`;

const HamburgerContainer = styled.div`
	display: flex;
	padding: 0.5rem;
`;

const Header = ({ iconInfo }) => {
	return (
		<HeaderContainer>
			<HamburgerContainer>
				<Icon icon='bars' size='lg' />
			</HamburgerContainer>
			<Logo />

			<Search />
			<IconRow iconInfo={iconInfo} avatar />
		</HeaderContainer>
	);
};

export default Header;
