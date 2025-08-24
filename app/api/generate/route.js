import clientPromise from "@/app/lib/mongodb";
import { NextResponse } from "next/server";
export async function POST(request) {
  const body = await request.json();
  console.log(body);
  const client = await clientPromise;
  const db = client.db("Portfolio");
  const collection = db.collection("Contact_ME");
  const result = await collection.insertOne(body);
  if (result) {
    return NextResponse.json({
      success: true,
      message: "Done",
    });
  }
  return NextResponse.json({
    success: False,
    message: "Failed-We are Working On a Fix",
  });
}
