import { MissionCardData, type MissionCardProps } from "../AboutData/MissionCardData";

const MissionAndVision = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {MissionCardData.map((mission : MissionCardProps, index : number) => (
                <MissionCard
                    key={index}
                    icon={mission.icon}
                    title={mission.title}
                    description={mission.description}
                    gradient={mission.gradient}
                />
            ))}
        </section>
    )
}

export default MissionAndVision

function MissionCard({ icon, title, description, gradient }: MissionCardProps) {
    return (
        <div className={`relative overflow-hidden bg-linear-to-br ${gradient} rounded-3xl p-10 shadow-2xl`}>
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '32px 32px'
                }}></div>
            </div>

            <div className="relative">
                <div className="inline-flex w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl items-center justify-center mb-6 text-white">
                    {icon}
                </div>
                <h3
                    className="text-3xl font-bold text-white mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    {title}
                </h3>
                <p
                    className="text-white/90 text-lg leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                >
                    {description}
                </p>
            </div>
        </div>
    );
}