import React from 'react';
// import CocktailGrid from '../components/CocktailGrid';
// import HighlightCocktail from '../components/HighlightCocktail';
// import Fuse from 'fuse.js';
// import Search from '../components/Search';
// import AlcoolCheckbox from '../components/AlcoolCheckbox';
// import WithoutAlcoolCheckbox from '../components/WithoutAlcoolCheckbox';
// import cocktails from '../data/cocktails.json';
import FormSearchByIngredients from '../components/FormSearchByIngredients';
import FormCocktailsAlcool from '../components/FormCocktailsAlcool';
import FormCocktailsSeason from '../components/FormCocktailsSeason';
import FormSearchByName from '../components/FormSearchByName';

export default function Home() {
  return (
    <>
          <FormCocktailsSeason/>
          <FormCocktailsAlcool />
          <FormSearchByIngredients />
          <FormSearchByName />
    </>
  );
}
