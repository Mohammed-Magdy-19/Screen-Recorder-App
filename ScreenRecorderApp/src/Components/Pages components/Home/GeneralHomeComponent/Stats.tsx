import { StatItemData, type StatItemProps } from "../HomeData/StatItems";

{/* Stats */}
const Stats = () => {
    return (
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-20">
            {StatItemData.map((stat : StatItemProps, index: number) =>(
                <StatItem key={index} number={stat.number} label={stat.label} />
            ) )}
        </div>
    )
}

function StatItem({ number, label }: StatItemProps) {
    return (
        <div className="text-center">
            <div
                className="text-4xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2"
                style={{ fontFamily: 'var(--font-display)' }}
            >
                {number}
            </div>
            <div
                className="text-sm text-gray-600 font-medium"
                style={{ fontFamily: 'var(--font-accent)' }}
            >
                {label}
            </div>
        </div>
    );
}
export default Stats;
