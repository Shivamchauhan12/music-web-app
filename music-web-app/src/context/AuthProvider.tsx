"use client"

import React from 'react'
import { SessionProvider } from 'next-auth/react'
import { FunctionComponent,PropsWithChildren } from 'react'

const AuthProvider : FunctionComponent<PropsWithChildren> = ({children}) => {
  return (
    <SessionProvider>
         {children}
    </SessionProvider>
   
  )
}

export default AuthProvider