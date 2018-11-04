import React from 'react';
import styled from 'styled-components/macro';
import Goo from 'components/Goo';
import { GlobalStyle } from 'styles/GlobalStyle';

const Title = styled.h1`
	position: absolute;
	top: 30px;
	left: 30px;
`;

export default function App() {
	return (
		<>
			<GlobalStyle />

			<Title>June's Game</Title>

			<Goo />
		</>
	);
}
