import React, { useState, useContext, useEffect } from "react";
import InputMask from "react-input-mask";
import Context from "../context/context";

function ModalEdition(props) {
  const {
    editClient,
    getClient,
    user,
    setEditModal,
    id,
    nameEdit,
    setNameEdit,
    emailEdit,
    setEmailEdit,
    addressEdit,
    setAddressEdit,
    cpfEdit,
    setCpfEdit,
    phoneEdit,
    setPhoneEdit,
  } = useContext(Context);

  useEffect(() => {
    return () => getClient(id);
  }, []);
  return (
    <form className="w-full">
      {console.log(user)}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Nome Completo
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Hashibira Inosuke"
            value={nameEdit}
            onChange={(e) => setNameEdit(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            value={emailEdit}
            onChange={(e) => setEmailEdit(e.target.value)}
            type="text"
            placeholder="email@email.com"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-city"
          >
            Telefone
          </label>
          <InputMask
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-city"
            type="tel"
            value={phoneEdit}
            onChange={(e) => setPhoneEdit(e.target.value)}
            placeholder="(99) 99999-9999"
            mask="(99) 99999-9999"
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-city"
          >
            Endereço
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-city"
            type="text"
            onChange={(e) => setAddressEdit(e.target.value)}
            placeholder="Baker Street, 221B"
            value={addressEdit}
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-zip"
          >
            CPF
          </label>
          <InputMask
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-zip"
            type="text"
            placeholder="000.000.000-00"
            value={cpfEdit}
            onChange={(e) => setCpfEdit(e.target.value)}
            mask="999.999.999-99"
          />
        </div>
      </div>
      <button
        type="button"
        className="mr-5 mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => {
          editClient(id);
          setEditModal(false);
        }}
      >
        Atualizar
      </button>
      <button
        type="button"
        className="mr-5 mt-5 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => setEditModal(false)}
      >
        Cancelar
      </button>
    </form>
  );
}

export default ModalEdition;
