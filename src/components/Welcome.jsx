import React from 'react'
import '../styles/welcome.css'
import { AiOutlineArrowDown } from "react-icons/ai";

function Welcome() {
    return (
        <div className='welc'>
            <div className='welc--info'>
                <h1>David Hernandez</h1>
                <h3>software developer</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, error doloremque. Nemo sint fugiat doloremque voluptatum possimus labore nostrum voluptate adipisci harum animi, nam veritatis accusantium fugit sit culpa dolore! Eum nihil nulla nisi adipisci eius doloribus expedita? Fugiat cupiditate est illo cumque quasi hic quae saepe molestiae sunt tempora.</p>
            </div>
            <button className='welc--btn'><AiOutlineArrowDown className='welc--icon' /></button>
        </div>
    )
}

export default Welcome