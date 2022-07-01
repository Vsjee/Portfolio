import React from 'react'
import '../styles/form.css'

function Form() {
    return (
        <form className='form'>
            <input type="text" placeholder="Your name" className='form--name' />
            <input type="email" placeholder="Your email" className='form--email' />
            <textarea name="textarea" cols="30" rows="10" placeholder="Your subject" className='form--textarea'></textarea>
            <button>Submit</button>
        </form>
    )
}

export default Form