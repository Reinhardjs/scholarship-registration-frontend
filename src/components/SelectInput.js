import React from "react";

const SelectInput = (props) => {
  const { form, labelString, inputName, data } = props;
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
        {labelString}
      </label>
      <select
        className="form-select m-0 block w-full appearance-none rounded-lg border border-gray-300 bg-gray-50 bg-clip-padding bg-no-repeat p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
        aria-label="Default select example"
        {...register(inputName, {
          required: true,
        })}
        defaultValue=""
      >
        <option value="">-- Pilih {labelString} --</option>
        {data.map((item) => {
          return <option value={item.value}>{item.option}</option>;
        })}
      </select>
      {errors[inputName] &&
        (errors[inputName].type === "validate" ? (
          <span>{labelString} tidak valid</span>
        ) : (
          <span>Silakan pilih {labelString}</span>
        ))}
    </div>
  );
};

export default SelectInput;
