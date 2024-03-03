import { NextResponse } from "next/server";
import connect from "../../../../db.js";
import User from "../../../../models/userModel.js";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
    try {
        await connect();

        const { name, email, password } = await req.json();

        const user = await User.findOne({ email });

        if(user) return new NextResponse(JSON.stringify({ success: false, data: {}, message: "User already exists" }), { status: 400 });

        const salt = await bcrypt.genSalt(10);

        const hash = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            name,
            email,
            password: hash
        });

        return new NextResponse(JSON.stringify({ success: true, data: newUser }), { status: 201 });
    } catch (error) {
        return new NextResponse("Error creating appointment: " + error, { status: 500 });
    }
};