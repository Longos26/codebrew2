// [project]/src/app/api/auth/[...nextauth]/route.js
export const dynamic = "force-static"; // Force static generation
export const revalidate = 60; // Revalidate every 60 seconds (if needed)

import NextAuth from "next-auth";
import { authOptions } from "@/libs/authOptions";
import mongoose from "mongoose";
import db from "@/libs/db";

export async function generateStaticParams() {
  return [{ params: { nextauth: [] } }];
}

export async function GET(req, res) {
  const handler = NextAuth(authOptions);
  return handler(req, res); // pass the request and response to the NextAuth handler
}

export async function POST(req, res) {
  const handler = NextAuth(authOptions);
  return handler(req, res); // pass the request and response to the NextAuth handler
}
