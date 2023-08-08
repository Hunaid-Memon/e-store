// import {db} from '@vercel/postgres'
import { NextRequest, NextResponse } from 'next/server';
import { db, cartTable } from '../../lib/drizzle'
import { v4 as uuid } from 'uuid';
import { cookies } from 'next/headers'

export async function GET(request: NextRequest) {
    try {
        const res = await db.select().from(cartTable)
        return NextResponse.json({ res })
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: 'Get Request Error' })
    }
}

export async function POST(request: NextRequest) {
    const req = await request.json();

    const uid = uuid();
    const setCookies = cookies();
    
    const user_id = cookies().get("user_id")
    if (!user_id) {
      
      setCookies.set("user_id", uid)
  }

  try {
      const res = await db
        .insert(cartTable)
        .values({
          product_id: req.product_id,
          quantity: 1,
          user_id: cookies().get("user_id")?.value as string,
        })
        .returning();
    return NextResponse.json({ res });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Post Request Error" });
  }
}