import React from 'react';
import FormStyles from './FormStyles';
import Button from '../ui/button/Button';
import './required.css'
//valdiation
import { Formik } from 'formik';
import * as Yup from 'yup';

const { Form, Input, TextArea } = FormStyles

const ContactForm = () => (
	<>
		<Formik
			initialValues={{ name: '', email: '', text: '' }}
			//ready to send the info in to a db
			onSubmit={async values => {
				await new Promise(resolve => setTimeout(resolve, 500));
				alert(JSON.stringify(values, null, 2));
				console.log(values);
			}}
			validationSchema={Yup.object().shape({
				email: Yup.string().email().required('Required'),
				name: Yup.string()
					.required('Required')
					.min(5, 'Name is too short - should be 5 chars minimum'),
				text: Yup.string()
					.required('Required')
					.min(10, 'Subject is too short - should be 10 chars minimum')
			})}
		>
			{({
				values,
				touched,
				errors,
				isSubmitting,
				handleChange,
				handleBlur,
				handleSubmit,
			}) => (
				<Form onSubmit={handleSubmit}>
					<Input
						type='text'
						name='name'
						placeholder='Your name'
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.name}
						className={
							errors.name && touched.name
								? "text-input error"
								: "text-input"
						}
					/>
					{errors.name && touched.name && (
						<div className="input-feedback">{errors.name}</div>
					)}
					<Input
						type='text'
						name='email'
						placeholder='Your email'
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.email}
						className={
							errors.email && touched.email
								? "text-input error"
								: "text-input"
						}
					/>
					{errors.email && touched.email && (
						<div className="input-feedback">{errors.email}</div>
					)}
					<TextArea
						type='text'
						name='text'
						placeholder='Your subject'
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.text}
						className={
							errors.text && touched.text
								? "text-input error"
								: "text-input"
						}
					/>
					{errors.text && touched.text && (
						<div className="input-feedback">{errors.text}</div>
					)}
					<Button type="submit" disabled={isSubmitting}>
						Submit
					</Button>
				</Form>
			)}
		</Formik>
	</>
);

export default ContactForm;
