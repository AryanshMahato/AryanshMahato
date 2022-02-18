import React from 'react';
import Particle from 'react-tsparticles';
import { ISourceOptions } from 'tsparticles';

const options: ISourceOptions = {
	background: {
		color: {
			value: '#2C3335',
		},
	},
	fpsLimit: 60,
	particles: {
		number: {
			value: 100,
			density: {
				enable: true,
				value_area: 800,
			},
		},
		color: {
			value: '#ffffff',
		},
		shape: {
			type: 'circle',
			stroke: {
				width: 0,
				color: '#000000',
			},
			polygon: {
				nb_sides: 5,
			},
			image: {
				src: 'img/github.svg',
				width: 100,
				height: 100,
			},
		},
		opacity: {
			value: 1,
			random: true,
			anim: {
				enable: true,
				speed: 1,
				opacity_min: 0,
				sync: false,
			},
		},
		size: {
			value: 3,
			random: true,
			anim: {
				enable: false,
				speed: 4,
				size_min: 0.3,
				sync: false,
			},
		},
		line_linked: {
			enable: false,
			distance: 150,
			color: '#ffffff',
			opacity: 0.4,
			width: 1,
		},
		move: {
			enable: true,
			speed: 1,
			direction: 'none',
			random: true,
			straight: false,
			out_mode: 'out',
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 600,
			},
		},
	},
	detectRetina: true,
};

export default function ParticleBackground() {
	return (
		<div
			style={{
				zIndex: -10000,
				position: 'absolute',
				width: '100vw',
				height: '100vh',
				top: 0,
				left: 0,
			}}
		>
			<Particle options={options} height="100vh" width="100vw" />
		</div>
	);
}
