import React from "react";

const TextInput = (props) => {
  const { form, labelString, inputName } = props;
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="text-input-container">
      <label className="font-medium text-gray-600">{labelString}</label>
      <input
        className="w-full rounded border border-solid border-gray-300 py-2 px-4 text-gray-700"
        {...register(inputName, { required: true })}
      />
      {errors[inputName] && <span>Silakan isi {labelString} Anda</span>}
    </div>
  );
};

export default TextInput;
