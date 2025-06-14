'use client'

import Image from 'next/image'
import * as S from './styles'
import { useRouter } from 'next/navigation'
import LogoImage from "@/assets/images/logo.png"
import LoginImage from "@/assets/images/login.png"
import Icon from '@/components/icon'
import { useState } from 'react'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  email: z.string().email('Digite um e-mail válido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
})

type FormData = z.infer<typeof schema>

export default function LoginPage() {
  const router = useRouter();
  const [hidePassword, setHidePassword] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema),})

  const handleLogin = (data: FormData) => {
    console.log('Login válido:', data);
    router.push('/events');
  }

  return (
    <S.ContainerWrapper>
        <S.Container>
        <S.FormWrapper>
            <Image src={LogoImage} alt="Logo" width={161} height={25} />
            <S.Title>Bem-vindo de volta</S.Title>
            <S.Subtitle>Entre com sua conta para acessar o painel.</S.Subtitle>
            <S.Form onSubmit={handleSubmit(handleLogin)}>
               <S.InputLabel htmlFor="email">E-mail</S.InputLabel>
              <div>
                <S.Input id="email" placeholder="seunome@seuservidor.com" type="email" {...register('email')} />
                {errors.email && <S.Error>{errors.email.message}</S.Error>}
              </div>
              <S.InputLabel htmlFor="senha">Senha</S.InputLabel>
              <div>
                <S.Input id="senha" placeholder="Digite aqui" type={hidePassword?"password":"text"} {...register('password')}  />
                <button  onClick={()=>setHidePassword(!hidePassword)}>
                  {hidePassword ? <Icon name='closedEye' color='#CC6237' size='md'/> : <Icon name='openEye' color='#CC6237' size='md'/> }
                </button>
               {errors.password && <S.Error>{errors.password.message}</S.Error>}
              </div>
              <S.Button type="submit" onClick={handleSubmit(handleLogin)}>Enviar</S.Button>
            </S.Form>
        </S.FormWrapper>
        <S.ImageWrapper>
            <Image src={LoginImage} alt="Login illustration"  />
        </S.ImageWrapper>
        </S.Container>
     </S.ContainerWrapper>
  )
}
