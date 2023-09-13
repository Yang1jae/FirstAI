import React, { useState } from 'react';
import categoriesData from './categories.json';


const boxStyle = {
  width: "300px",
  paddingLeft: "20px",
  borderStyle: "solid",
  borderWidth: "4px",
  borderColor: "#8000FF"
};


function CategoryList() {
  const [categories, setCategories] = useState(categoriesData);

  return (
    <div style={boxStyle}>
      {Object.entries(categories).map(([category, subCategories]) => (
        <div key={category}>
          <h2>{category}</h2>
          <ul>
            {subCategories.map((subCategory, index) => {
              const subCategoryName = Object.keys(subCategory)[0];
              const subCategoryItems = subCategory[subCategoryName];

              return (
                <li key={index}>
                  <strong>{subCategoryName}</strong>
                  <ul>
                    {subCategoryItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;