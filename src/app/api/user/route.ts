import { NextResponse } from "next/server";
import { prisma } from "@/app/libs/prisma";
const { user } = prisma;

export async function GET(request: Request){
    try {
        const { searchParams } = new URL(request.url);
        if(searchParams){
            const inEmail = searchParams.get('email');
            const inPassword = searchParams.get('password')
            console.log(inEmail);
            console.log(inPassword);
            
            
            const users = await user.findUnique({where:{ email: inEmail, pass: inPassword}})
            return NextResponse.json(users)
        }        
        const users = await user.findMany()
        return NextResponse.json(users)
    } catch (error) {
        if(error instanceof Error)
        return NextResponse.json({message: 'User not found'}, {status: 500})  
    }
}

export async function POST(request: Request){
    const {username, email, pass} = await request.json();
    try {
        const newuser = await user.create({
            data: {username, email, pass}
        })
        return NextResponse.json(newuser)
    } catch (error) {
        if(error instanceof Error)
        return NextResponse.json({message: error.message}, {status: 500})          
    }
}