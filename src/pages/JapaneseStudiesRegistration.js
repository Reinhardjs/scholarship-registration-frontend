import React from "react";
import { useForm } from "react-hook-form";
import TextInput from "../components/TextInput";

const JapaneseStudiesRegistration = () => {
  const form = useForm();
  const { handleSubmit, watch } = form;

  const onSubmit = (data) => console.log(data);
  console.log(watch("nama"));

  return (
    <React.Fragment>
      <div class="grid h-screen place-items-center">
        <div class="min-w-full">
          <form
            className="m-auto max-w-2xl border py-10 px-12"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div class="space-y-4 p-2 sm:p-4 md:space-y-6">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                Students Registration
              </h1>
              <TextInput form={form} labelString={"Nama"} inputName={"nama"} />
              <TextInput
                form={form}
                labelString={"Email"}
                inputName={"email"}
              />
              <div class="pt-2.5">
                <button
                  class="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default JapaneseStudiesRegistration;
