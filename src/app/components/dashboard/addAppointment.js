'use client'
import { useState } from 'react';
import Link from 'next/link';

import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';

export default function AddApointment(){
    let [show, setShow] = useState(false);
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
            setLoading(false);
        });
    };

    let handleClose = () => setShow(false);
    let handleShow = () => setShow(true);

    return(
        <>
        <div className="col-sm-12 col-md-7 mt-4 mt-sm-0">
            <div className="d-grid">
                <Link href="#" className="btn btn-primary" onClick={handleShow}>Appointment</Link>
            </div>
        </div>
        <Modal show={show} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton>
            <Modal.Title className='h5'>Book an Appointment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modal-body p-3 pt-4">
                    <form>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="mb-3">
                                    <label className="form-label">Patient Name <span className="text-danger">*</span></label>
                                    <input name="name" id="name" type="text" className="form-control" onChange={e => setPatientName(e.target.value)} value={patientName} placeholder="Patient Name :" required />
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Departments</label>
                                    <select className="form-select form-control" onChange={e => setDepartment(e.target.value)} value={department} required>
                                        <option value="">Select one</option>
                                        <option value="Dentist">Dentist</option>
                                        <option value="Eye Care">Eye Care</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Doctor</label>
                                    <select className="form-select form-control" onChange={e => setDoctor(e.target.value)} value={doctor} required>
                                        <option value="">Select one</option>
                                        <option value="Dr. Anthony Adarkwa">Dr. Anthony Adarkwa</option>
                                        <option value="Dr. Ransom Anang">Dr. Ransom Anang</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                    <input name="email" id="email" type="email" className="form-control" placeholder="Your email :" onChange={e => setEmail(e.target.value)} value={email} required />
                                </div> 
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Your Phone <span className="text-danger">*</span></label>
                                    <input name="phone" id="phone" type="tel" className="form-control" placeholder="Your Phone :" onChange={e => setPhone(e.target.value)} value={phone} required />
                                </div> 
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <div className="mb-3">
                                    <label className="form-label"> Date : </label>
                                    <input name="date" type="date" className="form-control start" placeholder="Select date :" onChange={e => setAppointmentDateTime(e.target.value)} min={new Date().toISOString().split("T")[0]} value={appointmentDateTime} required />
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="mb-3">
                                    <label className="form-label">Comments <span className="text-danger">*</span></label>
                                    <textarea name="comments" id="comments" rows="4" className="form-control" onChange={e => setComment(e.target.value)} value={comment} required  placeholder="Your Message :"></textarea>
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
            </Modal.Body>
        </Modal>
        </>
    )
}