import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FoodItem from './FoodItem';
import Loader from './Loader';

function Filtered(props) {
    let { setTheme, theme } = props;
    const location = useLocation();
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    document.title = `Mr.Chef - ${location.state.category !== '' ? location.state.category : location.state.area}`;

    // console.log(location.state.category !== '' ? 'c=' + location.state.category : 'a=' + location.state.area);
    const fetchFoods = async () => {
        let food = [];
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?${location.state.category !== '' ? 'c=' + location.state.category : 'a=' + location.state.area}`;
        const response = await fetch(url);
        const json = await response.json();
        food.push(json.meals);
        setFoods(food[0]);
        setLoading(false);
        // console.log(foods);
    }

    useEffect(() => {
        fetchFoods();
    }, [fetchFoods])

    return (
        <div>
            <div className="container home-container">
                {loading && <Loader />}
                {(!loading) && <>
                    <div><h1 className={`text-${theme === 'dark' ? 'light' : 'dark'}`}>{location.state.category !== '' ? location.state.category : location.state.area} Recipes</h1></div>
                    <div className="row d-flex justify-content-center">
                        {foods.map((food) => {
                            return <div className="col-md-4">
                                <FoodItem key={food.idMeal} id={food.idMeal} title={food.strMeal} img={food.strMealThumb} category={location.state.category} area={location.state.area} setTheme={setTheme} theme={theme}></FoodItem>
                            </div>
                        })}
                    </div></>}
            </div>
        </div>
    )
}

export default Filtered
