import { ConnectDB } from "@/lib/config/db";
import TodoModel from "@/lib/model/TodoModel";
import { NextResponse } from "next/server";

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

export async function GET(request: any) {
  const todos = await TodoModel.find({});
  return NextResponse.json({ todos: todos });
}

export async function POST(request: any) {
  const { title, description } = await request.json();
  await TodoModel.create({ title, description });
  return NextResponse.json({ msg: "Todo Added Successfully" });
}

export async function DELETE(request: any) {
  const mongoID = await request.nextUrl.searchParams.get("mongoID");
  await TodoModel.findByIdAndDelete(mongoID);
  return NextResponse.json({ msg: "Todo Deleted Successfully" });
}

export async function PUT(request: any) {
  const mongoID = await request.nextUrl.searchParams.get("mongoID");
  await TodoModel.findByIdAndUpdate(mongoID, {
    $set: { isCompleted: true },
  });
  return NextResponse.json({ msg: "Todo Completed Successfully" });
}
