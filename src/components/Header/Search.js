import React from 'react';
import styled from 'styled-components';
import Icon from '../sharedComponents/Icon';

const SearchContainer = styled.div`
	display: flex;
	margin-left: 4rem;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	width: 600px;
	height: auto;
	border-radius: 10px;
	border: 1px solid transparent;
	color: white;
	background: rgba(241, 243, 244, 0.24);
`;
const SearchBar = styled.input`
	background: transparent;
	border: 0;
	width: 80%;
	border-color: transparent;
	&:placeholder {
		color: rgba(241, 243, 244, 0.24);
	}
	&:focus {
		outline: none;
	}
`;

const Search = () => {
	return (
		<SearchContainer>
			<Icon icon='search' size='lg' />
			<SearchBar type='text' placeholder='Search mail' />
			<Icon icon='sort-down' size='lg' />
		</SearchContainer>
	);
};

export default Search;
