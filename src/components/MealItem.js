import React from 'react';
import { Link } from 'react-router-dom';

function MealItem(props) {
    let { theme } = props;
    return (
        <div className={`card my-3 bg-${theme}`} >
            <div className="card-body">
                <img src={props.img} className={`card-img-top`} style={{ borderRadius: '5px' }} alt={props.title} />
            </div>
            <div className={`card-body d-flex justify-content-between bg-${theme}`}>
                <h5 className={`card-title text-${theme === 'dark' ? 'light' : 'dark'}`}>{props.title}</h5>
                <p className={`card-text text-${theme === 'dark' ? 'light' : 'dark'}`}>{props.area} {props.category}</p>
            </div>
            <Link to={`/meal/${props.id}`} className={`btn btn-${theme === 'dark' ? 'light' : 'dark'} mx-3 my-3 text-${theme} fs-5`}>Recipe</Link>
        </div>
    )
}

export default MealItem
