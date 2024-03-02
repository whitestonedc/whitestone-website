import React from "react";
import Link from "next/link";

import Navbar from "../components/navbar";
import Accordion from "../components/accordion";
import Footer from "../components/footer";
import ScrollTop from "../components/scrollTop";

import { RiSearchLine, FiPhone, FiMail, FiArrowRight } from '../assets/icons/vander'

import { faqAbout } from '../data/data';

export default function Faqs() {
    return (
        <>
            <Navbar manuClass="navigation-menu nav-light nav-left" containerClass="container" />
            <section className="bg-half-170 d-table w-100" style={{ backgroundImage: `url('/images/bg/faqs.jpeg')`, backgroundPosition: 'center' }}>
                <div className="bg-overlay bg-overlay-dark"></div>
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h2 className="sub-title text-white title-dark">How can we help you ?</h2>
                            </div>
                            <div className="subcribe-form text-center mt-4">
                                <form>
                                    <input type="text" id="name" name="name" className="border bg-white-50 rounded-pill" required="" placeholder="Ask a questions..." />
                                    <button type="submit" className="btn btn-pills btn-primary"><RiSearchLine className="mb-0 align-middle me-1" /> Search</button>
                                </form>
                                <p className="text-white-50 mb-0 para-desc mx-auto mt-3">*We collect your search keywords to improve our FAQ</p>
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
            <section className="section">
                {/* <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">Choose a category to quickly find</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {faqAbout.map((item,index)=>{
                        let Icon = item.icon
                        return(
                            <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                                <div className="card features feature-primary text-center border-0">
                                    <div className="icon text-center rounded-md mx-auto">
                                        <Icon className="h3 mb-0"/>
                                    </div>
                                    <div className="card-body p-0 mt-3">
                                        <Link href="#" className="title text-dark h5">{item.title}</Link>
                                        <p className="text-muted mt-3">{item.desc}</p>
                                        <Link href="#" className="link">Read More <FiArrowRight className="mb-0 align-middle"/></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div> */}

                <div className="container mt-50 mt-60"> {/* //changed margin top from 100 to 50 */}
                    <div 
                        data-aos="fade-in"
                        data-aos-delay="50"
                        data-aos-duration="2000"
                        >
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="section-title text-center mb-4 pb-2">
                                    <h4 className="mb-4">General Questions</h4>
                                    <p className="para-desc mx-auto text-muted mb-0">Answers at Your Fingertips: Find Quick Solutions to Your General Queries and Get Back to What Matters Most!</p>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-9 mt-4 pt-2">
                                <Accordion />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-100 mt-60">
                    <div 
                        data-aos="fade-up"
                        data-aos-delay="50"
                        data-aos-duration="2000">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="section-title text-center mb-4 pb-2">
                                    <h4 className="mb-4">Still have a questions ?</h4>
                                    <p className="para-desc mx-auto text-muted mb-0">Dive deeper into the details. Our dedicated team is here to address any lingering inquiries and guide you to success.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <div className="row">
                                    <div className="col-md-6 mt-4 pt-2">
                                        <div className="card border-0 text-center features feature-primary rounded">
                                            <div className="icon text-center mx-auto rounded-md">
                                                <FiPhone className="h3 mb-0" />
                                            </div>

                                            <div className="card-body p-0 mt-4">
                                                <h5>Phone</h5>
                                                <p className="text-muted">Great doctor if you need your family member to get effective assistance</p>
                                                <Link href="tel:+233 242-251-983" className="link">+233 242-251-983/+233 240-452-992</Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mt-4 pt-2">
                                        <div className="card border-0 text-center features feature-primary rounded">
                                            <div className="icon text-center mx-auto rounded-md">
                                                <FiMail className="h3 mb-0" />
                                            </div>

                                            <div className="card-body p-0 mt-4">
                                                <h5>Email</h5>
                                                <p className="text-muted">Great doctor if you need your family member to get effective assistance</p>
                                                <Link href="mailto:info@whitestonedentalclinic.com" className="link">info@whitestonedentalclinic.com</Link>
                                            </div>
                                        </div>
                                    </div>
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