import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OAuth from '../components/OAuth'

export default function SignUp() {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const res = await fetch('/core-api-auth/v3/SignUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      console.log("sign up response is :", data)
      if (data.mboolean == true) {
        setLoading(false)
        setError(data.emessage)
        setTimeout(() => {
          setError(null)
        }, 1000)
        return
      }
      setError(null)
      setLoading(false)
      setSuccess(data.message)
      setTimeout(() => {
        setSuccess(null)
      }, 1000)
      navigate('/SignIn')
    } catch (error) {
      setLoading(false)
      setError(error.message)
    }
  }
  console.log(formData)
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" placeholder='Enter Username' id='username' className="border p-3 rounded-lg" onChange={handleChange} />
        <input type="email" placeholder='Enter Email' id='email' className="border p-3 rounded-lg" onChange={handleChange} />
        <input type="password" placeholder='Enter Password' id='password' className="border p-3 rounded-lg" onChange={handleChange} />
        <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 cursor-pointer">
          {loading ? "loading...." : "Sign Up"}
        </button>
        <OAuth/>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to='/SignIn'>
          <span className="text-blue-700">Sign In</span>
        </Link>
      </div>
      {error ? <p className='text-red-500 mt-5'>{error}</p> : success && <p className='text-green-700 mt-5'>{success}</p>}
    </div>
  )
}
