import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { useSpring, animated as anim } from 'react-spring';
import { foreground } from 'styles/colors';

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	width: 100%;
	height: 100%;
	overflow: hidden;
	user-select: none;
	cursor: default;
`;

const Ball = styled(anim.div)`
	position: absolute;
	will-change: transform;
	border-radius: 50%;
	background: ${foreground};
	box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
	opacity: 0.6;

	&:after {
		content: '';
		position: absolute;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.8);
	}
`;

const Ball1 = styled(Ball)`
	width: 170px;
	height: 170px;

	&:after {
		top: 50px;
		left: 50px;
		width: 50px;
		height: 50px;
	}
`;

const Ball2 = styled(Ball)`
	width: 350px;
	height: 350px;

	&:after {
		top: 70px;
		left: 70px;
		width: 70px;
		height: 70px;
	}
`;

const Ball3 = styled(Ball)`
	width: 200px;
	height: 200px;

	&:after {
		top: 50px;
		left: 50px;
		width: 50px;
		height: 50px;
	}
`;

const Filter = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	filter: url('#goo');
	overflow: hidden;
`;

export default function Goo() {
	const [{ pos1 }, set] = useSpring({ pos1: [0, 0], config: fast });
	const [{ pos2 }] = useSpring({ pos2: pos1, config: slow });
	const [{ pos3 }] = useSpring({ pos3: pos2, config: slow });

	useMouseMouse(({ clientX, clientY }) => set({ pos1: [clientX, clientY] }));

	return (
		<>
			<svg style={{ position: 'absolute', width: 0, height: 0 }}>
				<filter id="goo">
					<feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
					<feColorMatrix
						in="blur"
						values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
					/>
				</filter>
			</svg>
			<Wrapper>
				<Filter>
					<Ball1 style={{ transform: pos3.interpolate(trans) }} />
					<Ball2 style={{ transform: pos2.interpolate(trans) }} />
					<Ball3 style={{ transform: pos1.interpolate(trans) }} />
				</Filter>
			</Wrapper>
		</>
	);
}

function useMouseMouse(handler) {
	useEffect(() => {
		window.addEventListener('mousemove', handler);
		return () => window.removeEventListener('mousemove', handler);
	}, []);
}
