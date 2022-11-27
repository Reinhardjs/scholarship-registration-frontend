import React from "react";
import Datepicker from "flowbite-datepicker/Datepicker";

const DatePickerInput = (props) => {
  const { form, labelString, inputName, notes } = props;
  const {
    register,
    formState: { errors },
    trigger,
    setValue,
  } = form;

  const triggerOnDateChanged = React.useCallback(
    (e) => {
      setValue(inputName, e.target.value);
      trigger(inputName);
    },
    [inputName, setValue, trigger]
  );

  React.useEffect(() => {
    const datepickerEl = document?.getElementById("datePicker");
    new Datepicker(datepickerEl, {
      format: "yyyy-mm-dd",
      autohide: true,
    });
    datepickerEl.addEventListener("changeDate", triggerOnDateChanged);

    return () => {
      datepickerEl.removeEventListener("changeDate", triggerOnDateChanged);
    };
  }, [triggerOnDateChanged]);

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
        {labelString}
      </label>
      <div className="flex">
        <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        <input
          id="datePicker"
          {...register(inputName, { required: true })}
          defaultValue=""
          className="block w-full min-w-0 flex-1 rounded-none rounded-r-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 [appearance:textfield] focus:border-gray-900 focus:ring-gray-900  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-900 dark:focus:ring-gray-900 sm:text-sm"
          placeholder={"Pilih " + labelString}
        />
      </div>
      {notes && <p className="ml-1 text-sm italic">{notes}</p>}
      {errors[inputName] &&
        (errors[inputName].type === "validate" ? (
          <span className="text-red-600">{labelString} tidak valid</span>
        ) : (
          <span className="text-red-600">Silakan pilih {labelString}</span>
        ))}
    </div>
  );
};

export default DatePickerInput;
