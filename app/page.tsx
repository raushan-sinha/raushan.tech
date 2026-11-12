'use client'
import HeroSection from "@/components/sections/HeroSection";
import { HeroSectionData } from "@/data/heroSection.data";
import { FallingLeaves } from "falling-leaves/react";

export default function Home() {
    return (
        <main className="flex min-h-dvh items-center justify-center bg-white">
            <FallingLeaves fullScreen />
            <HeroSection {...HeroSectionData} />
        </main>
    );
}