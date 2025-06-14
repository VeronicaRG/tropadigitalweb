'use client'

import React from 'react'
import * as S from './styles'
import Sidebar from '@/components/sidebar'
import Header from '@/components/header'

export default function InscriptionsPage() {
  
  return (
    <S.Container>
     <Sidebar/>
      <S.MainContent>
        <Header userName="Kaique Stec" pageName="Inscrições"/>
      </S.MainContent>
    </S.Container>
  )
}
