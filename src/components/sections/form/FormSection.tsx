type TFormSectionProps = {
    children: React.ReactNode;
    title: string;
};

const FormSection = ({ children, title }: TFormSectionProps) => {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
            <div
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6"
            >
                {children}
            </div>
        </div>
    );
};

export default FormSection;
