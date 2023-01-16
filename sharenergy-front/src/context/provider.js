import React, { useState, useEffect } from 'react';
import Context from './context';
import axios from 'axios';
import { headers } from '../services/login';
function Provider({ children }) {
    const [data, setData] = useState([]); 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [cpf, setCpf] = useState("");
    const [nameEdit, setNameEdit] = useState("");
    const [emailEdit, setEmailEdit] = useState("");
    const [phoneEdit, setPhoneEdit] = useState("");
    const [addressEdit, setAddressEdit] = useState("");
    const [cpfEdit, setCpfEdit] = useState("");
    const [editModal, setEditModal] = useState(false)
    const [view, setView] = useState(false)
    const [user, setUser] = useState({})
    const [id, setId] = useState(0)

  async function fetchClients() {
    const endpointMain = `https://sharenergy-back.fly.dev/clientes`;
    await axios
      .get(endpointMain, headers)
      .then(function (response) {
        console.log(response)
        setData(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async function deleteClient(id) {
    const endpointMain = `https://sharenergy-back.fly.dev/clientes/${id}`;
    await axios
      .delete(endpointMain, headers)
      .then(function (response) {
        console.log(response)
        fetchClients()
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async function editClient(id) {
    const endpointMain = `https://sharenergy-back.fly.dev/clientes/${id}`;
    await axios
      .put(endpointMain, {
        name: nameEdit,
        email: emailEdit,
        phone:phoneEdit,
        address:addressEdit,
        cpf:cpfEdit,
      }, headers)
      .then(function (response) {
        console.log(response)
        fetchClients()
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async function getClient(id) {
    const endpointMain = `https://sharenergy-back.fly.dev/clientes/${id}`;
    await axios
      .get(endpointMain, headers)
      .then(function (response) {
        console.log(response)
        setUser(response.data)
        setAddressEdit(response.data.address)
        setCpfEdit(response.data.cpf)
        setPhoneEdit(response.data.phone)
        setNameEdit(response.data.name)
        setEmailEdit(response.data.email)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async function submitClient() {
    const endpointMain = `https://sharenergy-back.fly.dev/novo-cliente`;
    await axios
      .post(endpointMain, {
        name,
        email,
        phone:parseInt(phone.replace(/[^0-9]/g, ''), 10),
        address,
        cpf,
      }, headers)
      .then(function (response) {
        console.log(response);
        fetchClients()
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    return () => fetchClients();
  }, []);

      const context = {
        data,
        setData,
        name,
        setName,
        email,
        setEmail,
        address,
        setAddress,
        cpf,
        setCpf,
        phone,
        setPhone,
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
        id,
        setId,
        editModal,
        view,
        user,
        setUser,
        setView,
        setEditModal,
        setPhone,
        deleteClient,
        submitClient,
        editClient,
        getClient
      };
    
    return (
        <Context.Provider value={ context }>
          { children }
        </Context.Provider>
      );
}

export default Provider