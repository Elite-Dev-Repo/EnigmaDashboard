import React from "react";
import signin from "./assets/signin.svg";

const Login = () => {
  return (
    <>
      <section className="h-screen w-screen">
        <div className="flex h-full w-full items-center justify-center">
          <div className="flex-1 ">
            <img src={signin} alt="login img" className="w-full h-full" />
          </div>

          <div className="flex-1">
            <form action="/dashboard" className="flex flex-col gap-5 w-[80%] ">
              <div className="flex flex-col gap-2 mb-6">
                <h2 className="text-4xl font-bold text-secondary">Welcome!</h2>
                <p className="text-sm text-muted-foreground">
                  Enter details to login.
                </p>
              </div>

              <input
                type="text"
                placeholder="Email"
                required
                className="w-full p-4 border border-border rounded-sm"
              />
              <div className="flex justify-between items-center w-full border border-border rounded-sm">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  className="w-full p-4"
                />
                <p className="uppercase text-primary cursor-pointer p-4 hover:bg-slate-100">
                  show
                </p>
              </div>
              <a href="#" className="text-primary uppercase">
                Forgot Password?
              </a>
              <button className="bg-primary text-white uppercase w-full p-4 rounded-sm">
                Log In
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
