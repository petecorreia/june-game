import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { useSpring, animated as anim } from 'react-spring';
import { foreground } from 'styles/colors';

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

const Wrapper = styled.div`
	flex: 1;
	position: relative;
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
`;

export default function Goo() {
	// const [{ scale }, setScale] = useSpring({ scale: 1, config: slow });
	const [{ pos1 }, setPos] = useSpring({ pos1: [0, 0], config: fast });
	const [{ pos2 }] = useSpring({ pos2: pos1, config: slow });
	const [{ pos3 }] = useSpring({ pos3: pos2, config: slow });

	useMoveCoords(({ x, y }) => setPos({ pos1: [x, y] }));

	return (
		<Wrapper>
			<Ball
				style={{
					width: '8vw',
					height: '8vw',
					transform: pos3.interpolate(trans),
				}}
			/>
			<Ball
				style={{
					width: '20vw',
					height: '20vw',
					transform: pos2.interpolate(trans),
				}}
			/>
			<Ball
				style={{
					width: '10vw',
					height: '10vw',
					transform: pos1.interpolate(trans),
				}}
			/>
		</Wrapper>
	);
}

function useMoveCoords(handler) {
	useEffect(() => {
		const innerHandler = e => {
			const x = e.touches ? e.touches[0].clientX : e.clientX;
			const y = e.touches ? e.touches[0].clientY : e.clientY;
			handler({ x, y });
			e.preventDefault();
		};
		document.addEventListener('touchstart', innerHandler, { passive: false });
		document.addEventListener('touchmove', innerHandler, { passive: false });
		document.addEventListener('mousemove', innerHandler);
		return () => {
			document.removeEventListener('touchstart', innerHandler);
			document.removeEventListener('touchmove', innerHandler);
			document.removeEventListener('mousemove', innerHandler);
		};
	}, []);
}
