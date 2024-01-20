/* eslint-disable react/prop-types */

export default function Pagenation({ page, setpage, totalData }) {
  const totalpage = Math.ceil(totalData / 10);

  return (
    <div className="flex justify-end">
      <div
        className={`join border b
         `}
      >
        <button
          onClick={() => setpage((old) => old - 1)}
          disabled={page < 2}
          className={`join-item btn bg-red-100  disabled:bg-red-100 disabled:text-neutral border border-gray-200
            `}
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>
        {[...Array(totalpage).keys()].map((ele) => {
          return (
          <button
              key={ele * 3}
              onClick={() => setpage(ele + 1)}
              className={`join-item btn bg-red-100  ${ page === ele + 1 && "outlinebtn" }`}
            >
              {ele + 1}
            </button>
          );
        })}
        <button
          onClick={() => setpage((old) => old + 1)}
          disabled={page === totalpage}
          className={`join-item btn bg-red-100   disabled:bg-red-100 disabled:text-neutral`}
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
}
