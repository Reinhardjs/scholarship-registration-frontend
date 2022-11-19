import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import TextInput from "../components/TextInput";

const JapaneseStudiesRegistration = () => {
  const form = useForm();
  const history = useHistory();
  const { handleSubmit } = form;

  const isValidEmail = (email) =>
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  const handleEmailValidation = (email) => {
    return isValidEmail(email);
  };

  const onSubmit = (data) => console.log(data);

  return (
    <React.Fragment>
      <div className="grid h-screen place-items-center">
        <div className="min-w-full">
          <form
            className="m-auto mt-10 mb-10 max-w-2xl rounded-lg border bg-white py-8 px-7 shadow"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="space-y-4 p-2 sm:p-4 md:space-y-6">
              <div className="flex  place-items-center">
                <ArrowLeftIcon
                  className="h-7 w-7 cursor-pointer text-blue-500"
                  onClick={() => {
                    history.goBack();
                  }}
                />
              </div>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                Students Registration
              </h1>
              <TextInput form={form} labelString={"Nama"} inputName={"name"} />
              <TextInput
                form={form}
                labelString={"Alamat"}
                inputName={"address"}
              />
              <TextInput
                form={form}
                labelString={"Telepon"}
                inputName={"telephone"}
              />
              <TextInput
                form={form}
                labelString={"Handphone"}
                inputName={"handphone"}
              />
              <TextInput
                form={form}
                labelString={"Jenis Kelamin"}
                inputName={"gender"}
              />
              <TextInput
                form={form}
                labelString={"Tanggal Lahir"}
                inputName={"birthdate"}
              />
              <TextInput
                form={form}
                labelString={"Email"}
                inputName={"email"}
                validation={handleEmailValidation}
              />
              <TextInput
                form={form}
                labelString={"Japanese Resident?"}
                inputName={"japaneseResident"}
              />
              <TextInput
                form={form}
                labelString={"Provinsi"}
                inputName={"province"}
              />
              <TextInput form={form} labelString={"Kota"} inputName={"city"} />
              <TextInput
                form={form}
                labelString={"Universitas"}
                inputName={"university"}
              />
              <TextInput
                form={form}
                labelString={"Semester"}
                inputName={"semester"}
              />
              <TextInput form={form} labelString={"IPK"} inputName={"ipk"} />
              <TextInput form={form} labelString={"JLPT"} inputName={"jlpt"} />
              <TextInput
                form={form}
                labelString={"JLPT Score"}
                inputName={"jlptScore"}
              />
              <TextInput
                form={form}
                labelString={"Lokasi Test"}
                inputName={"testLocation"}
              />
              <div className="pt-2.5">
                <button
                  className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
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
