import React from "react";

const TextInput = (props) => {
  const {
    form,
    labelString,
    inputName,
    placeholder,
    validation,
    isRequired = true,
  } = props;
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="text-input-container">
      <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
        {labelString}
      </label>
      <input
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-gray-900 focus:ring-gray-900  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-900 dark:focus:ring-gray-900 sm:text-sm"
        placeholder={placeholder}
        {...register(inputName, { required: isRequired, validate: validation })}
      />
      {errors[inputName] &&
        (errors[inputName].type === "validate" ? (
          <span>{labelString} tidak valid</span>
        ) : (
          <span>Silakan isi {labelString}</span>
        ))}
    </div>
  );
};

export default TextInput;
