"use client";

const Button = () => {
  const handleBtnClick = () => {
    alert("Button Clicked");
  };
  return (
    <div>
      <button
        onClick={handleBtnClick}
        className="bg-blue-500 cursor-pointer text-white py-2 px-4 rounded"
      >
        Click me!
      </button>
    </div>
  );
};

export default Button;
