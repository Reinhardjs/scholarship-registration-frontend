import React from "react";
import { useForm } from "react-hook-form";
import TextInput from "../components/TextInput";

const Registration = () => {
  const form = useForm();
  const { handleSubmit, watch } = form;

  const onSubmit = (data) => console.log(data);
  console.log(watch("nama"));

  return (
    <React.Fragment>
      <form
        className="m-auto mt-10 max-w-xl border py-10 px-12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextInput form={form} labelString={"Nama"} inputName={"nama"} />
        <TextInput form={form} labelString={"Email"} inputName={"email"} />
        <button
          className="text-md w-full rounded border bg-green-400  py-3 font-semibold hover:bg-green-600"
          type="submit"
        >
          Submit
        </button>
      </form>
    </React.Fragment>
  );
};

export default Registration;
