import Header from "./Header";
const Login = () => {
  return (
    <div>
      <Header />

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://assets.nflxext.com/ffe/siteui/vlv3/30c8b9f4-3db9-4b3b-a1ee-8fa56531b712/web/GB-en-20251201-TRIFECTA-perspective_4f0dccae-87a2-42e3-a9ef-424c59a24c99_large.jpg')",
        }}
      ></div>

      <form className="w-1/2 p-12 m-36 bg-black absolute mx-auto right-0 left-0 text-white ">
        <h1 className="font-bold text-3xl py-5">Sign In</h1>
        <input type="text" placeholder="Email" className="py-2 m-2 w-full" />
        <input
          type="password"
          placeholder="password"
          className="py-2 m-2 w-full"
        />
        <button className="p-4 m-2 bg-red-700 w-full">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
