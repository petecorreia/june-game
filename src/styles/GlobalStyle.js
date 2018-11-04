import { createGlobalStyle } from 'styled-components/macro';
import { normalize, selection } from 'polished';
import { brand, background, foreground } from 'styles/colors';

export const GlobalStyle = createGlobalStyle`
	${normalize()};

	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

	${selection({ backgroundColor: brand, color: 'white' })};

	html {
		height: 100%;
		touch-action: manipulation;
		-webkit-tap-highlight-color: rgba(0,0,0,0);
		-webkit-tap-highlight-color: transparent;
		-ms-overflow-style: -ms-autohiding-scrollbar;
	}

	body {
		display: flex;
		flex-direction: column;
		min-height: 100%;
		background-color: ${background};
		color: ${foreground};
		font-family: sans-serif;
		font-size: 16px;
		line-height: 1.345;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		touch-action: none;
	}

	#root {
		display: flex;
		flex-direction: column;
		flex: 1 0 auto;
	}

	a {
		color: inherit;
	}

	h1, h2, h3 {
		font-weight: 100;
	}

	h1, h2, h3, h4, h5, h6 {
		margin-top: 0;
		margin-bottom: 0.5em;
	}

	h1 {
		font-size: 48px;
		line-height: 1.1;
		letter-spacing: -0.025em;
	}

	h2 {
		font-size: 36px;
		line-height: 1.3;
	}

	h3 {
		font-size: 24px;
	}

	h1, h2, h3, h4, h5, h6, p {
		&:last-child {
			margin-bottom: 0;
		}
	}

	button {
		font-family: inherit;
		line-height: normal;
		border-radius: 0;
		-webkit-font-smoothing: inherit;
		-moz-osx-font-smoothing: inherit;
	}

	input {
		font-family: inherit;
		-webkit-font-smoothing: inherit;
		-moz-osx-font-smoothing: inherit;
	}
`;
