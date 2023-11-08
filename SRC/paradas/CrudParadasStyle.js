import { css } from 'lit-element';

export default css`
/* Estilos generales */
.container {
  background-color: #f7f7f7;
  padding: 20px;
}

.card {
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 15px;
}

.form-group {
  margin-bottom: 15px;
}

/* Botones */
.btn-primary {
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-warning {
  background-color: #ffc107;
  color: #333;
  font-weight: bold;
}

.btn-warning:hover {
  background-color: #e0a800;
}

.btn-danger {
  background-color: #dc3545;
  color: #fff;
  font-weight: bold;
}

.btn-danger:hover {
  background-color: #c82333;
}

.btn-sm {
  font-size: 0.8rem;
  padding: 5px 10px;
}

/* Lista de elementos */
.list-group-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px 15px;
}

/* Inputs y formularios */
.form-control {
  font-size: 1rem;
  padding: 10px;
  font-weight: bold;
}

/* Encabezado */
h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

`;
