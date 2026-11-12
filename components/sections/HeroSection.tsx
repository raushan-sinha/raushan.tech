import { HeroSectionProps } from "@/types/heroSection.types";
import Image from "next/image";

export default function HeroSection({ name,
    title,
    country,
    timeZone,
    xUrl,
    xHandle,
    image }: HeroSectionProps) {
    return (
        <section className="flex min-h-dvh w-full items-center justify-center px-6 py-16 text-slate-900 sm:px-10 sm:py-20 md:px-16 lg:px-24">
            <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center gap-8 px-2 text-center sm:gap-10 md:flex-row md:items-center md:gap-12 md:px-4 md:text-left">
                {/* A. Profile pic: width scales per breakpoint, height follows via aspect ratio */}
                <div className="flex shrink-0 items-center justify-center">
                    <div className="relative aspect-square w-44 overflow-hidden rounded-[2rem] border-2 border-slate-200 bg-slate-200 ring-1 ring-slate-900/10 sm:w-50 md:w-64 lg:w-50 dark:border-slate-700 dark:bg-slate-800 dark:ring-white/10">
                        <Image
                            src={image}
                            alt={`${name} profile photo`}
                            fill
                            priority
                            sizes="(min-width: 1280px) 320px, (min-width: 1024px) 288px, (min-width: 768px) 256px, (min-width: 640px) 224px, 176px"
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* B. Details */}
                <div className="flex min-w-0 flex-1 flex-col items-center gap-4 md:items-start lg:gap-5">
                    <div className="flex flex-col gap-1.5">
                        <h1 className="text-xl font-bold tracking-tight sm:text-4xl lg:text-3xl">
                            {name}
                        </h1>
                        <p className="text-lg font-medium text-blue-700 sm:text-xl lg:text-2xl dark:text-blue-400">
                            {title}
                        </p>
                    </div>

                    <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-600 sm:text-base md:justify-start dark:text-slate-400">
                        <li className="flex items-center gap-2">
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                className="h-4 w-4 shrink-0 sm:h-5 sm:w-5"
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

                        <li className="flex items-center gap-2">
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                className="h-4 w-4 shrink-0 sm:h-5 sm:w-5"
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
                            {/* Placeholder for your time logic: update this element's text */}
                            <span
                                id="local-time"
                                className="rounded-md bg-slate-100 px-2 py-0.5 font-medium tabular-nums text-slate-900 dark:bg-slate-800 dark:text-slate-100"
                            >
                                --:--
                            </span>
                        </li>
                    </ul>

                    <a
                        href={xUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:text-base dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                    >
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            className="h-4 w-4 fill-current"
                        >
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                        </svg>
                        <span>Follow {xHandle}</span>
                    </a>
                </div>
            </div>
        </section>
    );
}