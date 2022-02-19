import React, { useState } from 'react';
import classes from './Project.module.scss';
import GithubLink from '../ProjectLinks/GithubLink';
import LiveLink from '../ProjectLinks/LiveLink';

interface ProjectProps {
	project: {
		name: string;
		image: any;
		githubLink: string;
		liveLink?: string;
	};
}

export default ({ project }: ProjectProps) => {
	const [showLinks, setShowLinks] = useState(false);

	const hoverStarted = () => {
		setShowLinks(true);
	};

	const hoverEnded = () => {
		setShowLinks(false);
	};

	const buttonClass = showLinks
		? classes.buttons + ' ' + classes.show
		: classes.buttons;

	const imageClass = showLinks
		? classes.imageContainer + ' ' + classes.showImageBackground
		: classes.imageContainer;

	return (
		<div className={classes.root}>
			<div
				className={imageClass}
				onMouseEnter={hoverStarted}
				onMouseLeave={hoverEnded}
				onClick={hoverStarted}
			>
				<img
					src={project.image.src}
					alt={project.name}
					className={classes.image}
				/>
				<div className={buttonClass}>
					<GithubLink githubLink={project.githubLink} />
					<LiveLink liveLink={project.liveLink} />
				</div>
			</div>
			<p className={classes.name}>{project.name}</p>
		</div>
	);
};
