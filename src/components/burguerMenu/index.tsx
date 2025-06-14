'use client'

import React, { useState } from 'react'
import * as S from './styles'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import UserImage from "@/assets/images/user.png"
import Icon from '../icon'
import { MENU_ITEMS } from '../sidebar/utils'

export default function BurguerMenu() {
  const router = useRouter()
  const pathName = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const menuSelectedKey = Object.keys(MENU_ITEMS).find(key => MENU_ITEMS[key as keyof typeof MENU_ITEMS].path === pathName) || 'EVENTS'           
  
  const handleLogout = () => { 
    router.push('/login')
  }

  const handleMenuClick = (menuName: keyof typeof MENU_ITEMS) => {
     router.push(MENU_ITEMS[menuName].path);
  };
  
  return (
     <S.Container>
      <S.MobileHeader>
        <S.HamburgerButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span />
          <span />
          <span />
        </S.HamburgerButton>
      </S.MobileHeader>

      {isMenuOpen && (
        <S.MobileMenu>
          {Object.entries(MENU_ITEMS).map(([key, item]) => (
              <div key={item.name} 
                  className={key === menuSelectedKey ? 'active' : 'option'} 
                  onClick={() => handleMenuClick(key as keyof typeof MENU_ITEMS)}>
              <Icon name={item.icon} size={'sm'} color={key === menuSelectedKey ? '#ffffff': '#00000'}/>
              <p>{item.name}</p>
            </div>
          ))}
          <S.InfoUserWrapper >
            
            <div className='option'>
              <Icon name={'profile'} size={'sm'} color={'#00000'}/>
              <p>Alterar dados</p>
            </div>
            <div  className='option' onClick={handleLogout}> 
              <Icon name={'logout'} size={'sm'} color={'#00000'}/>
              <p>Sair</p>
            </div>
          <div className='userInfo'>
              <Image src={UserImage} alt="User" />
              <div>
                <strong>Veronica Ruiz</strong>
                <span>Administrador</span>
              </div>
            </div>
          </S.InfoUserWrapper>
        </S.MobileMenu>

      )}
    </S.Container>
  )
}
