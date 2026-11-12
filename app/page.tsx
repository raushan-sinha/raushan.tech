'use client'
import { FallingLeaves } from "falling-leaves/react";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center h-screen bg-dark">
            <h1 className="text-4xl font-bold">Hello World</h1>
            <FallingLeaves fullScreen />
        </main>
    );
}