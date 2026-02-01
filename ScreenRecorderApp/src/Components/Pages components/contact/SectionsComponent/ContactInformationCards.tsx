import { ContactCardData, type ContactCardProps } from "../contactData/ContactCardData";

const ContactInformationCards = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {ContactCardData.map((contact : ContactCardProps, index : number) => (
                <ContactCard
                    key={index}
                    icon={contact.icon}
                    title={contact.title}
                    content={contact.content}
                    gradient={contact.gradient}
                    bgColor={contact.bgColor}
                />
            ))}
        </section>
    )
}

export default ContactInformationCards

function ContactCard({ icon, title, content, gradient, bgColor }: ContactCardProps) {
    return (
        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-transparent">
            <div className={`${bgColor} w-20 h-20 rounded-xl flex items-center justify-center mb-5 bg-linear-to-br ${gradient} text-white group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                {icon}
            </div>
            <h3
                className="text-xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: 'var(--font-accent)' }}
            >
                {title}
            </h3>
            <p
                className="text-gray-600"
                style={{ fontFamily: 'var(--font-body)' }}
            >
                {content}
            </p>
        </div>
    );
}