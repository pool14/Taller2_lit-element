import { LitElement, html } from 'lit-element';
import stylesScss from "./wcconductoresstyle";

class wcConductorView extends LitElement {
  static get properties() {
    return {
      drivers: { type: Array },
      routes: { type: Array },
      driverName: { type: String },
      routeName: { type: String },
      startTime: { type: String },
      endTime: { type: String },
      selectedDriver: { type: String },
    };
  }

  constructor() {
    super();
    this.drivers = [];
    this.routes = [];
    this.driverName = '';
    this.routeName = '';
    this.startTime = '';
    this.endTime = '';
    this.selectedDriver = '';
  }

  static get styles() {
    return [stylesScss];
  }

  render() {
    return html`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <div class="container">
        <h1>Seguimiento de Conductores</h1>
    
        <div class="form-group">
          <h2>Registrar Conductor</h2>
          <div class="input-button-container">
            <input
              type="text"
              class="form-control smaller-input"
              .value=${this.driverName}
              @input=${this.updateDriverName}
            />
            <button class="btn btn-sm smaller-button blue-button" @click=${this.addDriver}>Registrar Conductor</button>
          </div>
        </div>
    
        <div class="form-group">
          <h2>Registrar Ruta</h2>
          <div class="input-button-container">
            <input
              type="text"
              class="form-control smaller-input"
              .value=${this.routeName}
              @input=${this.updateRouteName}
            />
            <input
              type="time"
              class="form-control smaller-input"
              .value=${this.startTime}
              @input=${this.updateStartTime}
            />
            <input
              type="time"
              class="form-control smaller-input"
              .value=${this.endTime}
              @input=${this.updateEndTime}
            />
            <select class="form-control smaller-input" .value=${this.selectedDriver} @change=${this.updateDriver}>
              <option value="" disabled>Seleccione un conductor</option>
              ${this.drivers.map(
                (driver) => html`<option value=${driver}>${driver}</option>`
              )}
            </select>
            <button class="btn btn-sm smaller-button blue-button" @click=${this.addRoute}>Registrar Ruta</button>
          </div>
        </div>
    
        <div class="form-group">
          <h2>Listado de Conductores</h2>
          <div class="list-container">
            <ul>
              ${this.drivers.map(
                (driver) => html`<li>${driver}</li>`
              )}
            </ul>
          </div>
        </div>
    
        <div class="form-group">
          <h2>Listado de Rutas</h2>
          <div class="list-container">
            <ul>
              ${this.routes.map(
                (route) => html`<li>${route.name} (Conductor: ${route.driver}, Inicio: ${route.startTime}, Fin: ${route.endTime})</li>`
              )}
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  updateDriverName(e) {
    this.driverName = e.target.value;
  }

  addDriver() {
    if (this.driverName) {
      this.drivers = [...this.drivers, this.driverName];
      this.selectedDriver = this.driverName;
      this.driverName = '';
      window.alert('Conductor registrado con éxito');
    }
  }

  updateRouteName(e) {
    this.routeName = e.target.value;
  }

  updateStartTime(e) {
    this.startTime = e.target.value;
  }

  updateEndTime(e) {
    this.endTime = e.target.value;
  }

  updateDriver(e) {
    this.selectedDriver = e.target.value;
  }

  addRoute() {
    if (this.routeName && this.startTime && this.endTime && this.selectedDriver) {
      // Obtener los valores del formulario
      const route = {
        name: this.routeName,
        startTime: this.startTime,
        endTime: this.endTime,
        driver: this.selectedDriver
      };
  
      // Agregar la nueva ruta a la lista de rutas
      this.routes = [...this.routes, route];
  
      // Limpiar los campos del formulario después de agregar la ruta
      this.routeName = '';
      this.startTime = '';
      this.endTime = '';
      this.selectedDriver = '';
  
      // Actualizar la vista
      this.requestUpdate();
    } else {
      window.alert('Por favor, complete todos los campos antes de registrar la ruta.');
    }
  }
}

customElements.define('wc-conductor-view', wcConductorView);
