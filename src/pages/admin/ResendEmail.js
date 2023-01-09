import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

import Input from "../../components/Input";
import SelectInput from "../../components/SelectInput";
import Modal from "../../components/BasicModal";

axios.defaults.withCredentials = true;

const ResendEmail = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [isFailed, setIsFailed] = React.useState(false);
    const [responseMessage, setResponseMessage] = React.useState("");
    const [formData, setFormData] = React.useState();
    const form = useForm();
    const history = useHistory();
    const { handleSubmit } = form;

    const isValidEmail = (email) =>
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
        );

    const handleEmailValidation = (email) => {
        return isValidEmail(email);
    };

    const onSubmit = (data) => {
        setFormData(data);
        setIsModalOpen(true);
    };

    const handleOnConfirmSubmit = () => {
        setIsLoading(true);
        setTimeout(() => {
            console.log(formData);

            axios
                .post(
                    "https://api.daftarbeasiswamext.com/admin/resend-email",
                    formData
                )
                .then(
                    (response) => {
                        setIsLoading(false);
                        const { data } = response;
                        console.log(data); // data is object
                        if (data === "Email Sent Successfully") {
                            setIsSuccess(true);
                            form.reset();
                        } else {
                            setIsFailed(true);
                        }
                        setResponseMessage(data);
                    },
                    (error) => {
                        console.log(error);
                        alert(JSON.stringify(error));
                    }
                );
        }, 1000);
    };

    React.useEffect(() => {
        if (!isModalOpen) {
            setTimeout(() => {
                setIsSuccess(false);
                setIsFailed(false);
            }, 500);
        }
    }, [isModalOpen]);

    return (
        <React.Fragment>
            <div className="grid h-screen place-items-center">
                <div className="min-w-full">
                    <form
                        className="m-auto mt-10 mb-10 max-w-2xl bg-white py-8 px-7"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="space-y-4 p-2 sm:p-4 md:space-y-6">
                            <div className="flex  place-items-center">
                                <ArrowLeftIcon
                                    className="h-7 w-7 cursor-pointer text-red-600"
                                    onClick={() => {
                                        history.replace("/admin");
                                    }}
                                />
                            </div>

                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                                Resend Email
                            </h1>

                            <SelectInput
                                form={form}
                                labelString={"Tipe Registran"}
                                inputName={"table"}
                                data={["Japanese Studies", "Teacher Trainings"].map(
                                    (item) => {
                                        return { option: item, value: item };
                                    }
                                )}
                            />
                            <Input
                                form={form}
                                labelString={"Email Terdaftar"}
                                inputName={"email"}
                                validation={handleEmailValidation}
                                autoUppercase={false}
                                notes={"E-mail yang terdaftar"}
                            />

                            <div className="pt-2.5">
                                <button
                                    className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    type={"submit"}
                                >
                                    Submit
                                </button>
                            </div>

                            <Modal
                                open={isModalOpen}
                                setOpen={setIsModalOpen}
                                onConfirm={handleOnConfirmSubmit}
                                isLoading={isLoading}
                                isSuccess={isSuccess}
                                isFailed={isFailed}
                                responseMessage={responseMessage}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ResendEmail;
