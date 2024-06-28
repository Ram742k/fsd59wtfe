import React from 'react'
import { useState } from "react";
import userServices from "../services/userServices";
import { Alert } from "bootstrap";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        userServices.login(email, password)
        .then(res => {
            
            alert('login Success')
            setTimeout(() => {
                navigate('/dashboard')
            },500)

        })
        .catch(err => {
            console.log(err)
        })
    }
  return (
    <div>
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                  <div className="card">
                      <div className="card-header">
                          Login
                      </div>
                      <div className="card-body">
                          <form>
                              <div className="mb-3">
                                  <label htmlFor="email" className="form-label">Email</label>
                                  <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="password" className="form-label">Password</label>
                                  <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                              </div>
                              <button onClick={handleSubmit} className="btn btn-primary">Login</button>
                          </form>
                    </div>
                    
                </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Login