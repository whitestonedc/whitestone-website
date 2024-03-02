import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScrollTop from "../components/scrollTop";

import { contact } from '../data/data'

export default function Contact() {
    return (
        <>
            <Navbar manuClass="navigation-menu nav-left nav-light" containerClass="container" />
            <section className="bg-half-170 d-table w-100" style={{ backgroundImage: `url('/images/bg/contact.jpeg')`, backgroundPosition: 'center' }}>
                <div className="bg-overlay bg-overlay-dark"></div>
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h3 className="sub-title mb-4 text-white title-dark">Contact Us</h3>
                                <p className="para-desc mx-auto text-white-50">Connect with Us: Reach Out for Support, Inquiries, or Just to Say Hello. We&apos;d Love to Hear from You!</p>

                                <nav aria-label="breadcrumb" className="d-inline-block mt-3">
                                    <ul className="breadcrumb bg-light rounded mb-0 py-1 px-2">
                                        <li className="breadcrumb-item"><Link href="/">WhiteStone</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="position-relative">
                <div className="shape overflow-hidden text-color-white">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <section className="mt-100 mt-60">
                <div className="container">
                    <div 
                        data-aos="fade-in"
                        data-aos-delay="50"
                        data-aos-duration="2000"
                        >
                        <div className="row">
                            {contact.map((item, index) => {
                                let Icon = item.icon
                                return (
                                    <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0" key={index}>
                                        <div className="card features feature-primary text-center border-0">
                                            <div className="icon text-center rounded-md mx-auto">
                                                <Icon className="h3 mb-0" />
                                            </div>
                                            <div className="card-body p-0 mt-3">
                                                <h5>{item.title}</h5>
                                                <p className="text-muted mt-3">{item.desc}</p>
                                                <Link href={item.link} className="link">{item.name}</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="container mt-100 mt-60">
                    <div 
                        data-aos="fade-in"
                        data-aos-delay="50"
                        data-aos-duration="2000"
                        >
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-6">
                                <div className="me-lg-5">
                                    <Image src='/images/about/about-2.jpeg' width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="img-fluid" alt="" />
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="custom-form rounded shadow p-4">
                                    <h5 className="mb-4">Get in touch!</h5>
                                    <form action="mailto:info@whitestonedentalclinic.com" method="POST">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Your Name <span className="text-danger">*</span></label>
                                                    <input name="name" id="name" type="text" className="form-control border rounded" placeholder="First Name :" />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                    <input name="email" id="email" type="email" className="form-control border rounded" placeholder="Your email :" />
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Subject</label>
                                                    <input name="subject" id="subject" className="form-control border rounded" placeholder="Your subject :" />
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Comments <span className="text-danger">*</span></label>
                                                    <textarea name="comments" id="comments" rows="4" className="form-control border rounded" placeholder="Your Message :"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <button type="submit" id="submit" name="send" className="btn btn-primary">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid mt-100 mt-60">
                    <div className="row">
                        <div className="col-12 p-0">
                            <div className="card map border-0">
                                <div className="card-body p-0">
                                    <iframe src="https://www.google.com/maps/embed/v1/place?q=WhiteStone+Dental+Clinic,+Accra,+Ghana&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" style={{ border: '0' }} title="myfram" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <ScrollTop />
        </>
    )
}