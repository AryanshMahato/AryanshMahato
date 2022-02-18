import React, { useEffect } from 'react';
import classes from './Spinner.module.scss';
import Backdrop from '../Backdrop/Backdrop';

export default () => {
	useEffect(() => {
		document.querySelector('body').style.overflow = 'hidden';
		return () => {
			document.querySelector('body').style.overflowY = 'scroll';
		};
	}, []);

	return (
		<div className={classes.root}>
			<Backdrop />
			<div className={classes.loader} />
		</div>
	);
};
