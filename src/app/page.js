'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/navbar";

import { RiMapPin2Line, RiUser2Line, RiArrowRightLine, FiFacebook, FiLinkedin, FiGithub, FiTwitter, MdOutlineEventNote } from './assets/icons/vander'

import { ctaData, medicalServices, partners, doctorData, contactData } from "./data/data";
import AboutImage from "./components/aboutImage";
import CtaThree from "./components/cta/ctaThree";
import Footer from "./components/footer";
import ScrollTop from "./components/scrollTop";
import Alert from 'react-bootstrap/Alert';

export default function IndexThree() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [patientName, setPatientName] = useState('');
    const [department, setDepartment] = useState('');
    const [doctor, setDoctor] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [appointmentDateTime, setAppointmentDateTime] = useState('');
    const [comment, setComment] = useState('');

    const sendDetails = async (e) => {
        e.preventDefault();

        setLoading(true);

        fetch('/api/appointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                patientName: patientName,
                department: department,
                doctor: doctor,
                email: email,
                phone: phone,
                appointmentDateTime: appointmentDateTime,
                comment: comment,
                approved: false
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.success === true) {
                setLoading(false);
                setPatientName('');
                setDepartment('');
                setDoctor('');
                setEmail('');
                setPhone('');
                setAppointmentDateTime('');
                setComment('');
                setSuccess(true);
            }
        })
        .catch(error => {
            console.error(error);
            setError(true);
        });
    };

    return (
        <>
            <Navbar manuClass="navigation-menu nav-left nav-light" containerClass="container" />

            <section className="bg-half-170 d-table w-100" id="home" style={{ backgroundImage: `url('/images/bg/02.jpg')` }}>
                <div className="bg-overlay bg-overlay-dark"></div>
                <div className="container">
                    <div className="row justify-content-center mt-5">
                        <div className="col-xl-10">
                            <div className="heading-title text-center">
                                {/* <Image src='/images/WS-Logo-Main.png' width={194} height={50} alt="" /> */}
                                <h4 className="heading fw-bold text-white title-dark mt-3 mb-4">Your Smile, Our Priority</h4>
                                <p className="para-desc mx-auto text-white-50 mb-0">Transforming lives through exceptional dental care. Our experienced team is dedicated to your comfort and satisfaction.</p>

                                <div className="mt-4 pt-2 col-md-10 offset-md-1"> {/* //Added "col-md-8 offset-md-2" to reduce the width of the form */}
                                    <div className="rounded text-start shadow p-4 bg-white-50">
                                        <div className="row align-items-center">
                                            {/* <div className="col-md">
                                                <div className="input-group bg-white border rounded" style={{ opacity: '0.7' }}>
                                                    <span className="input-group-text border-0"><RiMapPin2Line className="text-primary h5 fw-normal mb-0" /></span>
                                                    <input name="name" id="location" type="text" className="form-control border-0" placeholder="Your Name:" />
                                                </div>
                                            </div> */}

                                            <div className="col-md mt-4 mt-sm-0">
                                                <div className="input-group bg-white border rounded" style={{ opacity: '0.7' }}>
                                                    <span className="input-group-text border-0"><RiUser2Line className="text-primary h5 fw-normal mb-0" /></span>
                                                    <input name="name" id="name" type="text" className="form-control border-0" onChange={e => setPatientName(e.target.value)} placeholder="Your Name:" />
                                                </div>
                                            </div>

                                            <div className="col-md-auto mt-4 mt-sm-0">
                                                <div className="d-grid d-md-block">
                                                    <a className="btn btn-primary" href="#bookingForm">Book</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section py-5 bg-light">
                <div className="container">
                    <div className="row">
                        {ctaData.map((item, index) => {
                            let Icon = item.icon
                            return (
                                <div className="col-md-4 mt-4 pt-2 mt-sm-0 pt-sm-0" key={index}>
                                    <div className="d-flex">
                                        <Icon className="display-1 mb-0 text-primary" />
                                        <div className="ms-3 ms-lg-4">
                                            <h5>{item.title}</h5>
                                            <p className="text-muted mb-0">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="section pb-0">
                <div className="container">
                    <div 
                        data-aos="fade-in"
                        data-aos-delay="50"
                        data-aos-duration="2000"
                        >
                        <div className="row align-items-center">
                            <AboutImage colClass="col-lg-5 col-md-6" />

                            <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="section-title ms-lg-5">
                                    <span className="badge rounded-pill bg-soft-primary">About WhiteStone</span>
                                    <h4 className="title mt-3 mb-4">Good Services And Better <br /> Health By Our Specialists</h4>
                                    <p className="para-desc text-muted">Welcome to Whitestone Dental Clinic, where excellence in dentistry meets compassionate care. As your premier choice for dental health, we offer a comprehensive range of services tailored to meet your needs.</p>
                                    <p className="para-desc text-muted">From treating caries and gum diseases to tooth whitening, implants, and occlusion correction, our team of experienced dentists is dedicated to providing painless and meticulous care. Whether you require routine maintenance or complex procedures, trust us to deliver exceptional results with precision and professionalism. Your smile is our priority, and we&apos;re here to help you achieve optimal oral health and confidence. Schedule your appointment today and experience the difference at Whitestone Dental Clinic.</p>
                                    <div className="mt-4">
                                        <Link href="/aboutus" className="btn btn-soft-primary">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-100 mt-60">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="section-title mb-4 pb-2 text-center">
                                <span className="badge rounded-pill bg-soft-primary mb-3">Services</span>
                                <h4 className="title mb-4">Our Medical Services</h4>
                                <p className="text-muted mx-auto para-desc mb-0">Great doctors if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {medicalServices.slice(0, 8).map((item, index) => {
                            let Icon = item.icon
                            return (
                                <div className="col-xl-3 col-md-4 col-12 mt-5" key={index}>
                                    <div 
                                        data-aos="zoom-in"
                                        data-aos-delay="50"
                                        data-aos-duration="2000"
                                    >
                                        <div className="card features feature-primary bg-transparent border-0">
                                            <div className="icon text-center rounded-md">
                                                <Icon className="h3 mb-0" />
                                            </div>
                                            <div className="card-body p-0 mt-3">
                                                <Link href="/services" className="title text-dark h5">{item.title}</Link>
                                                <p className="text-muted mt-3">{item.desc}</p>
                                                {/* <Link href="/services" className="link">Read More <RiArrowRightLine className="align-middle" /></Link> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="container-fluid mt-100 mt-60">
                    <div className="py-5 rounded" style={{ backgroundImage: `url('/images/bg/05.jpg')` }}>
                        <CtaThree />
                    </div>
                </div>
            </section>

            <section className="pt-md-0 cta-section mt-4">
                {/* <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-6">
                            <div className="row mt-4">
                                {partners.map((item, index) => {
                                    return (
                                        <div className="col-lg-3 col-md-4 col-6 text-center py-4" key={index}>
                                            <Image src={item} width={115} height={25} className="avatar avatar-client" alt="" />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div> */}
            </section>

            <section className="section">
                {/* <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="section-title text-center mb-4 pb-2">
                                <h4 className="title mb-4">Doctors</h4>
                                <p className="text-muted mx-auto para-desc mb-0">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        {doctorData.slice(0, 4).map((item, index) => {
                            return (
                                <div className="col-xl-3 col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                                    <div className="card team border-0 rounded shadow overflow-hidden">
                                        <div className="team-img position-relative">
                                            <Image src={item.image} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="img-fluid" alt="" />
                                            <ul className="list-unstyled team-social mb-0">
                                                <li><Link href="#" className="btn btn-icon btn-pills btn-soft-primary"><FiFacebook className="icons" /></Link></li>
                                                <li className="mt-2 ms-0"><Link href="#" className="btn btn-icon btn-pills btn-soft-primary"><FiLinkedin className="icons" /></Link></li>
                                                <li className="mt-2 ms-0"><Link href="#" className="btn btn-icon btn-pills btn-soft-primary"><FiGithub className="icons" /></Link></li>
                                                <li className="mt-2 ms-0"><Link href="#" className="btn btn-icon btn-pills btn-soft-primary"><FiTwitter className="icons" /></Link></li>
                                            </ul>
                                        </div>
                                        <div className="card-body content text-center">
                                            <Link href="/doctor-team-one" className="title text-dark h5 d-block mb-0">{item.name}</Link>
                                            <small className="text-muted speciality">{item.speciality}</small>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div> */}

                <div className="container mt-50 mt-60" id="bookingForm"> {/* changed margin top from 100 to 50 */}
                    <div className="row align-items-lg-end">
                        <div className="col-md-6">
                            <div 
                                data-aos="fade-in"
                                data-aos-delay="50"
                                data-aos-duration="2000"
                            >
                                <div className="me-xl-3">
                                    <div className="section-title mb-4 pb-2">
                                        <MdOutlineEventNote className="text-primary h2" />
                                        <h4 className="title mb-4">Book Your Appointment</h4>
                                        <p className="text-muted para-desc mb-0">Schedule your visit today for exceptional dental care and a brighter, healthier smile tomorrow.</p>
                                    </div>
                                    {contactData.map((item, index) => {
                                        let Icon = item.icon
                                        return (
                                            <div className="features feature-bg-primary d-flex card flex-row p-4 rounded-md shadow position-relative overflow-hidden mt-4" key={index}>
                                                <Icon className="icons display-3 mb-0 text-primary" />
                                                <div className="ms-3">
                                                    <h5 className="titles">{item.title}</h5>
                                                    <p className="text-muted para mb-0">{item.desc}</p>
                                                </div>
                                                <div className="big-icon">
                                                    <Icon />
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="card border-0 rounded shadow p-4 ms-xl-3">
                                <div className="custom-form">
                                    <form onSubmit={(e) => sendDetails(e)}>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Name <span className="text-danger">*</span></label>
                                                    <input name="name" id="name1" type="text" className="form-control" onChange={e => setPatientName(e.target.value)} placeholder="Your Name :" value={patientName} required />
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Departments</label>
                                                    <select className="form-select form-control" onChange={e => setDepartment(e.target.value)} value={department} required>
                                                        <option value="">Select one</option>
                                                        <option value="Dentist">Dentist</option>
                                                        <option value="Eye Care">Eye Care</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Doctor</label>
                                                    <select className="form-select form-control" onChange={e => setDoctor(e.target.value)} value={doctor} required>
                                                        <option value="">Select one</option>
                                                        <option value="Dr. Anthony Adarkwa">Dr. Anthony Adarkwa</option>
                                                        <option value="Dr. Ransom Anang">Dr. Ransom Anang</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                    <input name="email" id="email" type="email" className="form-control" onChange={e => setEmail(e.target.value)} value={email} required placeholder="Your email :" />
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Your Phone <span className="text-danger">*</span></label>
                                                    <input name="phone" id="phone" type="tel" className="form-control" onChange={e => setPhone(e.target.value)} value={phone} required placeholder="Your Phone :" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="mb-3">
                                                    <label className="form-label"> Date <span className="text-danger">*</span></label>
                                                    <input name="date" type="datetime-local" className="form-control start" onChange={e => setAppointmentDateTime(e.target.value)} min={new Date().toISOString().split("T")[0]} value={appointmentDateTime} required  placeholder="Select date :" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Comments <span className="text-danger">*</span></label>
                                                    <textarea name="comments" id="comments" rows="4" className="form-control" onChange={e => setComment(e.target.value)} value={comment} required placeholder="Your Message :"></textarea>
                                                </div>
                                            </div>

                                            {
                                                success === true ? (
                                                    <div className="col-lg-12">
                                                        <div className="mb-3">
                                                            <Alert variant="success">
                                                                Your booking is successful!
                                                            </Alert>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    null
                                                )
                                            }

                                            {
                                                error === true ? (
                                                    <div className="col-lg-12">
                                                        <div className="mb-3">
                                                            <Alert variant="danger">
                                                                Please try later!
                                                            </Alert>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    null
                                                )
                                            }

                                            <div className="col-lg-12">
                                                <div className="d-grid">
                                                    {
                                                        loading ? (
                                                            <button className="btn btn-primary" style={{ alignItems: 'center' }} disabled>
                                                                <div className="loader"></div>
                                                            </button>
                                                        ) : (
                                                            <button type="submit" className="btn btn-primary">Book An Appointment</button>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </form>
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