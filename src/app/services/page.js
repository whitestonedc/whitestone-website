import React from "react";
import Link from "next/link";
import Navbar from "../components/navbar";

import { FiArrowRight } from '../assets/icons/vander'

import { medicalServices } from '../data/data'
import Footer from "../components/footer";
import ScrollTop from "../components/scrollTop";

export default function Departments() {
    return (
        <>
            <Navbar manuClass="navigation-menu nav-light nav-left" containerClass="container" />
            <section className="bg-half-170 d-table w-100" style={{ backgroundImage: `url('/images/bg/department.jpeg')` }}>
                <div className="bg-overlay bg-overlay-dark"></div>
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h3 className="sub-title mb-4 text-white title-dark">Services</h3>
                                <p className="para-desc mx-auto text-white-50">Great doctors if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>

                                <nav aria-label="breadcrumb" className="d-inline-block mt-3">
                                    <ul className="breadcrumb bg-light rounded mb-0 py-1 px-2">
                                        <li className="breadcrumb-item"><Link href="/">WhiteStone</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Services</li>
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
            <section className="section">
                <div className="container">
                    <div className="row">
                        {medicalServices.map((item, index) => {
                            let Icon = item.icon
                            return (
                                <div className="col-xl-3 col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                                    <div className="card features feature-primary border-0">
                                        <div className="icon text-center rounded-md">
                                            <Icon className="h3 mb-0" />
                                        </div>
                                        <div className="card-body p-0 mt-3">
                                            <Link href="#" className="title text-dark h5">{item.title}</Link>
                                            <p className="text-muted mt-3">{item.desc}</p>
                                            {/* <Link href="#" className="link">Read More <FiArrowRight className="align-middle" /></Link> */}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <Footer />
            <ScrollTop />
        </>
    )
}