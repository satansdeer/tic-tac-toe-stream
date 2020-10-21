import React, { FC, PropsWithChildren } from 'react'
import { Winner } from './Board'

type ResetScreenProps = {
  winner: Winner;
  onReset(): void;
}


export const ResetScreen: FC<ResetScreenProps> = ({winner, onReset}) => {
  return <>
    <h2>{winner} is a winner</h2>
    <button onClick={onReset}>Restart</button>
  </>
}

