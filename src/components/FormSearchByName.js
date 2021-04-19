import React, { useState } from 'react';
import CocktailGridFull from './CocktailGridFull';
import Fuse from 'fuse.js';
import Search from './Search';
import cocktails from '../data/cocktails.json';

export default function FormSearchByIngredients() {
  const [querySearch, setQuerySearch] = useState('');
  const cocktailKeys = ["nom"];
  const cocktailsFuse = new Fuse(cocktails, {
    keys: cocktailKeys,
    includeScore: true,
    useExtendedSearch: true,
    location: 0,
    threshold:0.5,
    distance: 100,
    minMatchCharLength: 3,
  })

  const pattern = `${querySearch}`;
  const results = cocktailsFuse.search(pattern);
  const cocktailResults = results.length > 0 ? results.map(result => result.item) : cocktails;
  const isResults = results.length > 0;

  function handleOnSearch({ currentTarget = {} }) {
    const { value } = currentTarget;
    setQuerySearch(value);
  }

  return (
    <>
      <form autoComplete="off">
          <Search 
            handleOnSearch={handleOnSearch}
            querySearch={querySearch}
            id="nameFilter"
            label="Recherche par nom"
            placeholderSearch="ex: Pink Lady"
          />
          {isResults &&  (
            <CocktailGridFull           
            cocktailResults={cocktailResults} 
            pattern={pattern} />
          )}
        </form>
    </>
  );
}
