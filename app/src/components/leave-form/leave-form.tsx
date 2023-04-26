import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useForm, FieldValues } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputField } from "../common/form/input-field";
import CustomButton from "../common/button";
import { useTheme } from "@mui/material";
import { MultilineTextField } from "../common/form/multiline-text-field";
import { boxShadow1 } from "../../theme/common";

function LeaveInfoForm() {
  const theme = useTheme();

  const schema = yup.object({
    email: yup
      .string()
      .required("Vui lòng để lại Email")
      .email("Email không đúng"),
    phone: yup
      .number()
      .required("Vui lòng để lại số điện thoại")
      .typeError("Số điện thoại không hợp lệ"),
    name: yup.string().required("Vui lòng để lại tên của bạn"),
  });

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    resolver: yupResolver(schema),
  });

  const { handleSubmit } = form;
  const handleFormSubmit = async (values: FieldValues) => {
    form.reset();
  };

  return (
    <Box
      component="form"
      id="leave-infomation-form"
      onSubmit={handleSubmit(handleFormSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        bgcolor: "inherit",
        borderRadius: "8px",
        px: 4,
        pt: 2,
        pb: 4,
        border: "1px solid #ebebeb",
      }}
    >
      <Typography sx={{ fontSize: "20px", fontWeight: 700}}>
        Liên hệ với chúng tôi
      </Typography>
      <Typography sx={{ fontSize: "14px", color: 'primary.light'}}>
        Để lại thông tin để chúng tôi có thể tư vấn đầy đủ hơn cho bạn.
      </Typography>
      <InputField
        type="text"
        placeholder="Nhập tên của bạn"
        form={form}
        label=""
        name="name"
      />
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
      <MultilineTextField
        type="text"
        placeholder="Lời nhắn"
        form={form}
        label=""
        name="message"
      />
      <Button
        variant="outlined"
        sx={{
          color: theme.palette.primary.main,
          height: "40px",
          fontWeight: 600,
          fontSize: "16px",
          border: `1px solid ${theme.palette.primary.main}`,
        }}
      >
        Gửi liên hệ
      </Button>
    </Box>
  );
}

export default LeaveInfoForm;
