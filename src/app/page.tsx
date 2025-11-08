"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SiX } from "react-icons/si"; // Latest X (Twitter) icon

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white p-6">
      <Card className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 shadow-2xl max-w-md w-full p-8 text-center rounded-2xl space-y-6">
        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl" />
            <Image
              src="/ProfilePic.png"
              alt="KR Rohit"
              width={120}
              height={120}
              className="rounded-full border-2 border-blue-500 shadow-lg relative z-10"
            />
          </div>
        </div>

        {/* Name + Role */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            KR <span className="text-blue-500">ROHIT</span>
          </h1>
          <p className="text-gray-400 mt-2 text-lg">
            Full Stack <span className="text-blue-400">Blockchain Developer</span>
          </p>
        </div>

        <Separator className="bg-gray-800" />

        {/* Social (X / Twitter) */}
        <CardContent className="flex justify-center">
          <a
            href="https://x.com/rohitisog"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition"
          >
            <SiX size={20} />
            <span>@rohitisog</span>
          </a>
        </CardContent>

        {/* Coming Soon Button */}
        <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full text-lg py-6 rounded-xl">
          Coming Soon
        </Button>
      </Card>
    </main>
  );
}
