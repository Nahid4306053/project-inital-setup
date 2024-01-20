/* eslint-disable react/prop-types */
export default function Cheackbox({ label, id ,mt }) {
  return (
    <div className={`flex items-center ${mt || "mt-3"}  gap-2`}>
      <input
        type="checkbox"
        id={id}
        className="checkbox checkbox-xs  border border-gray-500"
      />
      <label htmlFor={id} className="text-gray-500 text-[16px]">
        {label}
      </label>
    </div>
  );
}
