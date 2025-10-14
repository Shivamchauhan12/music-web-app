"use client"

import { useForm, SubmitHandler } from "react-hook-form"

import React from 'react'

type userInformation = {
  email: string,
  password: string,
  confirmPassword: string
}

export const signup = () => {

  const { register, handleSubmit } = useForm<userInformation>()

  const onSubmit = () => {

  }

  return (
    <div>

      <form onSubmit={handleSubmit(onSubmit)}>

        <input
          type="email"
          placeholder="Enter your username"
          {...register("email", { required: true })}
        />
        <input
          type="password"
          placeholder="Enter your password"
          {...register("password", { required: true })}
        />
        <input
          type="text"
          placeholder="Enter your confirm password"
          {...register("confirmPassword", { required: true })}
        />
        <button type="submit">Sign up</button>

      </form>



    </div>
  )
}
