import React from 'react';
import styled from 'styled-components';
const url = require('../../img/avatar.jpg');

const AvatarContainer = styled.div`
	padding: 0.5rem;
	margin: 0.5rem 0;
	background: transparent;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	&:hover {
		background: rgba(241, 243, 244, 0.24);
	}
`;

const Image = styled.img.attrs((props) => ({
	src: props.src || url,
}))`
	width: 100%;
	height: auto;
	border-radius: 50%;
`;

const Avatar = () => {
	return (
		<AvatarContainer>
			<Image />
		</AvatarContainer>
	);
};

export default Avatar;
