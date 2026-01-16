"use client";

import { useRef, useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import TimelineCard from "./components/TimelineCard";
import JourneyTimelineCard, {
    Category,
} from "./components/JourneyTimelineCard";

type Status = "Completed" | "Pending";

interface Event {
    monthYear: string;
    title: string;
    status: Status;
}

interface Journey {
    monthYear: string;
    category: Category;
    description: string;
}

const journeys: Journey[] = [
    {
        monthYear: "Feb 2025",
        category: "Team",
        description:
            "Concluded our recruitment for 2025. New members have begun their onboarding programme.",
    },
    {
        monthYear: "Nov 2024",
        category: "Achievement",
        description:
            "Secured 5th Place at the 2024 Maritime RobotX Challenge held at Nathan Benderson Park, Florida, United States from 3–9 November.",
    },
    {
        monthYear: "Oct 2024",
        category: "UAV",
        description:
            "Successfully completed a 30-minute test flight of the new UAV.",
    },
    {
        monthYear: "Oct 2024",
        category: "Testing",
        description: "Conducted the second water test at RSYC.",
    },
    {
        monthYear: "Sep 2024",
        category: "Control",
        description:
            "Conducted the first water test at RSYC, successfully controlling the propellers in the water.",
    },
    {
        monthYear: "Sep 2024",
        category: "Communication",
        description:
            "Completed the development of a new GUI, providing a comprehensive view of AMS statuses.",
    },
    {
        monthYear: "Sep 2024",
        category: "Mechanical",
        description: "Designed the reloading mechanism for the Ball Shooter.",
    },
    {
        monthYear: "Sep 2024",
        category: "UAV",
        description: "Initiated work on the first-ever UAV landing dock.",
    },
    {
        monthYear: "Aug 2024",
        category: "Team",
        description: "Appointed Darren as the new Team Lead.",
    },
    {
        monthYear: "Aug 2024",
        category: "UAV",
        description: "Completed the first UAV flight test.",
    },
    {
        monthYear: "Aug 2024",
        category: "Testing",
        description:
            "Conducted the second water test site reconnaissance at the Republic of Singapore Yacht Club (RSYC).",
    },
    {
        monthYear: "Jul 2024",
        category: "Testing",
        description:
            "Conducted the first un-crating to inspect equipment conditions.",
    },
    {
        monthYear: "Jun 2024",
        category: "Team",
        description: "Darren, Yu Wei, and Rui Yue joined the team.",
    },
    {
        monthYear: "Jun 2024",
        category: "UAV",
        description:
            "Began perception work to identify landing markers and tin cans.",
    },
    {
        monthYear: "Jun 2024",
        category: "Testing",
        description:
            "Conducted the first water test site reconnaissance at Nanyang Lake.",
    },
    {
        monthYear: "May 2024",
        category: "Communication",
        description:
            "Finalised the ROS-based inter-module communication framework.",
    },
    {
        monthYear: "May 2024",
        category: "Team",
        description:
            'Tz Yuan and Tz Lung joined the team as Deputy Team Leads. The team was officially renamed "Archimedes."',
    },
    {
        monthYear: "May 2024",
        category: "UAV",
        description: "Initiated development of the new UAV.",
    },
    {
        monthYear: "Mar 2024",
        category: "Control",
        description:
            "Developed and implemented control code for the propeller motor.",
    },
    {
        monthYear: "Mar 2024",
        category: "Mechanical",
        description:
            "Completed the initial assembly of the Ball Shooter and began testing.",
    },
    {
        monthYear: "Feb 2024",
        category: "Perception",
        description: "Tested the GPS module.",
    },
    {
        monthYear: "Feb 2024",
        category: "Planning",
        description:
            "Completed preliminary code improvements for tasks 3 and 4, with successful tests in a simulation environment.",
    },
    {
        monthYear: "Jan 2024",
        category: "Perception",
        description:
            "Set up a stereo vision system and trained it to detect objects, including buoys and obstacles.",
    },
    {
        monthYear: "Dec 2023",
        category: "Planning",
        description:
            "Tested and improved code from the 2022 VRX competition, adapting it to meet the requirements of the 2022 RobotX competition.",
    },
    {
        monthYear: "Dec 2023",
        category: "Control",
        description: "Achieved manual control of the propeller.",
    },
    {
        monthYear: "Dec 2023",
        category: "Mechanical",
        description:
            "Proposed a structural design plan for the Ball Shooter mechanism.",
    },
    {
        monthYear: "Nov 2023",
        category: "Control",
        description: "Established the foundational control logic for the ASV.",
    },
    {
        monthYear: "Nov 2023",
        category: "Communication",
        description:
            "Initiated the development of the ROS communication framework.",
    },
];

const events: Event[] = [
    {
        status: "Completed",
        monthYear: "Sep 2025",
        title: "Some event",
    },
    {
        status: "Completed",
        monthYear: "Sep 2025",
        title: "Some event",
    },
    {
        status: "Completed",
        monthYear: "Sep 2025",
        title: "Some event",
    },
    {
        status: "Pending",
        monthYear: "Oct 2025",
        title: "Some event",
    },
    {
        status: "Pending",
        monthYear: "Oct 2025",
        title: "Some event",
    },
];

function getBoatProgress() {
    const completedEvents = events.filter(
        (e) => e.status === "Completed",
    ).length;
    return (completedEvents / events.length) * 100;
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
                setCurrentBoatProgress((prev) => {
                    if (prev > maxBoatProgress) {
                        clearInterval(interval);
                        return prev;
                    }
                    return prev + 0.1;
                });
            }, 10);
        };

        const observerOptions = {
            root: null,
            rootMargin: "0px",
            scrollMargin: "0px",
            threshold: 1.0,
        };

        const observer = new IntersectionObserver((entries, observer) => {
            console.log(entries.length);
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    moveBoat();
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        observer.observe(el);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <Navbar />
            {/** Introduction */}
            <section className="container mx-auto px-4 md:px-6 mt-6 mb-16 mt-16">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-4 m-4">
                    Introduction
                </h1>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/** Video placeholder */}
                    <div className="flex-[1.5] h-80 rounded-[2vw] border-3 border-blue-300 grid place-items-center">
                        Video Placeholder
                    </div>
                    <p className="flex-1">
                        The Maritime RobotX Challenge is a world-class,
                        university-level competition designed to challenge and
                        broaden students’ exposure to autonomy and robotics
                        technologies in the maritime environment.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-4 md:px-6 mt-6 mb-16">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-4 m-4">
                    Our Journey So Far
                </h1>
                <div className="relative mt-6">
                    {/* Center vertical line + moving boat */}
                    <div className="hidden md:block absolute left-1/2 top-0 h-full w-0 -translate-x-1/2 pointer-events-none">
                        {/* Line */}
                        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#b7e3ec]" />
                    </div>

                    {/* Timeline cards */}
                    <div className="space-y-8">
                        {journeys.map((item, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col md:flex-row md:items-center"
                                >
                                    {/* Left column */}
                                    <div
                                        className={`hidden md:flex w-1/2 ${
                                            isLeft
                                                ? "justify-end pr-8 order-1"
                                                : "justify-end pr-8 order-1"
                                        }`}
                                    >
                                        {isLeft && (
                                            <JourneyTimelineCard
                                                monthYear={item.monthYear}
                                                category={item.category}
                                                description={item.description}
                                            />
                                        )}
                                    </div>

                                    {/* Center dot */}
                                    <div className="hidden md:flex w-0 md:w-auto md:flex-col md:items-center order-2">
                                        <div className="relative w-3 h-3 rounded-full bg-[#008fb3] border-4 border-[#e6f7fa] shadow-md" />
                                    </div>

                                    {/* Right column */}
                                    <div
                                        className={`hidden md:flex w-1/2 ${
                                            isLeft
                                                ? "justify-start pl-8 order-3"
                                                : "justify-start pl-8 order-3"
                                        }`}
                                    >
                                        {!isLeft && (
                                            <JourneyTimelineCard
                                                monthYear={item.monthYear}
                                                category={item.category}
                                                description={item.description}
                                            />
                                        )}
                                    </div>

                                    {/* Mobile: full width card */}
                                    <div className="md:hidden w-full">
                                        <JourneyTimelineCard
                                            monthYear={item.monthYear}
                                            category={item.category}
                                            title={item.description}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            {/** Events timeline */}
            <section className="container mx-auto px-4 md:px-6 mt-6 mb-16">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-4 m-4">
                    Testing Schedule
                </h1>
                <div className="relative mt-15 min-h-fit mb-16">
                    {/** Horizontal line */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full border-b-2 w-full bg-[#b7e3ec]" />
                    {/* Boat that travels */}
                    <div
                        ref={boatIcon}
                        className="hidden absolute top-1/2 w-12 h-12 rounded-full bg-[#e6f7fa] md:flex items-center justify-center shadow-lg -translate-y-1/2"
                        style={{ left: `${currentBoatProgress}%`, zIndex: "1" }}
                    >
                        <span className="text-[#008fb3] text-2xl">🚣</span>
                    </div>

                    <div className="md:space-x-8 md:flex md:flex-row grid grid-cols-2 gap-4">
                        {events.map((event, index) => {
                            const isTop = index % 2 == 0;
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col items-center min-h-full flex-1"
                                >
                                    {/** Top column */}
                                    <div
                                        className={`hidden md:flex flex-col h-1/2 justify-end pb-8 order-1`}
                                    >
                                        {isTop && (
                                            <TimelineCard
                                                monthYear={event.monthYear}
                                                title={event.title}
                                                status={event.status}
                                            />
                                        )}
                                    </div>
                                    {/* Center dot */}
                                    <div className="hidden md:flex h-0 md:flex-row md:items-center order-2">
                                        <div className="relative w-3 h-3 rounded-full bg-[#008fb3] border-4 border-[#e6f7fa] shadow-md" />
                                    </div>
                                    {/** Bottom Column */}
                                    <div
                                        className={`hidden md:flex flex-col h-1/2 justify-start pt-8 order-3`}
                                    >
                                        {!isTop && (
                                            <TimelineCard
                                                monthYear={event.monthYear}
                                                title={event.title}
                                                status={event.status}
                                            />
                                        )}
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
                        })}
                    </div>
                </div>
            </section>
            {/** Testing schedule */}
            <section className="container mx-auto px-4 md:px-6 mt-6 mb-16">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-4 m-4">
                    Our System Overview
                </h1>
            </section>
            {/** Technical Design Report */}
            <section className="container mx-auto px-4 md:px-6 mt-6 mb-16">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-4 m-4">
                    Technical Design Report
                </h1>
                <div className="flex items-center justify-center">
                    <iframe
                        src="/placeholder.pdf"
                        className="w-4/5 border-none h-[100vw]"
                    />
                </div>
            </section>
        </>
    );
}
