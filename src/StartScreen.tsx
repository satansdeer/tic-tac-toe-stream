import React, { FC } from 'react'

type StartScreenProps = {
  onStart(): void;
}

export const StartScreen:FC<StartScreenProps> = ({onStart}) => {
  return <button onClick={onStart}>Start</button>
}