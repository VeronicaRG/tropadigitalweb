'use client'

import React, { useState } from 'react'
import * as S from './styles'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import LogoImage from "@/assets/images/logo.png"
import UserImage from "@/assets/images/user.png"
import Icon from '../icon'
import { MENU_ITEMS } from './utils'
import BurguerMenu from '../burguerMenu'

export default function Sidebar() {
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
    <>
      <S.Sidebar>
        <Image src={LogoImage} alt="Logo" width={161} height={25} style={{marginBottom: 30}}/>
        <S.MenuWrapper>
        <nav>
            <h1>MENU</h1>
          <ul>
            {Object.entries(MENU_ITEMS).map(([key, item]) => (
              <>
              <li 
                key={item.name} 
                className={key === menuSelectedKey ? 'active' : ''} 
                onClick={() => handleMenuClick(key as keyof typeof MENU_ITEMS)}
                >
                <Icon name={item.icon}  size={'sm'} color={key === menuSelectedKey ? '#ffffff': '#00000'}/>
                <h1>{item.name}</h1>
              </li>
                </>
            ))}
          </ul>
        </nav>
        </S.MenuWrapper>
          <S.InfoUserWrapper >
            <div className='userInfo'>
              <Image src={UserImage} alt="User" />
              <div>
                <strong>Veronica Ruiz</strong>
                <span>Administrador</span>
              </div>
            </div>
            <div className='option'>
              <Icon name={'profile'} size={'sm'} color={'#00000'}/>
              <p>Alterar dados</p>
            </div>
            <div  className='option' onClick={handleLogout}> 
              <Icon name={'logout'} size={'sm'} color={'#00000'}/>
              <p>Sair</p>
            </div>
          </S.InfoUserWrapper>
      </S.Sidebar>
      <BurguerMenu/>
    </>
  )
}
