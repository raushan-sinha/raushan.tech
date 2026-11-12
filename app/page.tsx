'use client'
import { FallingLeaves } from "falling-leaves/react";

export default function Home() {
    return (
        <main className="flex flex-col items-center py-18 h-screen bg-dark">
            <FallingLeaves fullScreen />
        </main>
    );
}