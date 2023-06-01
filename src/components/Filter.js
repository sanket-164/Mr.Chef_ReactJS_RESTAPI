import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import MealItem from './MealItem';
import Loader from './Loader';

function Filtered(props) {
    let { setTheme, theme } = props;
    const location = useLocation();
    const params = useParams();
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    document.title = `Mr.Chef - ${params.category ? params.category : params.country}`;

    const fetchFoods = async () => {
        let food = [];
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?${params.category ? 'c=' + params.category : 'a=' + params.country}`;
        const response = await fetch(url);
        const json = await response.json();
        food.push(json.meals);
        setFoods(food[0]);
        setLoading(false);
    }

    useEffect(() => {
        fetchFoods();
    }, [location])

    return (
        <div>
            <div className="container home-container">
                {loading && <Loader />}
                {(!loading) && <>
                    <div><h1 className={`text-${theme === 'dark' ? 'light' : 'dark'}`}>{params.category ? params.category : params.country} Recipes</h1></div>
                    <div className="row d-flex justify-content-center">
                        {foods.map((food) => {
                            return <div className="col-md-4">
                                <MealItem key={food.idMeal} id={food.idMeal} title={food.strMeal} img={food.strMealThumb} category={params.category} area={params.country} setTheme={setTheme} theme={theme}></MealItem>
                            </div>
                        })}
                    </div></>}
            </div>
        </div>
    )
}

export default Filtered
