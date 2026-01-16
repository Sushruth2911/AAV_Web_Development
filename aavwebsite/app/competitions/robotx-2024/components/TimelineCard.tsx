export default function TimelineCard(props: {
    monthYear: string;
    title: string;
    status: string;
}) {
    const { monthYear, status, title } = props;

    return (
        <div className="bg-white max-w-md rounded-3xl border border-slate-200 shadow-sm px-3 py-3 hover:shadow-lg transision-transform ease-in-out hover:scale-110 duration-200">
            <div className="flex items-center gap-2 mb-2 flex-row">
                <span
                    className={`text-xs font-semibold text-slate-600 px-3 py-1 rounded-full ${status === "Completed" ? "bg-[#42f590]" : "bg-[#f5e042]"}`}
                >
                    {status}
                </span>
                <div className="text-xs font-semibold text-[#008fb3]">
                    {monthYear}
                </div>
            </div>
            <p className="text-sm md:text-base text-slate-800 leading-snug">
                {title}
            </p>
        </div>
    );
}
