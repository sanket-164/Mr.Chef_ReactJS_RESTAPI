import React, { useEffect, useState } from 'react';
import MealItem from './MealItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader';
import InfiniteLoader from './InfiniteLoader';

function Home(props) {
    let { setTheme, theme } = props;
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);
    document.title = "Mr.Chef";
    const fetchFoods = async () => {
        let food = [];
        const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
        for (let i = 0; i < 6; i++) {
            const response = await fetch(url);
            const json = await response.json();
            if (food.length < 6) {
                food.push(json.meals[0]);
            } else {
                break;
            }
        }
        setFoods(foods.concat(food));
        setLoading(false);
    }

    useEffect(() => {
        fetchFoods();
        const myID = document.getElementById("top-btn-sanket");

        var myScrollFunc = function () {
            var y = window.scrollY;
            if (y >= 50) {
                myID.style.opacity = "1"
            } else {
                myID.style.opacity = "0"
            }
        };

        window.addEventListener("scroll", myScrollFunc);
    }, [])

    return (
        <>
            <div className="d-flex justify-content-center">
                <h1 className={`mt-3 text-${theme === 'dark' ? 'light' : 'dark'}`}>Mr.Chef Recipes</h1>
            </div>
            <div className="container d-flex justify-content-center" id='main-home-container'>
                {loading && <Loader />}
                {(!loading) && <InfiniteScroll
                    dataLength={foods.length}
                    next={fetchFoods}
                    hasMore={foods.length === foods.length}
                    loader={(!loading) && <InfiniteLoader />}
                >
                    <div className=" container row d-flex justify-content-center">
                        {foods.map((food,index) => 
                            ( <div className="col-md-4" key={food.idMeal+index}>
                                <MealItem  id={food.idMeal} title={food.strMeal} img={food.strMealThumb} category={food.strCategory} area={food.strArea} setTheme={setTheme} theme={theme}></MealItem>
                            </div> )
                        )}
                    </div>
                </InfiniteScroll>}
            </div>
            <a href='#navbar-top-sanket' id='top-btn-sanket' className={`btn btn-primary bg-${theme === 'dark' ? 'light text-dark' : 'dark text-light'}`} style={{
                borderRadius: '50%',
                bottom: '2vh',
                right: '2vw',
                width: '6vh',
                height: '6vh',
                position: 'fixed',
                opacity: '0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '2rem',
                transition: 'all 0.5s ease-in-out'
            }}><ion-icon name="arrow-up-outline"></ion-icon>
            </a>
        </>
    )
}

export default Home
