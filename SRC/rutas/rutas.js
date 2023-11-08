import { LitElement, html } from 'lit-element';

class Rutas extends LitElement {
  constructor() {
    super();
    this.rutas = [
      { nombre: "Ruta 1", paradas: 3, tiempoEntrada: "08:00 AM", tiempoSalida: "04:00 PM", disponible: true },
      { nombre: "Ruta 2", paradas: 2, tiempoEntrada: "09:15 AM", tiempoSalida: "05:15 PM", disponible: false },
      { nombre: "Ruta 3", paradas: 4, tiempoEntrada: "10:30 AM", tiempoSalida: "06:30 PM", disponible: true },
    ];
    this.nuevaRutaNombre = "";
    this.nuevoParadas = 0;
    this.nuevoTiempoEntrada = "";
    this.nuevoTiempoSalida = "";
    this.nuevoEstado = true;
    this.editIndex = -1;
  }

  agregarRuta() {
    if (this.nuevaRutaNombre && this.nuevoParadas && this.nuevoTiempoEntrada && this.nuevoTiempoSalida) {
      if (this.editIndex === -1) {
        this.rutas = [
          ...this.rutas,
          {
            nombre: this.nuevaRutaNombre,
            paradas: this.nuevoParadas,
            tiempoEntrada: this.nuevoTiempoEntrada,
            tiempoSalida: this.nuevoTiempoSalida,
            disponible: this.nuevoEstado,
          },
        ];
        this.mostrarAlerta("Ruta agregada con éxito.");
      } else {
        this.rutas[this.editIndex] = {
          nombre: this.nuevaRutaNombre,
          paradas: this.nuevoParadas,
          tiempoEntrada: this.nuevoTiempoEntrada,
          tiempoSalida: this.nuevoTiempoSalida,
          disponible: this.nuevoEstado,
        };
        this.editIndex = -1;
        this.mostrarAlerta("Ruta actualizada con éxito.");
      }
      this.limpiarCampos();
      this.requestUpdate(); // Actualiza la vista después de modificar la lista
    } else {
      this.mostrarAlerta("Por favor, complete todos los campos obligatorios.");
    }
  }

  editarRuta(index) {
    this.editIndex = index;
    this.nuevaRutaNombre = this.rutas[index].nombre;
    this.nuevoParadas = this.rutas[index].paradas;
    this.nuevoTiempoEntrada = this.rutas[index].tiempoEntrada;
    this.nuevoTiempoSalida = this.rutas[index].tiempoSalida;
    this.nuevoEstado = this.rutas[index].disponible;
  }

  eliminarRuta(index) {
    if (confirm("¿Desea eliminar esta ruta?")) {
      this.rutas.splice(index, 1);
      this.mostrarAlerta("Ruta eliminada con éxito.");
      this.requestUpdate(); // Actualiza la vista después de modificar la lista
    }
  }

  mostrarAlerta(mensaje) {
    alert(mensaje);
  }

  render() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <div class="container mt-5">
      <h1 class="text-center mb-4">NUEVA RUTA</h1>
        <div class="row mb-3">
          <div class="col">
            <label for="nombreRuta" class="form-label">Nombre de la Ruta</label>
            <input
              id="nombreRuta"
              type="text"
              class="form-control"
              .value="${this.nuevaRutaNombre}"
              @input="${(e) => (this.nuevaRutaNombre = e.target.value)}"
            />
          </div>
          <div class="col">
            <label for="paradas" class="form-label">Paradas</label>
            <input
              id="paradas"
              type="number"
              class="form-control"
              .value="${this.nuevoParadas}"
              @input="${(e) => (this.nuevoParadas = parseInt(e.target.value))}"
            />
          </div>
          <div class="col">
  <label for="tiempoEntrada" class="form-label">Tiempo de Entrada</label>
  <input
    id="tiempoEntrada"
    type="time"
    class="form-control"
    .value="${this.nuevoTiempoEntrada}"
    @input="${(e) => (this.nuevoTiempoEntrada = e.target.value)}"
  />
</div>
<div class="col">
  <label for="tiempoSalida" class="form-label">Tiempo de Salida</label>
  <input
    id="tiempoSalida"
    type="time"
    class="form-control"
    .value="${this.nuevoTiempoSalida}"
    @input="${(e) => (this.nuevoTiempoSalida = e.target.value)}"
  />
</div>
          <div class="col">
            <label for="estado" class="form-label">Estado</label>
            <select id="estado" class="form-control" @change="${(e) => (this.nuevoEstado = e.target.value === 'disponible')}">
              <option value="disponible" ?selected="${this.nuevoEstado}">Disponible</option>
              <option value="no disponible" ?selected="${!this.nuevoEstado}">No Disponible</option>
            </select>
          </div>
          <div class="col">
            <button @click="${this.agregarRuta}" class="btn btn-primary">
              ${this.editIndex === -1 ? 'Agregar Ruta' : 'Actualizar Ruta'}
            </button>
          </div>
        </div>
        <ul class="list-group">
          ${this.rutas.map((ruta, index) => html`
            <li class="list-group-item">
              <span>${ruta.nombre}</span>
              <span>Paradas: ${ruta.paradas}</span>
              <span>Tiempo de Entrada: ${ruta.tiempoEntrada}</span>
              <span>Tiempo de Salida: ${ruta.tiempoSalida}</span>
              <span>Estado: ${ruta.disponible ? 'Disponible' : 'No Disponible'}</span>
              <button @click="${() => this.editarRuta(index)}" class="btn btn-primary">Editar</button>
            <button @click="${() => this.eliminarRuta(index)}" class="btn btn-danger">Eliminar</button>
             </li>
          `)}
        </ul>
      </div>
    `;
  }

  limpiarCampos() {
    this.nuevaRutaNombre = "";
    this.nuevoParadas = 0;
    this.nuevoTiempoEntrada = "";
    this.nuevoTiempoSalida = "";
  }
}

customElements.define('rutas-r', Rutas);
