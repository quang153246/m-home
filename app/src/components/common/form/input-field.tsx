import { BaseTextFieldProps, SxProps, TextField } from "@mui/material";
import { Controller, FieldValues } from "react-hook-form";

export interface InputFieldProps extends BaseTextFieldProps {
  name: string;
  label: string;
  form: FieldValues;
  disabled?: boolean;
  placeholder?: string;
  sx?: SxProps;
}

export function InputField(props: InputFieldProps) {
  const {
    name,
    label,
    form,
    disabled = false,
    placeholder,
    sx = {},
    ...resProps
  } = props;
  const { control } = form;

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState, formState }) => (
          <TextField
            {...field}
            label={label}
            placeholder={placeholder}
            disabled={disabled}
            error={Boolean(fieldState?.error)}
            helperText={fieldState?.error?.message}
            FormHelperTextProps={{
              style: {
                margin: 0,
                marginTop: '3px'
              },
            }}
            fullWidth
            size="small"
            sx={{
              "&:hover": {
                bgcolor: "#ccc",
              },
              ".MuiOutlinedInput-notchedOutline":{
                border: "none",
                boxShadow: 'inset 2px 2px 10px 0 red',
              },
              "& input": { py: 1.25, border: "none", bgcolor: "white", borderRadius: "5px",},
              ...sx,
            }}
            {...resProps}
          />
        )}
      />
    </>
  );
}
