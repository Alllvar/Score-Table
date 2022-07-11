import styled from 'styled-components';

export const Form = styled.form`
  position: absolute;
  top: 100px;
  right: 100px;
  width: 400px;
  display: flex;
  padding: 15px;
  flex-direction: column;
  margin: 50px 0;
  border: 2px solid black;  
  font-size: 25px;
`;

export const ListElement = styled.li`
    font-size: 33px;
  list-style: none;
`;

export const ScoreInput = styled.input`
    width: 35px;
`;

export const ScoreWrap = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Submit = styled.input`
  background-color: white;
  color: black;
  border: 1px solid #555555;
  padding: 16px 32px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: black;
    color: white;
`;