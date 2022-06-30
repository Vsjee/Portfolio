import React from 'react'
import '../styles/footer.css'

function Footer() {
	return (
		<footer className='foot'>
			{/* <Form /> */}
			<form className='form'>
				<input type="text" placeholder="Your name" className='form--name' />
				<input type="email" placeholder="Your email" className='form--email' />
				<textarea name="textarea" cols="30" rows="10" placeholder="Your subject" className='form--textarea'></textarea>
				<button>Submit</button>
			</form>
			<ul>
				<li><a href="">GITHUB</a></li>
				<li><a href="">LINKED</a></li>
			</ul>
			<p>copyright</p>
		</footer>
	)
}

export default Footer