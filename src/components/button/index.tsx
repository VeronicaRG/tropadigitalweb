'use client'

import React from 'react'
import * as S from './styles'

type ButtonProps = {
  label: string;
  labelColor?: string;
  fontWeight?: string;
  backgroundColor?: string;
};

export default function Button({ label,labelColor, fontWeight, backgroundColor,  }: ButtonProps) {
  
  return (
    <S.Button 
      style={{
        fontWeight:fontWeight? fontWeight:'500',
        color:labelColor? labelColor:'#000000',
        backgroundColor:backgroundColor? backgroundColor:'#F5F5F5', 
      }}
      >
      {label}
    </S.Button>
  )
}
