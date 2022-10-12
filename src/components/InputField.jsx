const InputField = ({ label, inputProp, onChange, value }) => {
  return (
    <div className="flex flex-col">
      <label className="md-2 text-base text-gray-800">{label}</label>
      <input
        className="bg-gray-200 py-2 px-2 border-2 outline-none"
        {...inputProp}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default InputField;
