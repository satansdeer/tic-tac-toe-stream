import React, { FC } from "react";
import styled from "styled-components";

const CellWrapper = styled.button`
  background-color: #ffffff;
  margin-bottom: -1px;
  border: none;
  cursor: pointer;
  outline: none;
`;

export type CellValue = "x" | "o" | undefined;

type CellProps = {
  value: CellValue;
  toggle(index: number): void;
  index: number;
};

export const Cell: FC<CellProps> = ({ value, toggle, index }) => {
  return (
    <CellWrapper onClick={() => toggle(index)}>
      {value === "o" ? "O" : value ? "X" : null}
    </CellWrapper>
  );
};
