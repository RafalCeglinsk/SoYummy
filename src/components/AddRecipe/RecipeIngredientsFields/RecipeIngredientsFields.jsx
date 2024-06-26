import React, { useEffect } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";

import { getIngredients } from "#redux/ingredients/operations";
import { selectIngredients } from "#redux/ingredients/selectors";
import {
  IngredientsContainer,
  IngredientsHeader,
  SizeGroup,
  IngredientInput,
  AddIngredientButton,
  RemoveIngredientButton,
  IngredientField,
  unitSelect,
  ingredientSelect,
  Span,
} from "./RecipeIngredientsFields.styled";

const unitOptions = [
  { value: "tbs", label: "tbs" },
  { value: "tsp", label: "tsp" },
  { value: "kg", label: "kg" },
  { value: "g", label: "g" },
];

const RecipeIngredientsFields = ({ recipeData, setRecipeData }) => {
  const ingredients = useSelector(selectIngredients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const addIngredient = () => {
    const newIngredient = { id: "", measure: "" };
    setRecipeData({
      ...recipeData,
      ingredients: [...recipeData.ingredients, newIngredient],
    });
  };

  const removeIngredient = (index) => {
    const newIngredients = recipeData.ingredients.filter((_, i) => i !== index);
    setRecipeData({ ...recipeData, ingredients: newIngredients });
  };

  const handleChange = (index, field, value) => {
    const newIngredients = recipeData.ingredients.map((ingredient, i) => {
      if (i === index) {
        let newMeasure = ingredient.measure;
        if (field === "quantity") {
          newMeasure = `${value} ${ingredient.measure.split(" ")[1]}`;
        } else if (field === "unit") {
          newMeasure = `${ingredient.measure.split(" ")[0]} ${value}`;
        }
        return { ...ingredient, measure: newMeasure, [field]: value };
      }
      return ingredient;
    });
    setRecipeData({ ...recipeData, ingredients: newIngredients });
  };

  const handleSelectNameChange = (index, selectedOption) => {
    handleChange(index, "id", selectedOption.value);
  };

  const handleSelectChange = (index, value) => {
    handleChange(index, "unit", value.value);
  };

  return (
    <IngredientsContainer>
      <IngredientsHeader>
        <h2>Ingredients</h2>
        <AddIngredientButton type="button" onClick={addIngredient}>
          Add ingredients
        </AddIngredientButton>
      </IngredientsHeader>
      {recipeData.ingredients.map((ingredient, index) => (
        <IngredientField key={index}>
          <SizeGroup>
            <Select
              styles={ingredientSelect}
              options={ingredients}
              value={ingredients.find(
                (option) => option.value === ingredient.id
              )}
              onChange={(selectedOption) =>
                handleSelectNameChange(index, selectedOption)
              }
              placeholder="Select..."
            />
            <Span>
              <IngredientInput
                type="text"
                placeholder="0"
                value={ingredient.measure.split(" ")[0]}
                onChange={(e) =>
                  handleChange(index, "quantity", e.target.value)
                }
              />
              <Select
                styles={unitSelect}
                options={unitOptions}
                value={unitOptions.find(
                  (option) => option.value === ingredient.measure.split(" ")[1]
                )}
                onChange={(value) => handleSelectChange(index, value)}
              />
            </Span>
          </SizeGroup>
          <RemoveIngredientButton onClick={() => removeIngredient(index)}>
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0625 4.4375L3.9375 14.5625"
                stroke="#333333"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.0625 14.5625L3.9375 4.4375"
                stroke="#333333"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </RemoveIngredientButton>
        </IngredientField>
      ))}
    </IngredientsContainer>
  );
};

export default RecipeIngredientsFields;
