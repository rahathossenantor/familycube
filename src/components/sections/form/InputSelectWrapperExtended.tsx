import { MenuItem, SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputSelectWrapperExtendedProps = {
    name: string;
    fieldName: "division" | "district";
    size?: "small" | "medium";
    placeholder?: string;
    disabled?: boolean;
    label?: string;
    required?: boolean;
    fullWidth?: boolean;
    sx?: SxProps;
    items: any;
    setState: any;
};

const InputSelectWrapperExtended = ({
    items,
    name,
    fieldName,
    label,
    size = "small",
    required = true,
    fullWidth = true,
    sx = {},
    disabled = false,
    setState
}: TInputSelectWrapperExtendedProps
) => {
    const { control, formState } = useFormContext();
    const isError = formState.errors[name] !== undefined;

    const handleLocationInfoChange = (setState: any, fieldName: string, value: string) => {
        setState((prev: any) => ({
            ...prev,
            [fieldName]: value
        }));
    };

    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <TextField
                    {...field}
                    sx={sx}
                    size={size}
                    disabled={disabled}
                    select
                    label={label}
                    required={required}
                    fullWidth={fullWidth}
                    error={isError}
                    onChange={(e) => {
                        handleLocationInfoChange(setState, fieldName, e.target.value);
                    }}
                    helperText={
                        isError ? (formState.errors[name]?.message as string) : ""
                    }
                >
                    {
                        items?.map((name: any, idx: number) => (
                            <MenuItem key={idx} value={name}>
                                {name}
                            </MenuItem>
                        ))
                    }
                </TextField>
            )}
        />
    );
};

export default InputSelectWrapperExtended;
