import React from "react";

const PhoneNumberInput = (props) => {
  const { form, labelString, inputName, placeholder, validation } = props;
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="text-input-container">
      <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
        {labelString}
      </label>
      <div class="flex">
        <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400">
          +62
        </span>
        <input
          type="number"
          class="block w-full min-w-0 flex-1 rounded-none rounded-r-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 [appearance:textfield] focus:border-gray-900 focus:ring-gray-900  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-900 dark:focus:ring-gray-900"
          placeholder={placeholder}
          {...register(inputName, { required: true, validate: validation })}
        />
      </div>
      {errors[inputName] &&
        (errors[inputName].type === "validate" ? (
          <span>{labelString} tidak valid</span>
        ) : (
          <span>Silakan isi {labelString}</span>
        ))}
    </div>
  );
};

export default PhoneNumberInput;
