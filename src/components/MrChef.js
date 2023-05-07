import React from 'react'
import { Link } from 'react-router-dom';

function About(props) {
    const { theme } = props;
    return (
        <div className="container d-flex justify-content-center home-container">
            <div class={`card border border-${theme === 'dark' ? 'light' : 'dark'} col-md-6 text-${theme === 'dark' ? 'light' : 'dark'}`}>
                <img src="https://static.vecteezy.com/system/resources/previews/008/709/513/original/chef-restaurant-logo-illustrations-template-free-vector.jpg" class="card-img-top" alt="logo" />
                <div class={`card-body bg-${theme}`}>
                    <h5 class="card-title">Mr.Chef</h5>
                    <p class="card-text">This application is made for learning purpose only, it helps users to find the Recipes of their choice.</p>
                    <p class="card-text">This application is made by using REST apis and REACT JS, Let me know if you want to give me some feedback.</p>
                    <a href="/https://github.com/sanket-164/Mr.Chef_ReactJS_RESTAPI" class={`btn btn-${theme === 'dark' ? 'light' : 'dark'} text-${theme}`}>Get Source Code</a>
                    <Link to="/" class={`btn btn-${theme === 'dark' ? 'light' : 'dark'} text-${theme}`}>Explore</Link>
                </div>
            </div>
        </div>
    )
}

export default About
