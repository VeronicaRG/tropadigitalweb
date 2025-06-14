'use client'

import React from 'react'
import * as S from './styles'
import Button from '../button'
import { BUTTON_INFO, EVENTS_INFO } from './utils'

export default function Table() {
  
  return (
    <S.ContentBox>
      <S.Toolbar>
        <S.SearchBar type="text" placeholder="Buscar eventos" />
        <Button   label='+ Inserir novo' labelColor='#FFFFFF' fontWeight='700' backgroundColor='#CC6237'/>
      </S.Toolbar>

      <S.Table>
        <thead>
          <S.TableRow>
            <S.TableHead>Nome do evento</S.TableHead>
            <S.TableHead>Total de equipes</S.TableHead>
            <S.TableHead>Status</S.TableHead>
            <S.TableHead>Data</S.TableHead>
          </S.TableRow>
        </thead>
        <tbody>
          {EVENTS_INFO.map((item, idx) => (
            <S.TableRow>
              <S.TableCell>{item.name}</S.TableCell>
              <S.TableCell>{item.teamNumber}</S.TableCell>
              <S.TableCell>
                <S.StatusDot style={{backgroundColor: item.status?  '#4DEF00': '#EF0000' }}/>
                { item.status? 'Ativo': 'Inativo'}
              </S.TableCell>
              <S.TableCell>{item.data}</S.TableCell>
            </S.TableRow>
          ))}
        </tbody>
      </S.Table>

      <S.Pagination>
        {BUTTON_INFO.map((item, idx) => (
          <Button key={idx} label={item.label} labelColor={item.labelColor} backgroundColor={item.backgroundColor}/>
        ))}
      </S.Pagination>
    </S.ContentBox>
  )
}
