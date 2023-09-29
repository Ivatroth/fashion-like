import { NextResponse } from "next/server";
import { prisma } from "@/app/libs/prisma";
const { user } = prisma;


interface Params {
    params: {id:string};
}

export async function GET(request: Request, {params}: Params){
    try {
        const oneuser = await user.findFirst({
            where: {id: Number(params.id)}
        });
        return NextResponse.json(oneuser)
     
    } catch (error) {
        if(error instanceof Error)
            return NextResponse.json({message: error.message}, {status: 500})
    }
}

export async function PUT(request: Request, {params}: Params){
    const {username, email,pass } = await request.json();
    try {
        const upuser = await user.update({
            where: {id: Number(params.id)},
            data: {username, email, pass}
        });

        if(!upuser) return NextResponse.json({message: `No se encontro el usuario ${params.id}`})
        return NextResponse.json(upuser)
    } catch (error) {
        if(error instanceof Error)
            return NextResponse.json({message: error.message}, {status: 500})        
    }
}

export async function DELETE(request: Request, {params}: Params){

    try {
        const deleteuser = await user.delete({
            where: {id: Number(params.id)}
        });

        if(!deleteuser) return NextResponse.json({message: `No se encontro el usuario ${params.id}`})
        return NextResponse.json(deleteuser)
    
    } catch (error) {
        if(error instanceof Error)
            return NextResponse.json({message: error.message}, {status: 500})        
    }
}