import { css} from 'lit-element';

export default css`
/* Estilos para el contenedor principal */
:host {
  display: block;
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 24px;
  text-align: center;
}

/* Estilos para los formularios de entrada */
label {
  display: block;
  margin-top: 10px;
}

input {
  width: 100%;
  padding: 8px;
  margin: 4px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #007BFF;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #0056b3;
}

/* Estilos para la lista de rutas */
ul {
  list-style: none;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-group {
  display: flex;
}

.btn-group button {
  margin-left: 5px;
}`

;