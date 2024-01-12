import React from "react";
import Link from "next/link";

import Navbar from "../components/navbar";
import AppointmentTab from "../components/patient/appointmentTab";
import Footer from "../components/footer";
import ScrollTop from "../components/scrollTop";

export default function BookingAppointment(){
    return(
        <>
        <Navbar navDark={true} manuClass="navigation-menu nav-left" containerClass="container"/>

        <section className="bg-half-170 d-table w-100 bg-light">
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h3 className="sub-title mb-4">Book an appointment</h3>
                            <p className="para-desc mx-auto text-muted">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                        
                            <nav aria-label="breadcrumb" className="d-inline-block mt-3">
                                <ul className="breadcrumb bg-transparent mb-0 py-1">
                                    <li className="breadcrumb-item"><Link href="/">Doctris</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Appointment</li>
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
        <AppointmentTab/>
        <Footer/>
        <ScrollTop/>
        </>
    )
}