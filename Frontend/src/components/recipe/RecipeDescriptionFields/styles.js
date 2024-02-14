import styled from 'styled-components';

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  padding-bottom: 8px;
  border-bottom: 1px solid #ccc;
  border-top: none;
  border-left: none;
  border-right: none;
`;

export const Textarea = styled.textarea`
  border: 1px solid #ccc;
  border-top: none;
  border-left: none;
  border-right: none;
`;

export const DisabledInput = styled.input`
  flex: 1;
  background-color: white;
  border: none;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;

  border-bottom: 1px solid #ccc;
`;

export const customSelectStyles = {
  control: provided => ({
    ...provided,
    border: 'none',
    fontSize: '12px',
    '&:hover': { borderColor: '#aaa' }, // zmiana koloru ramki przy najechaniu
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'white' : 'black',
    backgroundColor: state.isSelected ? '#007bff' : 'white',
    fontSize: '12px',
    '&:hover': {
      backgroundColor: '#007bff',
      color: 'white',
    },
  }),
  placeholder: provided => ({
    ...provided,
    color: '#ccc',
  }),
  singleValue: provided => ({
    ...provided,
    color: 'black',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    color: '#ccc',
    '&:hover': {
      color: 'black',
    },
  }),
  clearIndicator: provided => ({
    ...provided,
    color: '#ccc',
    '&:hover': {
      color: 'black',
    },
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
};
