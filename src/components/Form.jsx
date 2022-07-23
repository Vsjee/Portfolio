import React from 'react';
import '../styles/form.css';
import Button from './Button';

function Form() {
    return (
        <form className='form' id='contact'>
            <h2>Contact</h2>
            <input type='text' placeholder='Your name' className='form--name' />
            <input
                type='email'
                placeholder='Your email'
                className='form--email'
            />
            <textarea
                name='textarea'
                cols='30'
                rows='10'
                placeholder='Your subject'
                className='form--textarea'></textarea>
            <Button>Submit</Button>
        </form>
    );
}

export default Form;
