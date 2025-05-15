import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function GetMeal() {
    const meals = await  getMeals();
    return  <MealsGrid meals={meals}/>
}


function Meals() {

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}> by you </span>{" "}
     
        </h1>
        <p>Choose your favorite recipes and cook it yourself.</p>
        <p className={classes.cta}>
            <Link href='/meals/share'> Share your favorite recipes</Link>
        </p>
      </header>
      <main className={classes.main}>
       <Suspense fallback={ <p className={classes.loading}>Loading meals</p>}>
         <GetMeal />
       </Suspense>
      </main>
    </>
  );
}

export default Meals;
