"use client"

import { useRef, useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import TimelineCard from "./components/TimelineCard";

type Status = "Completed" | "Pending";

interface Event {
    monthYear: string;
    title: string;
    status: Status;
}

const events: Event[] = [
    {
        status: "Completed",
        monthYear: "Sep 2025",
        // category: "Communication",
        title:
        "Some event",
    },
    {
        status: "Completed",
        monthYear: "Sep 2025",
        // category: "Mechanical",
        title: "Some event",
    },
    {
        status: "Completed",
        monthYear: "Sep 2025",
        // category: "UAV",
        title: "Some event",
    },
    // October 2024
    {
        status: "Pending",
        monthYear: "Oct 2025",
        // category: "UAV",
        title:
        "Some event",
    },
    {
        status: "Pending",
        monthYear: "Oct 2025",
        // category: "Team",
        title: "Some event",
    },
];

function getBoatProgress() {
    const completedEvents = events.filter(e => e.status === 'Completed').length;
    return completedEvents / events.length * 100;
}

export default function RobotX() {
    const boatIcon = useRef<null | HTMLDivElement>(null);
    const [currentBoatProgress, setCurrentBoatProgress] = useState(0);
    useEffect(() => {
        const el = boatIcon.current;
        if (!el) return;
        const moveBoat = () => {
            const maxBoatProgress = getBoatProgress();
            const interval = setInterval(() => {
                setCurrentBoatProgress(prev => {
                    if (prev > maxBoatProgress) {
                        clearInterval(interval);
                        return prev;
                    }
                    return prev + 0.1;
                })
            }, 10);
        };


        const observerOptions = {
            root: null,
            rootMargin: '0px',
            scrollMargin: '0px',
            threshold: 1.0
        };

        const observer = new IntersectionObserver((entries, observer) => {
            console.log(entries.length);
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    moveBoat();
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        observer.observe(el);

        return () => {
            observer.disconnect();
        }
        
    }, []);

    return (
        <>
            <Navbar />
            {/** Introduction */}
            <section className="container mx-auto px-4 md:px-6 mt-6 mb-16 mt-16">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-4 m-4">Introduction</h1>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/** Video placeholder */}
                    <div className="flex-[1.5] h-80 rounded-[2vw] border-3 border-blue-300 grid place-items-center">
                        Video Placeholder
                    </div>
                    <p className="flex-1">
                        The Maritime RobotX Challenge is a world-class, university-level competition 
                        designed to challenge and broaden students’ exposure to autonomy and robotics 
                        technologies in the maritime environment. 
                    </p>
                </div>
            </section>
            {/** Events timeline */}
            <section className="container mx-auto px-4 md:px-6 mt-6 mb-16">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-4 m-4">Testing Schedule</h1>
                <div className="relative mt-15 min-h-fit mb-16">
                    {/** Horizontal line */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full border-b-2 w-full bg-[#b7e3ec]" />
                    {/* Boat that travels */}
                    <div
                        ref={boatIcon}
                        className="hidden absolute top-1/2 w-12 h-12 rounded-full bg-[#e6f7fa] md:flex items-center justify-center shadow-lg -translate-y-1/2"
                        style={{ left: `${currentBoatProgress}%`, zIndex: '1' }}
                    >
                        <span className="text-[#008fb3] text-2xl">🚣</span>
                    </div>

                    <div className="md:space-x-8 md:flex md:flex-row grid grid-cols-2 gap-4">
                        {
                            events.map((event, index) => {
                                const isTop = index % 2 == 0;
                                return (
                                    <div key={index} className="flex flex-col items-center min-h-full flex-1">
                                        {/** Top column */}
                                        <div
                                            className={`hidden md:flex flex-col h-1/2 justify-end pb-8 order-1`}
                                        >
                                            {
                                                isTop && 
                                                <TimelineCard
                                                    monthYear={event.monthYear}
                                                    title={event.title}
                                                    status={event.status}
                                                />
                                            }
                                        </div>
                                        {/* Center dot */}
                                        <div className="hidden md:flex h-0 md:flex-row md:items-center order-2">
                                            <div className="relative w-3 h-3 rounded-full bg-[#008fb3] border-4 border-[#e6f7fa] shadow-md" />
                                        </div>
                                        {/** Bottom Column */}
                                        <div
                                            className={`hidden md:flex flex-col h-1/2 justify-start pt-8 order-3`}
                                        >
                                            {
                                                !isTop && 
                                                <TimelineCard
                                                    monthYear={event.monthYear}
                                                    title={event.title}
                                                    status={event.status}
                                                />
                                            }
                                        </div>
                                        {/* Mobile: full width card */}
                                        <div className="md:hidden w-full">
                                            <TimelineCard
                                            monthYear={event.monthYear}
                                            status={event.status}
                                            title={event.title}
                                            />
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
            {/** Testing schedule */}
            <section className="container mx-auto px-4 md:px-6 mt-6 mb-16">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-4 m-4">Our System Overview</h1>
            </section>
            {/** Technical Design Report */}
            <section className="container mx-auto px-4 md:px-6 mt-6 mb-16">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-4 m-4">Technical Design Report</h1>
                <div className="flex items-center justify-center">
                    <iframe src="/placeholder.pdf" className="w-4/5 border-none h-[100vw]" />
                </div>
            </section>
        </>
    );
}