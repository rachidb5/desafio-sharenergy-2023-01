import React, { useEffect, useContext } from "react";
import InputMask from "react-input-mask";
import Context from "../context/context";

function ModalDetails(props) {
  const { getClient, user, setView } = useContext(Context);
  const { id } = props;

  useEffect(() => {
    return () => getClient(id);
  }, []);

  return (
    <div className="w-full">
      <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
        Detalhes do cliente
      </h1>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div class="bg-white max-w-xs mx-auto rounded-sm transition duration-500 transform hover:scale-100 cursor-pointer">
          <div class="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
            <p>ID</p>
          </div>
          <p class="py-4 ml-5">{user._id}</p>
        </div>
        <div class="bg-white max-w-xs mx-auto rounded-sm transition duration-500 transform hover:scale-100 cursor-pointer">
          <div class="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
            <p>NOME</p>
          </div>
          <p class="py-4 ml-5">{user.name}</p>
        </div>
        <div class="bg-white max-w-xs mx-auto rounded-sm transition duration-500 transform hover:scale-100 cursor-pointer">
          <div class="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
            <p>EMAIL</p>
          </div>
          <p class="py-4 ml-5">{user.email}</p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div class="bg-white max-w-xs mx-auto rounded-sm transition duration-500 transform hover:scale-100 cursor-pointer">
          <div class="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
            <p>TELEFONE</p>
          </div>
          <p class="py-4 ml-5">{user.phone}</p>
        </div>
        <div class="bg-white max-w-xs mx-auto rounded-sm transition duration-500 transform hover:scale-100 cursor-pointer">
          <div class="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
            <p>CPF</p>
          </div>
          <p class="py-4 ml-5">{user.cpf}</p>
        </div>
        <div class="bg-white max-w-xs mx-auto rounded-sm transition duration-500 transform hover:scale-100 cursor-pointer">
          <div class="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
            <p>ENDEREÇO</p>
          </div>
          <p class="py-4 ml-5">{user.address}</p>
        </div>
      </div>
      <button
        type="button"
        className="mr-5 mt-5 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => setView(false)}
      >
        Sair
      </button>
    </div>
  );
}

export default ModalDetails;
