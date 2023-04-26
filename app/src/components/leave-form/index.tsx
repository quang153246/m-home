import React from "react";
import { Box } from "@mui/material";
import { useForm, FieldValues } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputField } from "../common/form/input-field";
import CustomButton from "../common/button";
import { useTheme } from "@mui/material";

function LeaveForm() {
  const theme = useTheme();

  const schema = yup.object({
    email: yup.string().required("Vui lòng để lại Email").email("Email không đúng"),
    phone: yup
      .number()
      .required("Vui lòng để lại số điện thoại")
      .typeError("Số điện thoại không hợp lệ"),
    message: yup.string().required("Vui lòng để lại lời nhắn"),
  });

  const form = useForm({
    defaultValues: {
      email: "",
      phone: "",
      message: "",
    },
    resolver: yupResolver(schema),
  });

  const { handleSubmit } = form;
  const handleFormSubmit = async (values: FieldValues) => {
    console.log(form.getValues())
    form.reset();
  };

  return (
    <Box
      component="form"
      id="leave-infomation-form"
      onSubmit={handleSubmit(handleFormSubmit)}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: "10px",
        bgcolor: 'inherit',
        px: "50px",
        py: "15px",
      }}
    >
      <InputField
        type="emai"
        placeholder="Email"
        form={form}
        label=""
        name="email"
      />
      <InputField
        type="number"
        placeholder="Số điện thoại"
        form={form}
        label=""
        name="phone"
      />
      <InputField
        type="text"
        placeholder="Lời nhắn"
        form={form}
        label=""
        name="message"
      />
      <CustomButton
        label="GỬI ĐI"
        type="submit"
        // bgcolor= {theme.palette.primary.main}
        sx={{ minWidth: "150px", height: "40px", borderRadius: "5px", }}
       
      />
    </Box>
  );
}

export default LeaveForm;
