'use client'
import { ChangeEvent, FormEvent, useState } from 'react'

export const useSignUpForm = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(userData)
  }

  return {
    handleChange,
    handleSubmit
  }
}
