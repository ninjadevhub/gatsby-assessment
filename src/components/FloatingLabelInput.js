import React from "react";

export default function FloatingLabelInput({
  label = "",
  required = false,
  placeholder = "",
  onChange = () => {},
  onFocus,
  value,
  onBlur,
  isError,
  ...rest
}) {
  const [isFocused, setFocus] = React.useState(false);

  const onFocusInput = (e) => {
    setFocus(true);
    onFocus && onFocus(e);
  };

  const onBlurInput = (e) => {
    setFocus(false);
    onBlur && onBlur(e);
  };
  return (
    <div className="relative w-full floatingInput">
      <input
        className={`name-input bg-transparent mt-[39px] w-full border-b-2 border-t-0 border-r-0 border-l-0 pl-0 ${
          isError ? "border-red-500" : "border-gray-600"
        } placeholder:text-[#FFF] focus:ring-0 outline-none`}
        placeholder={placeholder}
        name="fullName"
        value={value}
        onChange={onChange}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
        {...rest}
      />
      <label
        className={`label left-0 ${
            isFocused || value ? "active" : ""
        }`}
      >
        {label}
        {required && <span className="text-orangeColor">*</span>}
      </label>

      {isError && (
        <div className="text-red-500 text-sm absolute mt-1">{isError}</div>
      )}
    </div>
  );
}
