import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
import { themes } from '@storybook/components';
import styled from 'styled-components/macro';
import { brand } from '../src/styles/colors';
import { GlobalStyle } from '../src/styles/GlobalStyle';

setOptions({
	theme: {
		...themes.dark,
		mainBackground: 'hsl(231, 14%, 8%)',
		mainBorder: 'none',
		mainBorderColor: 'hsl(231, 14%, 10%)',
		mainBorderRadius: 10,
		mainFill: 'hsl(231, 14%, 10%)',
		inputFill: 'hsl(231, 14%, 12%)',
		barFill: 'hsl(231, 14%, 8%)',
		barSelectedColor: brand,
		mainTextColor: '#efefef',
		dimmedTextColor: 'hsl(231, 10%, 50%)',
		highlightColor: brand,
		successColor: brand,
		overlayBackground:
			'linear-gradient(to bottom right, hsla(231, 14%, 8%, 0.6), hsla(231, 14%, 10%, 0.8))',
		brand: {
			background: brand,
			color: 'black',
		},
	},
	name: `June's Game`,
	url: '/',
	addonPanelInRight: true,
	hierarchySeparator: /\//,
	hierarchyRootSeparator: /\|/,
	enableShortcuts: false,
});

addDecorator(withKnobs);

const StoryWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: 30px;
`;

addDecorator(story => (
	<StoryWrapper>
		<GlobalStyle />
		{story()}
	</StoryWrapper>
));

const req = require.context('../src', true, /\.story\.js$/);

function loadStories() {
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
