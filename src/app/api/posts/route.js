import prisma from "@/utils/connect";
import { NextResponse } from "next/server"

export const GET = async (req) => {

    const {searchParams} = new URL(req.url)
    
    const page = searchParams.get("page")
    
    //need to change also in the CardList.jsx if changed
    const POST_PER_PAGE = 2;


    //take: The number of posts to retrieve (limit).
    //skip: The number of posts to skip (offset).
    const query = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1),
    };

    try {
        const [posts,count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count(),
        ]);
        return new NextResponse(
            JSON.stringify({ posts, count }, { status: 200 })
        );
    } catch(err) {
        console.log(err)
        return new NextResponse(
            JSON.stringify({ message:"Something went wrong!" }, { status: 500 })
        );
    }
};