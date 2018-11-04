import React from 'react';
import styled from 'styled-components/macro';
import Goo from 'components/Goo';
import { GlobalStyle } from 'styles/GlobalStyle';

const Title = styled.h1`
	position: absolute;
	bottom: 30px;
	left: 50%;
	opacity: 0.2;
	transform: translateX(-50%);
	font-size: 32px;
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
