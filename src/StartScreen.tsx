import React, { FC } from 'react'
import styled from 'styled-components'

const StartButton = styled.button`
  border: none;
  font-size: 2rem;
  cursor: pointer;
  font-weight: bold;
  color: #333;
  background: none;
`

type StartScreenProps = {
  onStart(): void;
}

export const StartScreen:FC<StartScreenProps> = ({onStart}) => {
  return <StartButton onClick={onStart}>Start</StartButton>
}