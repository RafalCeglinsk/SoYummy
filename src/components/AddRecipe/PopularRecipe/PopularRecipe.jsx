import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPopularRecipes } from "#redux/recipes/popular/operations";
import { selectPopularRecipes } from "#redux/recipes/popular/selectors";
import {
  PopularRecipeContainer,
  RecipeCard,
  RecipeImage,
  RecipeTitle,
  RecipeDescription,
  RecipeCardContainer,
  PopularRecipeTitle,
  RecipeInfo,
  StyledLink,
} from "./PopularRecipe.styled";

const PopularRecipe = () => {
  const recipes = useSelector(selectPopularRecipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularRecipes());
  }, [dispatch]);

  return (
    <PopularRecipeContainer>
      <PopularRecipeTitle>Popular Recipes</PopularRecipeTitle>
      <RecipeCardContainer>
        {recipes.length > 0
          ? recipes.slice(0, 4).map((recipe, _id) => {
              return (
                <RecipeCard key={recipe.title}>
                  <StyledLink to={`/recipes/${recipe._id}`}>
                    <RecipeImage src={recipe.thumb} alt={recipe.title} />
                    <RecipeInfo>
                      <RecipeTitle>{recipe.title}</RecipeTitle>
                      <RecipeDescription>
                        {recipe.description.length > 100
                          ? recipe.description.substring(0, 100) + "..."
                          : recipe.description}
                      </RecipeDescription>
                    </RecipeInfo>
                  </StyledLink>
                </RecipeCard>
              );
            })
          : null}
      </RecipeCardContainer>
    </PopularRecipeContainer>
  );
};

export default PopularRecipe;
