'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation';

import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import AddApointment from "../components/dashboard/addAppointment";
import Crud from "../components/dashboard/crud";
import AdminFooter from "../components/dashboard/adminFooter";
import ScrollTop from "../components/scrollTop";

import { appointmentData } from "../data/data";
import moment from "moment";

export default function DoctorAppointment() {
    const router = useRouter();

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if(!localStorage.getItem('userDetails')) {
            router.push('/login');
        };

        const fetchAppointments = async () => {
            const res = await fetch('/api/appointments');
            const data = await res.json();
            setList(data);
            setLoading(false);
        }

        fetchAppointments();
    }, []);

    return(
        <>
        {/* <Navbar navDark={true} manuClass="navigation-menu nav-left" containerClass="container-fluid"/> */}
        <section className="bg-dashboard">
            <div className="container-fluid">
                <div className="row">
                    <Sidebar colClass ="col-xl-3 col-lg-4 col-md-5 col-12"/>

                    <div className="col-xl-9 col-lg-8 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="row">
                            <div className="col-xl-9 col-lg-6 col-md-4">
                                <h5 className="mb-0">Appointments</h5>
                            </div>

                            <div className="col-xl-3 col-lg-6 col-md-8 mt-4 mt-md-0">
                                <div className="justify-content-md-end">
                                    <form>
                                        <div className="row">
                                            <div className="col-sm-12 col-md-12">
                                                <AddApointment/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-12 mt-4">
                                <div className="table-responsive bg-white shadow rounded">
                                    <table className="table mb-0 table-center">
                                        <thead>
                                            <tr>
                                                {/* <th className="border-bottom p-3" style={{minWidth:'50px'}}>#</th> */}
                                                <th className="border-bottom p-3" style={{minWidth:'180px'}}>Name</th>
                                                <th className="border-bottom p-3">Phone</th>
                                                <th className="border-bottom p-3">Email</th>
                                                <th className="border-bottom p-3">Department</th>
                                                <th className="border-bottom p-3" style={{minWidth:'150px'}}>Appointment Date</th>
                                                <th className="border-bottom p-3" style={{minWidth:'220px'}}>Doctor</th>
                                                <th className="border-bottom p-3" style={{minWidth:'150px'}}></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                loading ? (
                                                    <tr>
                                                        <td colSpan={7}><div className="loader" /></td>
                                                    </tr>
                                                ) : (
                                                    list.map((item, index) => {
                                                        return(
                                                            <tr key={index}>
                                                                {/* <th className="p-3">{item._id}</th> */}
                                                                <td className="p-3">
                                                                    <Link href="#" className="text-dark">
                                                                        <div className="d-flex align-items-center">
                                                                            {/* <Image src={item.clientImage} width={45} height={45} className="avatar avatar-md-sm rounded-circle shadow" alt=""/> */}
                                                                            <span className="ms-2">{item.patientName}</span>
                                                                        </div>
                                                                    </Link>
                                                                </td>
                                                                <td className="p-3">{item.phone}</td>
                                                                <td className="p-3">{item.email}</td>
                                                                <td className="p-3">{item.department}</td>
                                                                <td className="p-3">{moment.utc(item.appointmentDateTime).local().format('MMM DD, YYYY, hh:mm A')}</td>
                                                                <td className="p-3">
                                                                    <Link href="#" className="text-dark">
                                                                        <div className="d-flex align-items-center">
                                                                            {/* <Image src={item.drImage} width={45} height={45} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/> */}
                                                                            <span className="ms-2">{item.doctor}</span>
                                                                        </div>
                                                                    </Link>
                                                                </td>
                                                                <Crud/>
                                                            </tr>
                                                        )
                                                    })
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* <div className="row text-center">
                            
                            <div className="col-12 mt-4">
                                <div className="d-md-flex align-items-center text-center justify-content-between">
                                    <ul className="pagination justify-content-center mb-0 mt-3 mt-sm-0">
                                        <li className="page-item"><Link className="page-link" href="#" aria-label="Previous">Prev</Link></li>
                                        <li className="page-item active"><Link className="page-link" href="#">1</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#" aria-label="Next">Next</Link></li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
        {/* <AdminFooter/> */}
        <ScrollTop/>
        </>
    )
}