import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import { getQueriesForElement } from '@testing-library/react';

function App() {

  const baseUrl="https";
  const [data, setData]=useState([]);
  const [modalInsetar, setModalInsertar]=useState(false);
  const [receptorSeleccionado, setReceptorSeleccionado]=useState({
     lblrId:'',
     lblrRFC:'',
     lblrRazonSocial:'',
     lblrResidenciaFiscal:'',
     lblrNumRegIdTrib:'',
     lblrUsoCFDI:'',
  });
  const handleChange=e=>{
    const {name, value}=e.target;
    setReceptorSeleccionado({
      ...receptorSeleccionado,
      [name]: value,
    });
    console.log(receptorSeleccionado);
  }
const abrirCerrarModalInsertar=()=>{
  setModalInsertar(!modalInsetar);
}
  const peticionGet=async()=>{
      await axios.get("baseUrl")
      .then(response=>{
        setData(response.data);
      }).catch(error=>{
        console.log(error);
      })
  }
  const peticionPost=async()=>{
    delete receptorSeleccionado.lblrId;
    await axios.post("baseUrl", receptorSeleccionado)
    .then(response=>{
      setData(data.concat(response.data));
      abrirCerrarModalInsertar();
    }).catch(error=>{
      console.log(error);
    })
}
  useEffect(()=>{
    peticionGet();
  },[])
  return (
    <div className="App">
      <br/>
      <button onClick={()=>abrirCerrarModalInsertar()} className="btn btn-success">Insertar Nuevo</button>
      <br/>
      <table className="table table-bordered">
        <thead>
            <th>Id</th>
            <th>RFC</th>
            <th>Razon Social</th>
            <th>ResidenciaFiscal</th>
            <th>NumRegIdTrib</th>
            <th>Uso CFDI</th>
        </thead>
         <tbody>
          {data.map(receptor=>(
            <tr key={receptor.id}>
              <td>{receptor.rId}</td>
              <td>{receptor.rRFC}</td>
              <td>{receptor.rRazonSocial}</td>
              <td>{receptor.rResidenciaFiscal}</td>
              <td>{receptor.rNumRegIdTrib}</td>
              <td>{receptor.rUsoCFDI}</td>
              <td>
                <button className="btn btn-primary">Editar</button>
                <button className="btn btn-danger">Eliminar</button>
              </td>
            </tr>
          ))}
         </tbody>
        </table>
      <Modal isOpen={modalInsetar}> 
          <ModalHeader> Insertar </ModalHeader>
          <ModalBody>
            <div className="form-group">    
              <label>RFC</label>
              <br />
              <input type="text" className="form-control" name="lblrRFC" onChange={handleChange}/>
              <label>Razon social</label>
              <br />
              <input type="text" className="form-control" name="lblrRazonSocial" onChange={handleChange}/>
              <label>Recidencia fiscal</label>
              <br />
              <input type="text" className="form-control" name="lblrResidenciaFiscal" onChange={handleChange}/>
              <label>Numero de registro triburario</label>
              <br />
              <input type="text" className="form-control" name="lblrNumRegIdTrib" onChange={handleChange}/>
              <label>Uso del CFDI</label>
              <br />
              <input type="text" className="form-control" name="lblrUsoCFDI" onChange={handleChange}/>
            </div>
          </ModalBody>          
          <ModalFooter>
          <button className="btn btn-primary" onClick={()=>peticionPost}>Aceptar</button>{""}
          <button className="btn btn-danger" onClick={()=>abrirCerrarModalInsertar}>Cancelar</button>
          </ModalFooter>
        </Modal>
    </div>
  );
}
export default App;
