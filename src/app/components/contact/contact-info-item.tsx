interface ContactInfoItemProps {
    icon: React.ReactNode;
    text: string;
}

export default function ContactInfoItem({ icon, text }: ContactInfoItemProps) {
    return(

        <div className="flex items-center space-x-4">
        <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center">
            {icon}
        </div>
        <span className="text-slate-300">{text}</span>
        </div>
    )
    
};

