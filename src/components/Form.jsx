import React from 'react';
import FormStyles from './FormStyles';
import Button from './ui/Button';
import { handleReload } from '../formValidation';

function Form() {

	const { Form, Input, TextArea } = FormStyles;

	return (
		<Form id='contact' onSubmit={handleReload}>
			<h2>Contact</h2>
			<Input type='text' placeholder='Your name' className='form--name' />
			<Input
				type='email'
				placeholder='Your email'
				className='form--email'
			/>
			<TextArea
				name='textarea'
				cols='30'
				rows='10'
				placeholder='Your subject'
				className='form--textarea'></TextArea>
			<Button>Submit</Button>
		</Form>
	);
}

export default Form;
