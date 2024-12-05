type InputProps = {
  name: string;
  id: string;
  type: string;
  label: string;
  className?: string;
};

export default function InputField({
  name,
  id,
  type,
  label,
  className,
}: InputProps) {
  return (
    <div className={`relative w-full mb-6 ${className ? className : ""}`}>
      <input
        type={type}
        name={name}
        id={id}
        className={`py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-2 rounded-md border-gray-500 focus:outline-none focus:ring-0 peer placeholder-transparent`}
        placeholder=" "
        autoComplete="off"
        required
      />

      <label
        htmlFor={id}
        className="absolute text-sm text-gray-500 bg-[#D9D9D9] px-1 ml-2 duration-300 transform -translate-y-5 scale-75 top-3 left-0 z-10 peer-focus:p-1 peer-focus:text-[#4B4A4A] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
    </div>
  );
}
