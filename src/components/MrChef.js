import React from 'react'
import { Link } from 'react-router-dom';

function About(props) {
    const { theme } = props;
    return (
        <div className="container d-flex justify-content-center home-container">
            <div class={`card border border-${theme === 'dark' ? 'light' : 'dark'} col-md-6 text-${theme === 'dark' ? 'light' : 'dark'}`}>
                <img src="https://static.vecteezy.com/system/resources/previews/008/709/513/original/chef-restaurant-logo-illustrations-template-free-vector.jpg" class="card-img-top" alt="logo" />
                <div class={`card-body bg-${theme}`}>
                    <h3 class="card-title">Mr.Chef</h3>
                    <p class="card-text">Welcome to Mr.Chef, a web application that brings you a wide variety of delicious recipes to explore and try in your kitchen, This web application is made by using REST apis and REACT JS.</p>
                    <p class="card-text">Contributions to Mr.Chef are welcome! If you find any issues or have suggestions for improvement, please open an issue on the GitHub repository. If you like this web application don't forget to give a start on github.</p>
                    <a href="https://github.com/sanket-164/Mr.Chef_ReactJS_RESTAPI" target="_blank" rel="noreferrer" class={`fs-6 btn ps-4 btn-${theme === 'dark' ? 'light' : 'dark'}`}>Get Source Code <i className={`fa fa-brand fa-github btn fs-4 text-${theme}`}></i></a>
                    <Link to="/" class={`fs-6 btn btn-${theme === 'dark' ? 'light' : 'dark'} mx-3 px-4 py-2 text-${theme}`}>Explore</Link>
                </div>
            </div>
        </div>
    )
}

export default About
