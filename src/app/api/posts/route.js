import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server"

export const GET = async (req) => {

    const {searchParams} = new URL(req.url)
    
    const page = searchParams.get("page")
    const cat = searchParams.get("cat")
    
    //need to change also in the CardList.jsx if changed
    const POST_PER_PAGE = 2;


    //take: The number of posts to retrieve (limit).
    //skip: The number of posts to skip (offset).
    const query = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1),
        where: {
            ...(cat && { //There is a category "searched for" (false for main page, true for cat page)
                catSlug: cat
            }),
        },
    };

    try {
        const [posts,count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count({ where: query.where }),
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

// CREATE A POST
export const POST = async (req) => {
    // get user from Authsession for more security (dont trust)
    const session = await getAuthSession(); 
    
    if(!session){
        return new NextResponse(
            JSON.stringify({ message:"Not Authenticated" }, { status: 401 })
        );
    }

    try {
        const body = await req.json()
        const post = await prisma.post.create({
            data: { ...body, userEmail: session.user.email },
        });
        return new NextResponse(
            JSON.stringify(post, { status: 200 })
        );
    } catch(err) {
        return new NextResponse(
            JSON.stringify({ message:"Something went wrong!" }, { status: 500 })
        );
    }
};