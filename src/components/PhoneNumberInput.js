import React from "react";

const PhoneNumberInput = (props) => {
  const {
    form,
    labelString,
    inputName,
    placeholder,
    validation,
    notes,
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
      <div className="flex">
        <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400">
          +62
        </span>
        <input
          type="number"
          className="block w-full min-w-0 flex-1 rounded-none rounded-r-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 [appearance:textfield] focus:border-gray-900 focus:ring-gray-900  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-900 dark:focus:ring-gray-900 sm:text-sm"
          placeholder={placeholder}
          onWheel={(e) => e.target.blur()}
          {...register(inputName, {
            onChange: (e) => {
              const deleteFirstZeroOfPhoneNumber = e.target.value.replace(
                /^0+/,
                ""
              );
              form.setValue(inputName, deleteFirstZeroOfPhoneNumber);
            },
            required: isRequired,
            validate: validation,
          })}
        />
      </div>
      {notes && <p className="ml-1 text-sm italic">{notes}</p>}
      {errors[inputName] &&
        (errors[inputName].type === "validate" ? (
          <span className="text-red-600">{labelString} tidak valid</span>
        ) : (
          <span className="text-red-600">Silakan isi {labelString}</span>
        ))}
    </div>
  );
};

export default PhoneNumberInput;
