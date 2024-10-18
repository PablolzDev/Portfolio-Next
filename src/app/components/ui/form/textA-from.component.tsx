interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
  }
  
  export const TextArea: React.FC<TextAreaProps> = ({ label, ...props }) => (
    <textarea
      {...props}
      className="w-full bg-emerald-100  border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-white resize-none"
    />
  );