'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation';


import {FiHome,SlSocialGoogle } from '../assets/icons/vander';
import {FaSquareFacebook} from 'react-icons/fa6';
import Alert from 'react-bootstrap/Alert';
import axios from "axios";

export default function Login() {
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            var config = {
              headers: {
                'Content-Type': 'application/json'
              }
            };
        
            var data = {
              "email": email,
              "password": password
            };
            
            var url = '/api/auth';
        
            axios.post(url, data, config)
            .then(async (res) => {
              setLoading(false);
              if(res.data.success) {
                localStorage.setItem('userDetails', JSON.stringify(res.data.user));
                router.push('/doctor-appointment');
              }
            })
            .catch(error => {
              console.log(error);
              
              if (error.response) {
                setLoading(false);
                setError(error.response.data.message);
              } else if (error.request) {
                console.log(error.request);
                setLoading(false);
                setError('Problem signing in. Please try later!');
              } else {
                setLoading(false);
                setError('Problem signing in. Please try later!');
              }
            });
            
          } catch (error) {
            setLoading(false);
            console.log(error);
          }
    };

    return(
        <>
        <div className="back-to-home rounded d-none d-sm-block">
            <Link href="/" className="btn btn-icon btn-primary"><FiHome className="icons"/></Link>
        </div>

        
        <section className="bg-home d-flex bg-light align-items-center" style={{backgroundImage:`url('/images/bg/bg-lines-one.png')`, backgroundPosition:'center'}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8">
                        <Image src='/images/WS-Logo-Main.png' width={115} height={22} className="mx-auto d-block" alt=""/>
                        <div className="card login-page shadow mt-4 rounded border-0">
                            <div className="card-body">
                                <h4 className="text-center">Sign In</h4>  
                                <form onSubmit={(e) => loginUser(e)} className="login-form mt-4">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                <input type="email" className="form-control" placeholder="Email" name="email" onChange={e => setEmail(e.target.value)} value={email} required=""/>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label className="form-label">Password <span className="text-danger">*</span></label>
                                                <input type="password" className="form-control" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} required=""/>
                                            </div>
                                        </div>

                                        {
                                            error?.length > 0 ? (
                                                <div className="col-lg-12">
                                                    <div className="mb-3">
                                                        <Alert variant="danger">
                                                            {error}
                                                        </Alert>
                                                    </div>
                                                </div>
                                            ) : (
                                                null
                                            )
                                        }

                                        {/* <div className="col-lg-12">
                                            <div className="d-flex justify-content-between">
                                                <div className="mb-3">
                                                    <div className="form-check">
                                                        <input className="form-check-input align-middle" type="checkbox" value="" id="remember-check"/>
                                                        <label className="form-check-label" htmlFor="remember-check">Remember me</label>
                                                    </div>
                                                </div>
                                                <Link href="/forgot-password" className="text-dark h6 mb-0">Forgot password ?</Link>
                                            </div>
                                        </div> */}
                                        <div className="col-lg-12 mb-0">
                                            <div className="d-grid">
                                                {
                                                    loading ? (
                                                        <button className="btn btn-primary" style={{ alignItems: 'center' }} disabled>
                                                            <div className="loader"></div>
                                                        </button>
                                                    ) : (
                                                        <button className="btn btn-primary">Sign in</button>
                                                    )
                                                }
                                            </div>
                                        </div>

                                        {/* <div className="col-lg-12 mt-3 text-center">
                                            <h6 className="text-muted">Or</h6>
                                        </div>
                                        
                                        <div className="col-6 mt-3">
                                            <div className="d-grid">
                                                <Link href="#" className="btn btn-soft-primary"><FaSquareFacebook className="mb-0"/> Facebook</Link>
                                            </div>
                                        </div>
                                        
                                        <div className="col-6 mt-3">
                                            <div className="d-grid">
                                                <Link href="#" className="btn btn-soft-primary"><SlSocialGoogle className="mb-0"/> Google</Link>
                                            </div>
                                        </div>

                                        <div className="col-12 text-center">
                                            <p className="mb-0 mt-3"><small className="text-dark me-2">Dont have an account ?</small> <Link href="/signup" className="text-dark fw-bold">Sign Up</Link></p>
                                        </div> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> 
                </div>
            </div> 
        </section>
        </>
    )
}