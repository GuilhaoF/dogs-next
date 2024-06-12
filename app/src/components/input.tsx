type InputProps = React.ComponentProps<'input'> & {
  label: string;
  error?: string;
};

export default function Input({ label, error, ...props }: InputProps) {
  return (
    <div className="mb-4">
      <label className="block text-base pb-2" htmlFor={props.name}>
        {label}
      </label>
      <input
        className={`block w-full text-base px-2 py-3 rounded border border-gray-300 bg-gray-300 transition-all duration-200 focus:outline-none focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-300 ${error ? 'ring-2 ring-red-500' : ''}`}
        type="text"
        id={props.name}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}