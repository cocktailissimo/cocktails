import React from 'react';
import cocktails from '../data/cocktails.json';

export default function FormCocktailSeason() {
    const actualDate = new Date();
    const actualMonth = actualDate.getMonth();

    const winter = [0, 1, 2];
    const spring = [3, 4, 5];
    const summer = [6, 7, 8];
    const fall = [9, 10, 11];

    const isWinter = () => {
        return winter.includes(actualMonth);
    }

    const isSpring = () => {
        return spring.includes(actualMonth);
    }

    const isSummer = () => {
        return summer.includes(actualMonth);
    }

    const isFall = () => {
        return fall.includes(actualMonth);
    }
    const season = () => {
        switch(true) {
            case isWinter(actualMonth):
                return 'hiver';
            case isSpring(actualMonth):
                return 'printemps';
            case isSummer(actualMonth):
                return 'été';      
            case isFall(actualMonth):
                return 'automne';   
            default:
                return '';
        }
    }

    const cocktailResults = cocktails.filter(cocktail => cocktail.saison === season());
    const randomCocktail = Math.floor((Math.random() * cocktailResults.length) + 1);
    const cocktailRandom = cocktailResults[randomCocktail-1];

  return (
    <>
        Highlight cocktail
        <div><strong>{cocktailRandom.nom}</strong></div>
        <div>{cocktailRandom.remarques}</div>
        {cocktailRandom.recette.map((recettecocktail) => {
            return (
                <div key={recettecocktail.etape1}>
                    <div>{recettecocktail.etape1}</div>
                    <div>{recettecocktail.etape2}</div>
                    <div>{recettecocktail.etape3}</div>
                </div>
            );
        })}
    </> 
  );
}
