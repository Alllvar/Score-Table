import styled from 'styled-components';

export const Table = styled.table`
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  min-width: 1000px;
  table-layout: fixed;
`;

export const Th = styled.th`
  padding: .625em;
  text-align: center;
  font-size: 25px;
`;

export const Td = styled.td`
  padding: .625em;
  text-align: center;
  font-size: 20px;
`;

export const Tr = styled.tr`
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: .35em;
  
`;

export const CloseButton = styled.button`
  font-size: 40px;
  font-weight: bold;
  color: #f44336;
  cursor: pointer;
  border: none;
  background: #f8f8f8;
`;
