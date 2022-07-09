import styled from 'styled-components';

export const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 50px 0;
`;

export const FormInput = styled.input`
  height: 48px;
  width: 400px;
  padding-left: 15px;
`;

export const Submit = styled.input`
  margin-left: 10px;
  background-color: white;
  color: black;
  border: 1px solid #555555;
  padding: 16px 32px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
`;