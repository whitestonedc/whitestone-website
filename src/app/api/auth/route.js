import { NextResponse } from "next/server";
import connect from "../../../../db.js";
import User from "../../../../models/userModel.js";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
    try {
        await connect();

        const { email, password } = await req.json();

        const user = await User.findOne({ email });

        if(!user) return new NextResponse(JSON.stringify({ success: false, data: {}, message: "User doesn't exist" }), { status: 400 });

        const checkPasswords = await bcrypt.compare(password, user.password);

        if(!checkPasswords) return new NextResponse(JSON.stringify({ success: false, data: {}, message: "Invalid Credentials" }), { status: 400 });

        return new NextResponse(JSON.stringify({ success: true, user: { name: user.name, email: user.email } }), { status: 200 });
        
    } catch (error) {
        return new NextResponse("Error creating appointment: " + error, { status: 500 });
    }
};