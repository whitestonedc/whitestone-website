import { NextResponse } from "next/server";
import connect from "../../../../db.js";
import Appointment from "../../../../models/appointmentsModel.js";

export const GET = async (req) => {
    try {
        await connect();

        const appointments = await Appointment.find();

        return new NextResponse(JSON.stringify(appointments), { status: 200 });
    } catch (error) {
        return new NextResponse("Error fetching appointments" + error, { status: 500 });
    }
}

export const POST = async (req) => {
    try {
        await connect();

        const { patientName, department, doctor, email, phone, appointmentDateTime, comment, approved } = await req.json();

        const newAppointment = await Appointment.create({
            patientName,
            department,
            doctor,
            email,
            phone,
            appointmentDateTime,
            comment,
            approved
        });

        return new NextResponse(JSON.stringify({ success: true, data: newAppointment }), { status: 201 });
    } catch (error) {
        return new NextResponse("Error creating appointment: " + error, { status: 500 });
    }
};