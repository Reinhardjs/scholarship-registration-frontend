import React from "react";
import Datepicker from "flowbite-datepicker/Datepicker";

const DatePickerInput = (props) => {
  const { form, labelString, inputName } = props;
  const {
    register,
    formState: { errors },
  } = form;

  React.useEffect(() => {
    const datepickerEl = document?.getElementById("datePicker");
    new Datepicker(datepickerEl, {
      format: "dd-mm-yyyy",
      autohide: true,
    });
  }, []);

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
        {labelString}
      </label>
      <div class="relative">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            aria-hidden="true"
            class="h-5 w-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          id="datePicker"
          {...register(inputName, { required: true })}
          defaultValue=""
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder={"Pilih " + labelString}
        />
      </div>
      {errors[inputName] &&
        (errors[inputName].type === "validate" ? (
          <span>{labelString} tidak valid</span>
        ) : (
          <span>Silakan pilih {labelString}</span>
        ))}
    </div>
  );
};

export default DatePickerInput;
