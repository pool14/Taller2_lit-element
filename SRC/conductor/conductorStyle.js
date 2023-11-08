import { css } from 'lit-element';

export default css`
:host {
  font-family: 'Arial', sans-serif;
  display: block;
}

.container {
  font-size: 16px;
}

.form-container {
  margin-top: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
}

input {
  width: 100%;
  padding: 10px;
}

.btn {
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;
}

.btn-registrar {
  background-color: #4caf50;
  color: white;
  border: none;
}

.btn-guardar {
  background-color: #008CBA;
  color: white;
  border: none;
}

.btn-cancelar {
  background-color: #f44336;
  color: white;
  border: none;
}

.btn-editar {
  background-color: #008CBA;
  color: white;
  border: none;
}

.btn-eliminar {
  background-color: #f44336;
  color: white;
  border: none;
}

.table-container {
  margin-top: 20px;
}

table {
  width: 100%;
}

th, td {
  text-align: center;
  padding: 10px;
}

.mensaje {
  margin-top: 10px;
  color: red;
}
`


