import { useCallback } from "react";
import * as Yup from "yup";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import { Stack, Alert } from "@mui/material";
import FormProvider from "../hoot-form/FormProvider";
import RHFTextField from "../hoot-form/RHFTextField";
// components

// ----------------------------------------------------------------------

export default function ProfileForm() {
  const LoginSchema = Yup.object().shape({
    name: Yup.string().required("Email is required"),

    about: Yup.string().required("About is required"),
    avatarUrl: Yup.string().required("Avatar is required").nullable(true),
  });

  const defaultValues = {
    name: "",
    about: "",
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    setValue,
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;

  const values = watch();

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles(0);
      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });
      if (file) {
        setValue("avatarUrl", newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  const onSubmit = async (data) => {
    try {
      console.log("DATA", data);
    } catch (error) {
      console.error(error);
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}

        <RHFTextField
          name="name"
          label="Email address"
          helperText={"This name is visible to Public"}
        />

        <RHFTextField
          multiline
          rows={3}
          maxRows={5}
          name="about"
          label="About"
        />
      </Stack>
      <div className="flex justify-end p-4">
      <button className="btn btn-outline text-accent bg-none  hover:bg-accent hover:text-white hover:border-none"  type="submit" >Save</button>
      </div>
    </FormProvider>
  );
}
