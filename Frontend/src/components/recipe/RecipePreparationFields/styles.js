import styled from 'styled-components';

export const PreparationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PreparationTitle = styled.h3`
  color: #333;
  font-family: 'Arial', sans-serif;
  margin-bottom: 15px;
`;

export const PreparationTextarea = styled.textarea`
  font-family: 'Arial', sans-serif;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 150px;
  resize: vertical;
  margin-bottom: 20px;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;
