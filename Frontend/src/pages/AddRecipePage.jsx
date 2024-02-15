import React from 'react';
import AddRecipeForm from '../components/recipe/AddRecipeForm/AddRecipeForm';
import PopularRecipe from 'components/PopularRecipe/PopularRecipe';

const AddRecipePage = () => {
  return (
    <div>
      <h1 style={{ padding: '16px' }}>Add recipe</h1>
      <AddRecipeForm />
      <PopularRecipe />
    </div>
  );
};

export default AddRecipePage;
