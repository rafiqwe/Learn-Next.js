const Servercomp = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(url);
  const data = await res.json();
  return (
    <div>
      <h1 className="text-6xl font-bold text-center ">Server Components</h1>
      <div className="w-full flex flex-col items-center justify-center mt-5 ">
        <p className="text-2xl font-semibold text-green-200">
          This is a server component
        </p>
        <p className="text-2xl font-semibold text-green-200">
          It can be rendered on the server side
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {data.map((items, idx) => (
          <div key={idx} className="border rounded-2xl p-4">
            <h2 className="font-bold"> Title: {items.title}</h2>
            <p className="mt-3">
              <b>Body:</b> {items.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servercomp;
