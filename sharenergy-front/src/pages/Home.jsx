import React, { useEffect, useState } from "react";
import axios from "axios";
import { persist } from "../services/login";
import { useNavigate } from "react-router-dom";
import loading from '../assets/loading.svg'

const Home = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [persistUser, setPersistUser] = useState(false);
  const [message, setMessage] = useState("");
  const [loadingUser, setLoading] = useState(false)
  const navigate = useNavigate()
  
  useEffect(() => {
    if (localStorage.getItem("userData")) {
      setUserName(JSON.parse(localStorage.getItem("userData")).userName);
      setPassword(JSON.parse(localStorage.getItem("userData")).password);
      setPersistUser(true);
    }
  }, []);
  
  const login = async () => {
    setLoading(true)
    await axios
    .post("https://sharenergy-back.fly.dev/login", {
      userName,
      password,
    })
    .then((response) => {
      console.log(response.data.token);
      localStorage.setItem("userToken", response.data.token);
      persist(persistUser, userName, password);
      setLoading(false)
      navigate("/main");
    })
    .catch((error) => {
      console.log(error);
      setMessage(error.response.data.message);
      setLoading(false)
      });
  };
  return (
    <div className="flex min-h-full items-center bg-gray-800 justify-center py-12 px-4 sm:px-6 lg:px-8">
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
              <label htmlFor="email-address" className="sr-only">
                Login
              </label>
              <input
                id="email-address"
                name="email"
                type="name"
                required
                className="mb-5 relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Login"
                onChange={(event) => setUserName(event.target.value)}
                value={userName}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
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
                value={password}
                onChange={(event) => setPassword(event.target.value)}
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
                value={persistUser}
                checked={persistUser}
                onChange={(event) => setPersistUser(event.target.checked)}
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Lembrar-me
              </label>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <button
              type="button"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mb-4"
              onClick={() => login()}
            >
              {!loadingUser ?"Entrar": <img src={loading} width={50} />}
            </button>
            <span className="text-red-500 ml-auto mr-auto">{message}</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
