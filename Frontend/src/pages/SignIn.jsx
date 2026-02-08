import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signInStart, signInSuccess, signInFailure } from '../user/userSlice'
import OAuth from '../components/OAuth'

export default function SignIn() {
  const [formData, setFormData] = useState({})
  const [success, setSuccess] = useState(null)
  const { loading, error } = useSelector((state)=> state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart())
      const res = await fetch('/core-api-auth/v3/SignIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      console.log("sign up response is :", data)
      if (data.mboolean == true) {
        dispatch(signInFailure(data.emessage))
        return
      }
      dispatch(signInSuccess(data))
      setSuccess(data.message)
      setTimeout(() => {
        setSuccess(null)
      }, 1000)
      navigate('/')
    } catch (error) {
      dispatch(signInFailure(data.emessage))
    }
  }
  console.log(formData)
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="email" placeholder='Enter Email' id='email' className="border p-3 rounded-lg" onChange={handleChange} />
        <input type="password" placeholder='Enter Password' id='password' className="border p-3 rounded-lg" onChange={handleChange} />
        <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 cursor-pointer">
          {loading ? "loading...." : "Sign In"}
        </button>
        <OAuth/>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Don't have an account?</p>
        <Link to='/SignUp'>
          <span className="text-blue-700">Sign Up</span>
        </Link>
      </div>
      {error ? <p className='text-red-500 mt-5'>{error}</p> : success && <p className='text-green-700 mt-5'>{success}</p>}
    </div>
  )
}
