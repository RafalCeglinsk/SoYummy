import React from 'react';

const RecipePreparationFields = ({ recipeData, setRecipeData }) => {
  const handleChange = e => {
    setRecipeData({ ...recipeData, preparation: e.target.value });
  };

  return (
    <div>
      <label>Sposób przygotowania</label>
      <textarea
        name="preparation"
        value={recipeData.preparation}
        onChange={handleChange}
      />
    </div>
  );
};

export default RecipePreparationFields;
