import { LitElement, html } from 'lit-element';
import stylesScss from './conductorStyle';

class Conductor extends LitElement {
  constructor() {
    super();
    this.conductores = [
      {
        nombre: 'Avila',
        tipoDocumento: 'Cédula',
        numeroDocumento: '1034278289',
        licenciaConduccion: 'C3',
        experiencia: '5',
      },
      {
        nombre: 'Duvan',
        tipoDocumento: 'Cédula',
        numeroDocumento: '80206575',
        licenciaConduccion: 'C3',
        experiencia: '3',
      }
    ];

    this.nombre = '';
    this.tipoDocumento = '';
    this.numeroDocumento = '';
    this.licenciaConduccion = '';
    this.experiencia = '';
    this.editIndex = -1;
  }

  static get properties() {
    return {
      conductores: { type: Array },
      nombre: { type: String },
      tipoDocumento: { type: String },
      numeroDocumento: { type: String },
      licenciaConduccion: { type: String },
      experiencia: { type: String },
      editIndex: { type: Number },
    };
  }
  static get styles() {
    return [stylesScss];
  }

  render() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

      <div class="container">
        <div class="form-container">
          <form>
            <div class="form-group">
              <label for="nombre">Nombre del Conductor:</label>
              <input
                type="text"
                class="form-control"
                id="nombre"
                .value=${this.nombre}
                @input=${this.actualizarNombre}
              />
            </div>
            <div class="form-group">
  <label for="tipoDocumento">Tipo de Documento:</label>
  <select class="form-control" id="tipoDocumento" @change=${this.actualizarTipoDocumento}>
    <option value="" ?selected=${this.tipoDocumento === 'Elija un campo'}>Elija un campo</option>
    <option value="C.C" ?selected=${this.tipoDocumento === 'C.C'}>C.C</option>
    <option value="C.E" ?selected=${this.tipoDocumento === 'C.E'}>C.E</option>
  </select>
</div>
            <div class="form-group">
              <label for="numeroDocumento">Número de Documento:</label>
              <input
                type="text"
                class="form-control"
                id="numeroDocumento"
                .value=${this.numeroDocumento}
                @input=${this.actualizarNumeroDocumento}
              />
            </div>
            <div class="form-group">
            <label for="licenciaConduccion">Licencia de Conducción:</label>
            <select class="form-control" id="licenciaConduccion" @change=${this.actualizarLicenciaConduccion}>
              <option value="" ?selected=${this.licenciaConduccion === 'Elija un campo'}>Elija un campo</option>
              <option value="Si" ?selected=${this.licenciaConduccion === 'Si'}>Si</option>
              <option value="No" ?selected=${this.licenciaConduccion === 'No'}>No</option>
            </select>
          </div>
            <div class="form-group">
              <label for="experiencia">Experiencia (en años):</label>
              <input
                type="text"
                class="form-control"
                id="experiencia"
                .value=${this.experiencia}
                @input=${this.actualizarExperiencia}
              />
            </div>
            ${this.editIndex !== -1
              ? html`
                  <button
                    type="button"
                    class="btn btn-guardar"
                    @click=${this.guardarEdicion}
                  >
                    Guardar
                  </button>
                  <button
                    type="button"
                    class="btn btn-cancelar"
                    @click=${this.cancelarEdicion}
                  >
                    Cancelar
                  </button>
                `
              : html`
                  <button
                    type="button"
                    class="btn btn-registrar"
                    @click=${this.registrarConductor}
                  >
                    Registrar
                  </button>
                `}
          </form>
        </div>
        <div class="table-container">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Tipo de Documento</th>
                <th>Número de Documento</th>
                <th>Licencia de Conducción</th>
                <th>Experiencia (años)</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              ${this.conductores.map(
                (conductor, index) => html`
                  <tr>
                    <td>
                      ${this.editIndex === index
                        ? html`<input type="text" .value=${conductor.nombre} @input=${e => this.conductores[index].nombre = e.target.value}>`
                        : conductor.nombre}
                    </td>
                    <td>
                      ${this.editIndex === index
                        ? html`<input type="text" .value=${conductor.tipoDocumento} @input=${e => this.conductores[index].tipoDocumento = e.target.value}>`
                        : conductor.tipoDocumento}
                    </td>
                    <td>
                      ${this.editIndex === index
                        ? html`<input type="text" .value=${conductor.numeroDocumento} @input=${e => this.conductores[index].numeroDocumento = e.target.value}>`
                        : conductor.numeroDocumento}
                    </td>
                    <td>
                      ${this.editIndex === index
                        ? html`<input type="text" .value=${conductor.licenciaConduccion} @input=${e => this.conductores[index].licenciaConduccion = e.target.value}>`
                        : conductor.licenciaConduccion}
                    </td>
                    <td>
                      ${this.editIndex === index
                        ? html`<input type="text" .value=${conductor.experiencia} @input=${e => this.conductores[index].experiencia = e.target.value}>`
                        : conductor.experiencia}
                    </td>
                    <td>
                      ${this.editIndex === index
                        ? html`
                            <button class="btn btn-guardar" @click=${() => this.guardarEdicion(index)}>Guardar</button>
                            <button class="btn btn-cancelar" @click=${() => this.cancelarEdicion(index)}>Cancelar</button>
                          `
                        : html`
                            <button class="btn btn-editar" @click=${() => this.editarConductor(index)}>Editar</button>
                            <button class="btn btn-eliminar" @click=${() => this.eliminarConductor(index)}>Eliminar</button>
                          `}
                    </td>
                  </tr>
                `
              )}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  actualizarNombre(e) {
    this.nombre = e.target.value;
  }

  actualizarTipoDocumento(e) {
    this.tipoDocumento = e.target.value;
  }
  

  actualizarNumeroDocumento(e) {
    this.numeroDocumento = e.target.value;
  }

  actualizarLicenciaConduccion(e) {
    this.licenciaConduccion = e.target.value;
  }
  

  actualizarExperiencia(e) {
    this.experiencia = e.target.value;
  }

  registrarConductor() {
    if (this.nombre && this.tipoDocumento && this.numeroDocumento && this.licenciaConduccion && this.experiencia) {
      this.conductores.push({
        nombre: this.nombre,
        tipoDocumento: this.tipoDocumento,
        numeroDocumento: this.numeroDocumento,
        licenciaConduccion: this.licenciaConduccion,
        experiencia: this.experiencia,
      });
      this.limpiarCampos();
      window.alert('Conductor registrado con éxito.'); // Mostrar una alerta
    } else {
      window.alert('Por favor, complete todos los campos antes de registrar el conductor.');
    }
  }
  
  editarConductor(index) {
    this.editIndex = index;
  }
  
  guardarEdicion(index) {
    this.editIndex = -1;
    window.alert('Cambios guardados con éxito.'); // Mostrar una alerta
  }
  
  cancelarEdicion(index) {
    this.editIndex = -1;
  }
  
  eliminarConductor(index) {
    if (index >= 0 && index < this.conductores.length) {
      this.conductores.splice(index, 1);
      this.requestUpdate();
      window.alert('Conductor eliminado con éxito.'); // Mostrar una alerta
    }
  }
  
  limpiarCampos() {
    this.nombre = '';
    this.tipoDocumento = '';
    this.numeroDocumento = '';
    this.licenciaConduccion = '';
    this.experiencia = '';
  }
}

customElements.define('conductor-c', Conductor);
