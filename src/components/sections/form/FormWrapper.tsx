import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TFormProps = {
    children: React.ReactNode;
    onSubmit: SubmitHandler<FieldValues>;
};

type TFormConfig = {
    resolver?: any;
    defaultValues?: Record<string, any>;
};

const FormWrapper = ({ children, onSubmit, resolver, defaultValues }: TFormProps & TFormConfig) => {
    const formConfig: TFormConfig = {};
    if (resolver) {
        formConfig["resolver"] = resolver;
    };

    if (defaultValues) {
        formConfig["defaultValues"] = defaultValues;
    };

    const methods = useForm(formConfig);
    const { handleSubmit, reset } = methods;

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={handleSubmit((values) => {
                    onSubmit(values);
                    // reset();
                })}
                className="border border-gray-200 p-4 lg:p-6 rounded-lg"
            >
                {children}
            </form>
        </FormProvider>
    );
};

export default FormWrapper;
