'use client'

import React from 'react'
import * as S from './styles'
import Sidebar from '@/components/sidebar'
import Table from '@/components/table'
import Header from '@/components/header'

export default function EventsPage() {
  
  return (
    <S.Container>
     <Sidebar/>
      <S.MainContent>
        <Header userName="Kaique Stec" pageName="Todos os eventos"/>
          <Table/>
      </S.MainContent>
    </S.Container>
  )
}
