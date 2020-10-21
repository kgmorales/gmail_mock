import React from 'react';
import Icon from '../sharedComponents/Icon';
import styled, { css } from 'styled-components';
import Avatar from '../Header/Avatar';

const IconRowContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	margin-left: auto;
	${(p) =>
		p.column &&
		css`
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			margin: 0;
			margin-right: auto;
		`}
`;

const IconRow = ({ iconInfo, column, avatar }) => {
	return (
		<>
			{column ? (
				<IconRowContainer column>
					{iconInfo.map((icon, i) => {
						return <Icon icon={icon.name} size={icon.size} key={i} />;
					})}
				</IconRowContainer>
			) : (
				<IconRowContainer>
					{iconInfo.map((icon, i) => {
						return <Icon message icon={icon.name} size={icon.size} key={i} />;
					})}
					{avatar ? <Avatar /> : ''}
				</IconRowContainer>
			)}
		</>
	);
};

export default IconRow;
