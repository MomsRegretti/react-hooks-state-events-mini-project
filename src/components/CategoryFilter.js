import React from "react";
import Button from "./Button";

function CategoryFilter({CATEGORIES, onCategoryChange}) {
 
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map(category => {
        return <Button key={category} onCategoryChange={onCategoryChange} CATEGORIES={CATEGORIES} value={category}/>
      })}
    </div>
  );
}

export default CategoryFilter;
