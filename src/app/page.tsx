"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SiX } from "react-icons/si";

const INIT_DURATION = 10000; // 10 seconds

const initLines = [
  "booting kernel modules... ok",
  "mounting virtual filesystem... ok",
  "initializing wallet provider... ok",
  "syncing chain metadata... ok",
  "verifying smart-contract signatures... ok",
  "loading UI components... ok",
  "establishing websocket endpoints... ok",
  "optimizing render pipeline... ok",
  "securing keys in enclave... ok",
  "finalizing startup sequence... ok",
];

export default function Home() {
  const [initialized, setInitialized] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setInitialized(true);
      setTimeout(() => setShowOverlay(false), 700);
    }, INIT_DURATION);
    return () => clearTimeout(t);
  }, []);

  const perLine = Math.max(0.6, INIT_DURATION / initLines.length / 1000);

  return (
    <main className="relative min-h-screen rounded-xl border border-blue-900/50 bg-gradient-to-b from-gray-950 to-gray-900/90 shadow-[0_0_35px_rgba(37,99,235,0.3)] text-white flex items-center justify-center p-4 sm:p-6 font-mono overflow-hidden">
      {/* ====== Hacking Initialization Screen ====== */}
      {showOverlay && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: showOverlay ? 1 : 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
        >
          <div className="max-w-xl w-full px-4 sm:px-6">
            <div className="rounded-xl border border-blue-900/50 bg-gradient-to-b from-gray-950 to-gray-900/90 shadow-[0_0_35px_rgba(37,99,235,0.3)] p-4 sm:p-6">
              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-2.5 h-2.5 bg-red-500 rounded-full" />
                  <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full" />
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                  <span className="ml-2 sm:ml-3 text-xs sm:text-sm text-blue-400">
                    HACKING MODE INIT
                  </span>
                </div>
                <div className="flex items-center text-[10px] sm:text-xs text-gray-500">
                  <span
                    className={`w-2 h-2 rounded-full mr-2 ${
                      initialized ? "bg-green-400 animate-pulse" : "bg-yellow-400"
                    }`}
                  />
                  {initialized ? "ONLINE" : "INITIALIZING"}
                </div>
              </div>

              {/* Terminal Body */}
              <div className="bg-black/80 border border-blue-900/50 rounded-md p-3 sm:p-4 min-h-[150px] sm:min-h-[180px] overflow-hidden">
                {initLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: perLine * i,
                      duration: 0.35,
                      ease: "easeOut",
                    }}
                    className="text-green-400 text-[11px] sm:text-sm mb-1"
                  >
                    <span className="text-blue-400">
                      [{String(i + 1).padStart(2, "0")}]
                    </span>{" "}
                    {line}
                  </motion.div>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="w-full h-2 bg-gray-900 border border-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: INIT_DURATION / 1000, ease: "linear" }}
                    className="h-2 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-300"
                  />
                </div>
                <div className="mt-2 text-[10px] sm:text-xs text-gray-500 flex justify-between">
                  <span>0%</span>
                  <span>Initializing</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* ====== Final Dev Mode Card ====== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: showOverlay ? 0 : 1, scale: showOverlay ? 0.95 : 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-xl w-full px-4 sm:px-6 z-10"
      >
        <Card className="border border-blue-900/50 rounded-xl bg-gradient-to-b from-gray-950 to-gray-900/90 p-5 sm:p-8  text-center space-y-2 sm:space-y-4">
          {/* Terminal Header */}
          <div className="flex items-center justify-between mb-2 sm:mb-4">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full" />
              <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full" />
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
              <span className="ml-2 sm:ml-3 text-xs sm:text-sm text-blue-400">
                DEV MODE ACTIVE
              </span>
            </div>
            <div className="flex items-center text-[10px] sm:text-xs text-gray-500">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse mr-2" />
              ONLINE
            </div>
          </div>

          {/* Profile Image */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-blue-500/25 blur-2xl"
              />
              <Image
                src="/ProfilePic.png"
                alt="KR Rohit"
                width={150}
                height={150}
                className="rounded-full border-2 border-blue-500 shadow-lg relative z-10"
              />
            </div>
          </motion.div>

          {/* Name + Role */}
          <div>
            <h1 className="mt-2 text-4xl sm:text-5xl font-semibold text-blue-400">
              KR <span className="text-blue-600">ROHIT</span>
            </h1>
            <p className="text-gray-400 mt-2 text-sm sm:text-lg md:text-xl">
              Full Stack <span className="text-blue-400">Blockchain Developer</span>
            </p>
          </div>

          <Separator className="bg-blue-900/50" />

          {/* Social Links */}
<CardContent className="flex justify-center">
  <motion.a
    href="https://x.com/rohitisog"
    target="_blank"
    rel="noopener noreferrer"
    transition={{ type: "spring", stiffness: 300, damping: 10 }}
    className="flex flex-col items-center justify-center text-gray-300 hover:text-blue-400 transition"
  >
    <div className="p-3 rounded-full bg-blue-500/10 border border-blue-700/40 mb-2 ] transition">
      <SiX size={22} className="text-blue-400" />
    </div>
    <div className="text-sm sm:text-base font-mono">@rohitisog</div>
  </motion.a>
</CardContent>

          {/* Button */}
          <motion.div
     
            transition={{ duration: 0.3 }}
          >
            <Button className="bg-gray-600 cursor-pointer hover:bg-gray-700 text-white w-full text-lg py-6 rounded-xl">
              Coming Soon
            </Button>
          </motion.div>
        </Card>
      </motion.div>
    </main>
  );
}
