import React from 'react';
import { Link } from 'react-router-dom';
import ChangingText from './ChangingText';
import '../Stylish/Navstyle.css';
import  hero from '../Images/hero.png'
import Price from './Price';
import '../App.css'


function Home() {


    return (
        <>
            
            <section className="hero-section m-0 row d-flex justify-content-center align-items-center min-vh-100">
            <div className="text-center col">
                <h1 className="display-3 fw-bold mb-4">I'm Ramy Ibrahim</h1>
                <h4 className="lead fw-bold mb-5">
                    I'm a <ChangingText texts={['Front End Developer', 'React Developer', 'Web Developer']} />
                </h4>
                <div className="d-flex justify-content-center gap-3">
                    <Link to="/about" className="btn_home px-4 py-2 fw-bold">About</Link>
                    <Link to="/contact" className="btn_home px-4 py-2 fw-bold">Contact</Link>
                    </div>
            </div>
                                    <img src={hero} alt='' style={{width:"60%"}} className='col'/>

            </section>
            <Price/>
    </>
    );
}

export default Home;
