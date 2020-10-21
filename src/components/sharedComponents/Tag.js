import React from 'react';
import styled, { css } from 'styled-components';

const TagContainer = styled.div`
	color: white;
	border-radius: 5px;
	padding: 0.3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 20px;
	margin-right: 0.5rem;
	${(p) =>
		p.tag === 'work' &&
		css`
			background: #b99aff;
		`}
	${(p) =>
		p.tag === 'vacation' &&
		css`
			background: red;
		`};
`;

const Tag = ({ tags }) => {
	return (
		<TagContainer tag={tags}>
			<p>{tags}</p>
		</TagContainer>
	);
};

export default Tag;
