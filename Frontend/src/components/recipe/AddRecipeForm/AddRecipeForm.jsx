import React, { useState } from 'react';
import styled from 'styled-components';
import RecipeDescriptionFields from '../RecipeDescriptionFields/RecipeDescriptionFields';
import RecipeIngredientsFields from '../RecipeIngredientsFields/RecipeIngredientsFields';
import RecipePreparationFields from '../RecipePreparationFields/RecipePreparationFields';

// Stylowanie formularza
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const AddRecipeForm = () => {
  const [recipeData, setRecipeData] = useState({
    title: '',
    description: '',
    ingredients: [],
    preparation: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Przesłane dane przepisu:', recipeData);
    // Tutaj możesz dodać logikę do wysyłania danych do backendu
  };

  return (
    <Form onSubmit={handleSubmit}>
      <RecipeDescriptionFields
        recipeData={recipeData}
        setRecipeData={setRecipeData}
      />
      <RecipeIngredientsFields
        recipeData={recipeData}
        setRecipeData={setRecipeData}
      />
      <RecipePreparationFields
        recipeData={recipeData}
        setRecipeData={setRecipeData}
      />
      <SubmitButton type="submit">Dodaj przepis</SubmitButton>
    </Form>
  );
};

export default AddRecipeForm;
