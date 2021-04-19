import React from 'react';
import '../App.css';

export default function Search({handleOnSearch, querySearch, id, label, placeholderSearch}) {
  return (
<>
    <label htmlFor={id} id="ariaLabel">{label}:</label>
    <div 
    className="dropdownhWrapper" 
    >
        <input 
            type="text" 
            id={id} 
            value={querySearch} 
            onChange={handleOnSearch} 
            placeholder={placeholderSearch}
        />
    </div>
</>
  );
}
