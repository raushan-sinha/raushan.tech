'use client';
import { HeroSectionProps } from "@/types/heroSection.types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection({ name,
    title,
    country,
    image, summary, socials }: HeroSectionProps) {

    const [timeZone, setTimeZone] = useState<string>('');

    // Local time -
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeZone(new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="flex w-full flex-col items-center justify-center gap-8 px-6 pt-16 pb-12 text-slate-900 sm:px-10 sm:pt-24 sm:pb-16 md:px-16 md:pt-28 lg:px-24 lg:pt-32">
            <div className="mx-auto flex w-fit max-w-full flex-col items-center justify-center gap-4 text-center md:flex-row md:items-center md:gap-5 md:text-left">
                {/* A. Profile pic: width scales per breakpoint, height follows via aspect ratio */}
                <div className="flex shrink-0 items-center justify-center">
                    <div className="relative aspect-square w-28 overflow-hidden rounded-3xl border-2 border-slate-200 bg-slate-200 ring-1 ring-slate-900/10 sm:w-32 md:w-38 md:h-40 dark:border-slate-700 dark:bg-slate-800 dark:ring-white/10">
                        <Image
                            src={image}
                            alt={`${name} profile photo`}
                            fill
                            priority
                            sizes="(min-width: 768px) 144px, (min-width: 640px) 128px, 112px"
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* B. Details */}
                <div className="flex w-fit min-w-0 flex-col items-center justify-center gap-1.5 md:items-start">
                    <h1 className="text-lg font-bold leading-tight tracking-tight sm:text-xl md:text-2xl">
                        {name}
                    </h1>

                    <Link
                        href="https://x.com/84Raushan"
                        target="_self"
                        rel="noopener noreferrer"
                        className="rounded-full bg-slate-900 px-2.5 py-0.5 text-xs font-semibold leading-5 text-white transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:text-sm dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                    >
                        <span>@84Raushan</span>
                    </Link>

                    <p className="text-sm font-bold leading-snug sm:text-base underline decoration-gray-300 decoration-2 underline-offset-4">
                        {title}
                    </p>

                    <ul className="flex items-center justify-center gap-2.5 md:justify-start">
                        {socials.map((social) => (
                            <li key={social.label}>
                                <Link
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="inline-flex text-black transition-opacity hover:opacity-70"
                                >
                                    <img
                                        src={social.icon}
                                        alt=""
                                        width={16}
                                        height={16}
                                        className="h-5 w-5 brightness-0"
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-0.5 text-xs leading-5 text-slate-600 sm:text-sm md:justify-start dark:text-slate-600 font-mono">
                        <li className="flex items-center gap-1.5">
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                className="h-3.5 w-3.5 shrink-0"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 21s7-5.686 7-11a7 7 0 1 0-14 0c0 5.314 7 11 7 11Z" />
                                <circle cx="12" cy="10" r="2.5" />
                            </svg>
                            <span>{country}</span>
                        </li>

                        <li className="flex items-center gap-1.5">
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                className="h-3.5 w-3.5 shrink-0"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="9" />
                                <path d="M12 7v5l3 2" />
                            </svg>
                            <span>{timeZone}</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Summary */}
            <div className="flex w-full max-w-2xl flex-col gap-2 text-start">
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base sm:leading-7 dark:text-slate-600 font-mono">
                    {summary}
                </p>
            </div>
        </section>
    );
}