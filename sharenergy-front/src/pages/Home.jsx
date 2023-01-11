import React from "react";

const Home = (props) => {
  return (
    <div className="w-full max-w-md space-y-8 p-5 bg-gray-100">
      <div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Entre na sua conta
        </h2>
      </div>
      <form className="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" className="sr-only">
              Login
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              className="mb-5 relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Login"
            />
          </div>
          <div>
            <label for="password" className="sr-only">
              Senha
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Senha"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label for="remember-me" className="ml-2 block text-sm text-gray-900">
              Lembrar-me
            </label>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
