import MealItem from './meal-item';
import clasess from './meals-grid.module.css'
function MealsGrid({meals}) {
    return ( 
        <ul className={clasess.meals}>
          {meals.map((meal) => <li key={meal.id}>
            <MealItem {...meal} /> </li>)}
        </ul>
     );
};

export default MealsGrid;