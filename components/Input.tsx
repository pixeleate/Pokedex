export type InputType = {
  label: string;
  type?: string;
  name: string;
  onChangeHandler?: (e: any) => void;
};

const Input = ({ label, type = 'text', name, onChangeHandler }: InputType) => (
  <div className="flex mb-3">
    <p className="border-l border-t border-b rounded-l py-2 px-4 text-gray-600">
      {label}
    </p>
    <input
      name={name}
      type={type}
      className="flex-1 border py-2 rounded-r px-4 text-gray-600"
      onChange={onChangeHandler}
    />
  </div>
);

export default Input;
