import React, { FormEvent, useState } from 'react';
import classes from './ContactUs.module.scss';
import Undraw from '../../Assets/Undraw.svg';
import ContactUsForm from '../../Components/Forms/ContactUsForm';
import Heading from '../../Global/Heading/Heading';
import * as emailjs from 'emailjs-com';
import Spinner from '../../Global/Spinner/Spinner';

export default () => {
	const [showSpinner, setShowSpinner] = useState(false);
	const [resetForm, setResetForm] = useState(false);

	const formSubmitHandler = (e: FormEvent<HTMLFormElement>, values: any) => {
		e.preventDefault();
		const templateParams = {
			from_name: values.email,
			to_name: 'aryanshdev@gmail.com',
			subject: `${values.name} saw your Portfolio and wanted to have a chat`,
			message_html: values.message,
		};

		setShowSpinner(true);
		emailjs
			.send(
				'gmail',
				process.env.REACT_APP_TEMPLATE_ID,
				templateParams,
				process.env.REACT_APP_USER_ID
			)
			.then(() => {
				setResetForm(true);
				setShowSpinner(false);
			})
			.catch(() => {
				setResetForm(true);
				setShowSpinner(false);
			});
	};

	return (
		<div className={classes.root} id={'hello'}>
			{showSpinner ? <Spinner /> : null}
			<Heading className={classes.annotation}>Let's Have a Chat</Heading>
			<div className={classes.main}>
				<ContactUsForm
					formSubmitted={formSubmitHandler}
					resetForm={resetForm}
				/>
				<img src={Undraw} alt="" className={classes.image} />
			</div>
		</div>
	);
};
