import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  StyledIngridientsHeader,
  StyledIngridientsItem,
  StyledIngrsHeadThumb,
  StyledIngridientsContainer,
  StyledImageCardThumb,
  StyledImage,
  StyledQuantity,
  StyledFlexRow,
  StyledFlexQuantity,
  StyledListContainerIngridient,
  EmptyStyled,
  PictrueContainerStyled,
  StyledCloseIcon,
} from "./IndegredientsShoppingListStyled.js";
import {
  deleteShopping,
  getShopping,
} from "../../redux/shoppingList/operations.js";
import vegetableBasket from "../../images/IndegredientsShoppingList/vegetableBasket.jpg";
import vegetableBasket2x from "../../images/IndegredientsShoppingList/vegetableBasket2x.jpg";
import { selectToken } from "../../redux/auth/selectors.js";
import { selectShoppingList } from "../../redux/shoppingList/selectors.js";

const IngredientsShoppingList = () => {
  const token = useSelector(selectToken);
  const shoppingItems = useSelector(selectShoppingList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShopping(token));
  }, [token, dispatch]);

  const deleteButton = (item) => {
    const credentials = {
      ingredientId: item.ingredientId._id,
      measure: item.measure,
    };

    dispatch(deleteShopping({ token, ...credentials }));
  };
  return (
    <StyledIngridientsContainer>
      {shoppingItems.isLoading ? null : (
        <>
          {shoppingItems.length > 0 && (
            <StyledIngridientsHeader>
              <h3>Product</h3>
              <StyledIngrsHeadThumb>
                <p>Number</p>
                <p>Remove</p>
              </StyledIngrsHeadThumb>
            </StyledIngridientsHeader>
          )}
          <StyledListContainerIngridient>
            {shoppingItems.length === 0 ? (
              <PictrueContainerStyled>
                <picture>
                  <source
                    srcSet={`${vegetableBasket}, ${vegetableBasket2x} 2x`}
                    media="(max-width: 767px)"
                    sizes="(min-width: 259px) 259px, 100vw"
                  />
                  <source
                    srcSet={`${vegetableBasket}, ${vegetableBasket2x} 2x`}
                    media="(min-width: 768px)"
                    sizes="(min-width: 498px) 498px, 100vw"
                  />
                  <img src={vegetableBasket} alt="No recipe" />
                </picture>
                <EmptyStyled>Shopping list is empty</EmptyStyled>
              </PictrueContainerStyled>
            ) : (
              <>
                {shoppingItems.map((item) => {
                  console.log(item);
                  return (
                    <StyledIngridientsItem key={item._id}>
                      <StyledImageCardThumb>
                        <StyledImage
                          src={item.ingredientId.thb}
                          alt={item.ingredientId.desc}
                          height="60"
                        />
                        <p>{item.ttl}</p>
                      </StyledImageCardThumb>
                      <StyledFlexQuantity>
                        <StyledFlexRow>
                          {item.measure &&
                            item.measure.split("/r/n").map((el, index) => (
                              <StyledQuantity key={index}>
                                <p>{el}</p>
                                <StyledCloseIcon
                                  onClick={() => deleteButton(item)}
                                >
                                  Delete
                                </StyledCloseIcon>
                              </StyledQuantity>
                            ))}
                        </StyledFlexRow>
                      </StyledFlexQuantity>
                    </StyledIngridientsItem>
                  );
                })}
              </>
            )}
          </StyledListContainerIngridient>
        </>
      )}
    </StyledIngridientsContainer>
  );
};

export default IngredientsShoppingList;
