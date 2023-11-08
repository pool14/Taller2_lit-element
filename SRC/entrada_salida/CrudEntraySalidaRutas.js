import { LitElement, html, css } from 'lit-element';
import stylesScss from './CrudEntraySalidarutasStyle';

class CrudEntraySalidaRutas extends LitElement {
  constructor() {
    super();
    this.rutas = [
      { nombre: "Ruta 1", tiempoEntrada: "08:00 AM", tiempoSalida: "04:00 PM" },
      { nombre: "Ruta 2", tiempoEntrada: "09:15 AM", tiempoSalida: "05:15 PM" },
      { nombre: "Ruta 3", tiempoEntrada: "10:30 AM", tiempoSalida: "06:30 PM" },
    ];
    this.nuevaRutaNombre = "";
    this.nuevoTiempoEntrada = "";
    this.nuevoTiempoSalida = "";
    this.editIndex = -1;
  }

  static get properties() {
    return {
      rutas: { type: Array },
      nuevaRutaNombre: { type: String },
      nuevoTiempoEntrada: { type: String },
      nuevoTiempoSalida: { type: String },
      editIndex: { type: Number },
    };
  }

  agregarRuta() {
    if (this.nuevaRutaNombre && this.nuevoTiempoEntrada && this.nuevoTiempoSalida) {
      if (this.editIndex === -1) {
        this.rutas = [
          ...this.rutas,
          {
            nombre: this.nuevaRutaNombre,
            tiempoEntrada: this.nuevoTiempoEntrada,
            tiempoSalida: this.nuevoTiempoSalida,
          },
        ];
        alert("Ruta agregada exitosamente"); // Mostrar una alerta cuando se agrega una ruta
      } else {
        this.rutas[this.editIndex] = {
          nombre: this.nuevaRutaNombre,
          tiempoEntrada: this.nuevoTiempoEntrada,
          tiempoSalida: this.nuevoTiempoSalida,
        };
        this.editIndex = -1;
        alert("Ruta actualizada exitosamente"); // Mostrar una alerta cuando se actualiza una ruta
      }
      this.nuevaRutaNombre = "";
      this.nuevoTiempoEntrada = "";
      this.nuevoTiempoSalida = "";
      this.requestUpdate(); // Actualiza la vista después de modificar la lista
    } else {
      alert("Por favor, complete todos los campos"); // Mostrar una alerta si faltan campos
    }
  } 
  editarRuta(index) {
    if (confirm("¿Desea editar esta ruta?")) {
      this.editIndex = index;
      this.nuevaRutaNombre = this.rutas[index].nombre;
      this.nuevoTiempoEntrada = this.rutas[index].tiempoEntrada;
      this.nuevoTiempoSalida = this.rutas[index].tiempoSalida;
    } else {
      alert("Edición cancelada");
    }
  }

  eliminarRuta(index) {
    if (confirm("¿Desea eliminar esta ruta?")) {
      this.rutas.splice(index, 1);
      this.requestUpdate(); // Actualiza la vista después de modificar la lista
      alert("Ruta eliminada exitosamente");
    } else {
      alert("Eliminación cancelada");
    }
  }

  static get styles() {
    return [stylesScss];
  }

  render() {
    return html`

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <div class="container mt-5">
    <h1 class="text-center mb-4">TIEMPO DE ENTRADA Y SALIDA DE RUTAS</h1>
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
        <button @click="${this.agregarRuta}" class="btn btn-primary">
            ${this.editIndex === -1 ? 'Agregar Ruta' : 'Actualizar Ruta'}
        </button>
    </div>
</div>
    <ul class="list-group">
        ${this.rutas.map((ruta, index) => html`
            <li class="list-group-item">
                <span>${ruta.nombre}</span>
                <span>Tiempo de Entrada: ${ruta.tiempoEntrada}</span>
                <span>Tiempo de Salida: ${ruta.tiempoSalida}</span>
                <div class="btn-group">
                    <button @click="${() => this.editarRuta(index)}" class="btn btn-primary">Editar</button>
                    <button @click="${() => this.eliminarRuta(index)}" class="btn btn-danger">Eliminar</button>
                </div>
            </li>
        `)}
    </ul>
</div>
    `;
  }
}

customElements.define('crud-rutas', CrudEntraySalidaRutas);
