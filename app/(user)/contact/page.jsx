"use client";

const contactAction = async (formData) => {
  const { name, email, message } = Object.fromEntries(formData);
  console.log(name, email, message);
};

const page = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-slate-900 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">
        This is Contact Page
      </h1>
      <form className="space-y-4" action={contactAction}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default page;
