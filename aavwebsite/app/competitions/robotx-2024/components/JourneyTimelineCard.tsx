export type Category =
    | "ALL"
    | "Control"
    | "Communication"
    | "Planning"
    | "Mechanical"
    | "Perception"
    | "UAV"
    | "Testing"
    | "Team"
    | "Achievement";

export default function JourneyTimelineCard(props: {
    monthYear: string;
    category: Category;
    description: string;
}) {
    const { monthYear, category, description } = props;

    return (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm px-6 py-5 max-w-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
            <div className="flex items-center gap-2 mb-2">
                <span
                    className={`text-xs font-semibold text-slate-600 px-3 py-1 rounded-full ${category === "Achievement" ? "bg-orange-100" : "bg-[#e6f7fa]"}`}
                >
                    {category}
                </span>
                <span className="text-xs font-semibold text-[#008fb3]">
                    {monthYear}
                </span>
            </div>
            <p className="text-sm md:text-base text-slate-800 leading-snug">
                {description}
            </p>
        </div>
    );
}
s;
