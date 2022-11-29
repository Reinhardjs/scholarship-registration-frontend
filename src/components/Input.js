import React from "react";

const Input = (props) => {
  const {
    form,
    labelString,
    inputName,
    placeholder,
    validation,
    isRequired = true,
    isDisabled = false,
    type = "text",
    notes,
  } = props;
  const {
    register,
    formState: { errors },
  } = form;

  var conditionalProps = {};

  if (isDisabled) {
    conditionalProps.type = "string";
    conditionalProps.value = "-";
    if (form.getValues(inputName) !== "-") {
      setTimeout(() => {
        form.trigger(inputName);
      }, 1);
      form.setValue(inputName, "-");
    }
  } else {
    if (form.getValues(inputName) === "-") {
      form.setValue(inputName, "");
    }
  }

  return (
    <div className="text-input-container">
      <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
        {labelString}
      </label>
      <input
        type={type}
        step={type === "number" ? "any" : undefined}
        className={`block w-full rounded-lg border border-gray-300 ${
          isDisabled ? "bg-gray-300" : "bg-gray-50"
        } p-2.5 text-gray-900 focus:border-gray-900 focus:ring-gray-900  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-900 dark:focus:ring-gray-900 sm:text-sm`}
        placeholder={placeholder}
        onWheel={type === "number" ? (e) => e.target.blur() : undefined}
        disabled={isDisabled}
        {...conditionalProps}
        {...register(inputName, {
          onChange: (e) => {
            if (type === "number") {
              const deleteComma = e.target.value.replace(/,/g, "");
              form.setValue(inputName, deleteComma);
            }
          },
          required: isRequired,
          validate: validation,
        })}
      />
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

export default Input;
