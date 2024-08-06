import React from 'react';

import { styled } from 'styled-components';

const Chip = styled.span`
  padding: 0.6rem 1.3rem;
  background-color: #66b5ff7a; 
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const CustomChip = ({ children }) => {
  return (
    <Chip>{children}</Chip>
  )
}
