import React from 'react';
import classes from './Projects.module.scss';
import Heading from '../../Global/Heading/Heading';
import Project from '../../Components/Project/Project';
import Image from '../../Assets/merch-shop.png';

export default () => {
	return (
		<div className={classes.root} id={'projects'}>
			<Heading>PROJECTS</Heading>
			<a
				href={'https://github.com/AryanshMahato'}
				target={'_blank'}
				rel="noopener noreferrer"
			>
				Checkout More Projects on my Github
			</a>
			<div className={classes.projectsList}>
				<Project
					project={{
						name: 'Merch Shop',
						githubLink: 'https://github.com/AryanshMahato/merch-shop-client',
						liveLink: 'https://merch-shop.netlify.app/',
						image: Image,
					}}
				/>
			</div>
		</div>
	);
};
