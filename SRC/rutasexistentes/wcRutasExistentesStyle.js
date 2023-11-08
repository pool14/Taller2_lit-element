import { css } from 'lit-element';

export default css`
  /* Contenedor principal */
  div {
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    margin: 10px;
  }

  /* Título de la lista */
  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  /* Lista de rutas existentes */
  ul {
    list-style: none;
    padding: 0;
  }

  /* Elemento de la lista */
  li {
    background-color: #ffffff;
    border: 1px solid #ddd;
    margin: 5px 0;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* Botones de editar y eliminar */
  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
`;
