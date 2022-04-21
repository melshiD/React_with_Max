import React from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import { useEffect } from 'react';
import { useState } from 'react';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
  useEffect(() => {
    const fetchMeals = async () => {
      // const response = await fetch('https://react-http-b3bb7-default-rtdb.firebaseio.com/meals');
      const response = await fetch('https://react-http-b3bb7-default-rtdb.firebaseio.com/meals.json');

      const responseData = await response.json();

      const loadedMeals = [];

      for(const key in responseData){
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };
    setTimeout(fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    }), 700);
  }, []);

  if(isLoading) {
    return <section className={classes.mealsLoading}>
      <p>Loading...</p>
    </section>
  }

  if (httpError) {
    return (<section className={classes.mealsError}>
      <p>{httpError}</p>
    </section>
    );
  }

  const mealsList = meals.map((meal) => {
     return(<MealItem 
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price} />)
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealsList}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;