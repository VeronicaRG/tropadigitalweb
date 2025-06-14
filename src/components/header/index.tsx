'use client'

import React from 'react'
import * as S from './styles'
import Icon from '../icon'

export default function Header({userName, pageName}: {userName?: string, pageName?: string}) {
  
  return (
    <S.Header>
      <p>Bem vindo de volta, <strong>{userName}</strong></p>
      <div>
        <Icon name={'leftArrow'} size={'md'} color={'#FEA501'}/> 
        <S.Title>{pageName}</S.Title>
      </div>
    </S.Header>
  )
}