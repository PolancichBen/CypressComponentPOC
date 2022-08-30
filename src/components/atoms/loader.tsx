import React, { FC } from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
`;

const Spinner = styled.div<{ selfAlign: boolean }>`
  border-top: 1px solid black;
  border-radius: 50%;
  animation: ${rotate} 2s linear infinite;
  width: 60px;
  height: 60px;
  ${({ selfAlign }) => selfAlign && `align-self: center`};
`;

interface LoaderProps {
  isLoading: boolean;
  selfAlign?: boolean;
  children?: any;
}

export const Loader: FC<LoaderProps> = ({
  isLoading,
  selfAlign = false,
  children,
}) => {
  return isLoading ? <Spinner data-cy="loader" selfAlign={selfAlign} /> : <>{children}</>;
};
