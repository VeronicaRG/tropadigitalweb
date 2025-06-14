'use client'

import React from 'react'
import * as S from './styles'
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'

export default function TeamsPage() {
  
  return (
    <S.Container>
     <Sidebar/>
      <S.MainContent>
        <Header userName="Kaique Stec" pageName="Equipes"/>
      </S.MainContent>
    </S.Container>
  )
}
