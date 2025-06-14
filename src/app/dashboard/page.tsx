'use client'

import React from 'react'
import * as S from './styles'
import Sidebar from '@/components/sidebar'
import Header from '@/components/header'

export default function DashboardPage() {
  
  return (
    <S.Container>
     <Sidebar/>
      <S.MainContent>
        <Header userName="Kaique Stec" pageName="Dashboard"/>
      </S.MainContent>
    </S.Container>
  )
}
