import React, { useState, useEffect } from 'react';
import Context from './context';
import axios from 'axios';
import { headers } from '../services/login';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

function Provider({ children }) {
    const [data, setData] = useState([]); 
    const [dataMain, setDataMain] = useState([]); 
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
    const [pageNumber, setPageNumber] = useState(1);
    const [results, setResults] = useState(5);
    const [loadingTable, setLoadingTable] = useState(true)
    const [loadingNewClient, setLoadingNewClient] = useState(false)
    const [loadingClient, setLoadingClient] = useState(true)
    const [login, setLogin] = useState(false)

    const navigate = useNavigate()
    const notify = (text) => toast(text);

  async function fetchClients() {
    setLoadingTable(true)
    const endpointMain = `https://sharenergy-back.fly.dev/clientes`;
    await axios
    .get(endpointMain, headers)
    .then(function (response) {
      console.log(response)
      setLoadingTable(false)
      setData(response.data)
    })
    .catch(function (error) {
      console.log(error.response.data.message);
      toast(error.response.data.message)
      setLoadingTable(false)
    });
    //setLoadingTable(false)
  }
  async function checkAuth() {
    setLoadingTable(true)
    const endpointMain = `https://sharenergy-back.fly.dev/clientes`;
    await axios
    .get(endpointMain, headers)
    .then(function (response) {
      return null
    })
    .catch(function (error) {
      console.log(error.response.data.message);
      toast(error.response.data.message)
      navigate('/')
    });
    //setLoadingTable(false)
  }

  async function deleteClient(id) {
    const endpointMain = `https://sharenergy-back.fly.dev/clientes/${id}`;
    await axios
      .delete(endpointMain, headers)
      .then(function (response) {
        console.log(response)
        notify("Cliente deletado com sucesso")
        fetchClients()
      })
      .catch(function (error) {
        notify("Erro ao deletar cliente")
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
        toast(error.response.data.message)
      });
  }

  async function getClient(id) {
    console.log(loadingClient)
    setLoadingClient(true)
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
        setLoadingClient(false)
      })
      .catch(function (error) {
        console.log(error);
        setLoadingClient(false)
      });
      console.log(loadingClient)
    }
    
    async function submitClient() {
    setLoadingNewClient(true)
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
        setLoadingNewClient(false)
        notify("Cliente incluido com sucesso")
        fetchClients()
      })
      .catch(function (error) {
        console.log(error);
        toast(error.response.data.message)
        setLoadingNewClient(false)
      });
  }
  async function fetchData(page, result) {
    setLoadingTable(true)
    const endpointMain = `https://randomuser.me/api/?page=${page}&results=${parseInt(
      result
    )}&seed=abc`;
    await axios
      .get(endpointMain)
      .then(function (response) {
        setDataMain(response.data.results);
        setLoadingTable(false)
      })
      .catch(function (error) {
        setLoadingTable(false)
        console.log(error);
      });
      setLoadingTable(false)
      console.log('teste');
  }

  useEffect(() => {
    return () => {
      fetchClients()
      fetchData(pageNumber, results)
    };
  }, []);

      const context = {
        data,
        setData,
        loadingNewClient,
        setLoadingNewClient,
        loadingClient,
        setLoadingClient,
        dataMain,
        setDataMain,
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
        loadingTable,
        setLoadingTable,
        pageNumber,
        setPageNumber,
        results,
        setResults,
        editModal,
        setEditModal,
        view,
        setView,
        user,
        setUser,
        deleteClient,
        submitClient,
        editClient,
        getClient,
        fetchData,
        checkAuth
      };
    
    return (
        <Context.Provider value={ context }>
          { children }
        </Context.Provider>
      );
}

export default Provider