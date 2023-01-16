import React, { useContext, useState } from "react";
import { FaEdit, FaEye, FaTimes } from "react-icons/fa";
import Context from "../context/context";
import Modal from "react-modal";
import ModalEdition from "./ModalEdition";
import ModalDetails from "./ModalDetails";

function TableLine(props) {
  const { name, user, email, birth, id, img, isClient } = props;
  const { deleteClient, editModal, setEditModal, view, setView, setId } =
    useContext(Context);

  return (
    <tr className="border-b">
      {img ? (
        <td>
          <img className="user-img" src={img} />
        </td>
      ) : null}
      <td className="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
        {name}
      </td>
      <td className="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
        {email}
      </td>
      <td className="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
        {user}
      </td>
      <td className="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
        {birth}
      </td>
      {isClient ? (
        <td className="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
          <button
            className="mr-3"
            onClick={() => {
              setId(id);
              setView(true);
            }}
          >
            <FaEye />
          </button>
          <button
            className="mr-3"
            onClick={() => {
              setId(id);
              setEditModal(true);
            }}
          >
            <FaEdit />
          </button>
          <button className="mr-3" onClick={() => deleteClient(id)}>
            <FaTimes />
          </button>
        </td>
      ) : null}
      <Modal isOpen={editModal}>
        <ModalEdition id={id} />
      </Modal>
      <Modal isOpen={view}>
        <ModalDetails id={id} />
      </Modal>
    </tr>
  );
}

export default TableLine;
