import React, { useState } from "react";
import Notiflix from "notiflix";
import { useDispatch, useSelector } from "react-redux";

import { RecipeDescriptionFields } from "../RecipeDescriptionFields/RecipeDescriptionFields";
import { addRecipe } from "#redux/recipes/addRecipe/operations";
import { SocialMediaBar } from "../../SocialMediaBar/SocialMediaBar";
import { selectToken } from "#redux/auth/selectors";
import {
  Form,
  SubmitButton,
  Main,
  Right,
  Container,
  StyledH2,
  FollowUs,
} from "./AddRecipeForm.styled";

import RecipePreparationFields from "../RecipePreparationFields/RecipePreparationFields";
import RecipeIngredientsFields from "../RecipeIngredientsFields/RecipeIngredientsFields";
import PopularRecipe from "../PopularRecipe/PopularRecipe";

const AddRecipeForm = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const [recipeData, setRecipeData] = useState({
    recipeImg: null,
    title: "",
    category: "",
    description: "",
    time: "",
    ingredients: [],
    instructions: "",
  });

  const requiredFields = [
    "title",
    "category",
    "description",
    "time",
    "ingredients",
    "instructions",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isFormValid = true;

    requiredFields.forEach((field) => {
      if (field === "ingredients" && recipeData[field].length === 0) {
        Notiflix.Notify.failure("Please add atleast 1 ingredient");
        isFormValid = false;
      } else if (!recipeData[field] || !recipeData[field].toString().trim()) {
        Notiflix.Notify.failure(`Field ${field} is required.`);
        isFormValid = false;
      }
    });

    if (!recipeData.recipeImg) {
      Notiflix.Notify.failure("Photo is required");
      isFormValid = false;
    }

    if (!isFormValid) return;

    const formData = new FormData();
    formData.append("title", recipeData.title);
    formData.append("category", recipeData.category);
    formData.append("description", recipeData.description);
    formData.append("time", recipeData.time);
    recipeData.ingredients.forEach((ingredient, index) => {
      formData.append(`ingredients[${index}][id]`, ingredient.id);
      formData.append(`ingredients[${index}][measure]`, ingredient.measure);
    });
    formData.append("instructions", recipeData.instructions);
    if (recipeData.recipeImg) {
      formData.append("recipeImg", recipeData.recipeImg);
    }
    dispatch(addRecipe({ recipeData: formData, token: token }));
    if (isFormValid) {
      setRecipeData({
        title: "",
        category: "",
        description: "",
        time: "",
        ingredients: [],
        instructions: "",
        recipeImg: null,
      });
      return Notiflix.Notify.success("Recipe added successfully");
    }
  };

  return (
    <Container>
      <Main>
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
            <SubmitButton type="submit">Add recipe</SubmitButton>
   
        </Form>

        <Right>
          <FollowUs>
            <StyledH2>Follow Us</StyledH2>
            <SocialMediaBar />
          </FollowUs>
          <PopularRecipe></PopularRecipe>
        </Right>
      </Main>
    </Container>
  );
};

export default AddRecipeForm;
