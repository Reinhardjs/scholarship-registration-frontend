import React from "react";

const SelectInput2 = (props) => {
  const {
    form,
    labelString,
    inputLabel1,
    inputLabel2,
    inputName1,
    inputName2,
    data1,
    data2,
    notes,
  } = props;
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div>
      {labelString !== "" && (
        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          {labelString}
        </label>
      )}
      <div className="grid grid-cols-2 gap-4">
        <select
          className="form-select m-0 block w-full appearance-none rounded-lg border border-gray-300 bg-gray-50 bg-clip-padding bg-no-repeat p-2.5 text-gray-900 focus:border-gray-900 focus:ring-gray-900  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-900 dark:focus:ring-gray-900 sm:text-sm"
          aria-label="Default select example"
          {...register(inputName1, {
            required: true,
          })}
          defaultValue=""
        >
          <option value="">-- Pilih {inputLabel1} --</option>
          {data1.map((item, key) => {
            return (
              <option key={key} value={item.value}>
                {item.option}
              </option>
            );
          })}
        </select>
        <select
          className="form-select m-0 block w-full appearance-none rounded-lg border border-gray-300 bg-gray-50 bg-clip-padding bg-no-repeat p-2.5 text-gray-900 focus:border-gray-900 focus:ring-gray-900  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-900 dark:focus:ring-gray-900 sm:text-sm"
          aria-label="Default select example"
          {...register(inputName2, {
            required: true,
          })}
          defaultValue=""
        >
          <option value="">-- Pilih {inputLabel2} --</option>
          {data2.map((item, key) => {
            return (
              <option key={key} value={item.value}>
                {item.option}
              </option>
            );
          })}
        </select>
      </div>

      {notes && <p className="ml-1 text-sm italic">{notes}</p>}
      {errors[inputName1] && (
        <span className="text-red-600">Silakan pilih {inputLabel1}</span>
      )}
      {errors[inputName2] && (
        <span className="text-red-600">Silakan pilih {inputLabel2}</span>
      )}
    </div>
  );
};

export default SelectInput2;
