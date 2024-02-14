import styled from 'styled-components';

export const IngredientsContainer = styled.div`
  margin-top: 20px;
`;

export const IngredientsHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SizeGroup = styled.div`
  display: flex;
  justify-content: center;
`;

export const IngredientField = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
`;

export const IngredientInput = styled.input`
  padding: 10px;
  margin-right: 0px;
  border: none;
  border-radius: 4px 0 0 4px;
  width: 15px;
  background-color: #d9d9d9;
`;

export const AddIngredientButton = styled.button`
  background-color: #4caf50; // Przycisk dodawania składnika
  color: white;
  padding: 10px 15px;
  height: 50%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: center;

  &:hover {
    background-color: #45a049;
  }
`;

export const RemoveIngredientButton = styled.button`
  background-color: #f44336; // Przycisk usuwania składnika
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;

export const unitSelect = {
  control: provided => ({
    ...provided,
    width: '70px',
    border: 'none',
    boxShadow: 'none',
    backgroundColor: '#D9D9D9',
    borderRadius: '0 4px 4px 0',
    '&:hover': {
      border: '1px solid #aaa',
    },
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
};

export const ingredientSelect = {
  control: provided => ({
    ...provided,
    border: 'none',
    boxShadow: 'none',
    width: '200px',
    borderRadius: '0',
    '&:hover': {
      border: '1px solid #aaa',
    },
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
};
