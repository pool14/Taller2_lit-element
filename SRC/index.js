import { LitElement, html } from 'lit-element';
import stylesScss from './indexStyle.js';
import './conductor/conductor.js'; 
import './conductor2/wcconductorview.js';
import './entrada_salida/CrudEntraySalidaRutas.js';
import './estaciones/CrudEstaciones.js';
import './paradas/CrudParadas.js';
import './rutas/rutas.js';
import './rutasexistentes/wcRutasExistentesView.js';
import './vehiculos/wcvehiculosview.js';

class Index extends LitElement {
  static get properties() {
    return {
      inicio1: {type: Boolean},
      mostrarConductor: { type: Boolean },
      mostrarTiempoConductor: { type: Boolean },
      mostrarEntradaSalida: { type: Boolean },
      mostrarEstaciones: { type: Boolean },
      mostrarParadas: { type: Boolean },
      mostrarRutas: { type: Boolean },
      mostrarRutasExistentes: { type: Boolean },
      mostrarVehiculos: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.mostrarConductor = false;
    this.mostrarTiempoConductor = false;
    this.mostrarEntradaSalida = false;
    this.mostrarEstaciones = false;
    this.mostrarParadas = false;
    this.mostrarRutas = false;
    this.mostrarRutasExistentes = false;
    this.mostrarVehiculos = false;
  }

  mostrarCompConductor() {
    this.mostrarConductor = true;
    this.mostrarTiempoConductor = false;
    this.mostrarEntradaSalida = false;
    this.mostrarEstaciones = false;
    this.mostrarParadas = false;
    this.mostrarRutas = false;
    this.mostrarRutasExistentes = false;
    this.mostrarVehiculos = false;
  }

  mostrarCompTiempoConductor() {
    this.mostrarConductor = false;
    this.mostrarTiempoConductor = true;
    this.mostrarEntradaSalida = false;
    this.mostrarEstaciones = false;
    this.mostrarParadas = false;
    this.mostrarRutas = false;
    this.mostrarRutasExistentes = false;
    this.mostrarVehiculos = false;
  }

  mostrarCompEntradaSalida() {
    this.mostrarConductor = false;
    this.mostrarTiempoConductor = false;
    this.mostrarEntradaSalida = true;
    this.mostrarEstaciones = false;
    this.mostrarParadas = false;
    this.mostrarRutas = false;
    this.mostrarRutasExistentes = false;
    this.mostrarVehiculos = false;
  }

  mostrarCompEstaciones() {
    this.mostrarConductor = false;
    this.mostrarTiempoConductor = false;
    this.mostrarEntradaSalida = false;
    this.mostrarEstaciones = true;
    this.mostrarParadas = false;
    this.mostrarRutas = false;
    this.mostrarRutasExistentes = false;
    this.mostrarVehiculos = false;
  }

  mostrarCompParadas() {
    this.mostrarConductor = false;
    this.mostrarTiempoConductor = false;
    this.mostrarEntradaSalida = false;
    this.mostrarEstaciones = false;
    this.mostrarParadas = true;
    this.mostrarRutas = false;
    this.mostrarRutasExistentes = false;
    this.mostrarVehiculos = false;
  }

  mostrarCompRutas() {
    this.mostrarConductor = false;
    this.mostrarTiempoConductor = false;
    this.mostrarEntradaSalida = false;
    this.mostrarEstaciones = false;
    this.mostrarParadas = false;
    this.mostrarRutas = true;
    this.mostrarRutasExistentes = false;
    this.mostrarVehiculos = false;
  }

  mostrarCompRutasExistentes() {
    this.mostrarConductor = false;
    this.mostrarTiempoConductor = false;
    this.mostrarEntradaSalida = false;
    this.mostrarEstaciones = false;
    this.mostrarParadas = false;
    this.mostrarRutas = false;
    this.mostrarRutasExistentes = true;
    this.mostrarVehiculos = false;
  }

  mostrarCompVehiculos() {
    this.mostrarConductor = false;
    this.mostrarTiempoConductor = false;
    this.mostrarEntradaSalida = false;
    this.mostrarEstaciones = false;
    this.mostrarParadas = false;
    this.mostrarRutas = false;
    this.mostrarRutasExistentes = false;
    this.mostrarVehiculos = true;
  }

  inicio() {
    this.mostrarConductor = false;
    this.mostrarTiempoConductor = false;
    this.mostrarEntradaSalida = false;
    this.mostrarEstaciones = false;
    this.mostrarParadas = false;
    this.mostrarRutas = false;
    this.mostrarRutasExistentes = false;
    this.mostrarVehiculos = false;
  }



  static get styles() {
    return stylesScss;
  }

  render() {
    return html`
      <h1>SISTEMA DE RUTAS TRANSMILENIO.</h1>

      
      <main>
      <section class="menu">
      <ul>
      <li @click=${this.inicio}>Inicio</li>
        <li @click=${this.mostrarCompConductor}>Registrar conductor</li>
        <li @click=${this.mostrarCompTiempoConductor}>Tiempo del conductor</li>
        <li @click=${this.mostrarCompEntradaSalida}>Entrada y salida</li>
        <li @click=${this.mostrarCompEstaciones}>Estaciones</li>
        <li @click=${this.mostrarCompParadas}>Paradas</li>
        <li @click=${this.mostrarCompRutas}>Rutas</li>
        <li @click=${this.mostrarCompRutasExistentes}>Rutas existentes</li>
        <li @click=${this.mostrarCompVehiculos}>Registrar vehículos</li>
      </ul>
    </section>

        <section class="contenido">

          ${this.mostrarConductor ? html`<conductor-c></conductor-c>` : html``}
          ${this.mostrarTiempoConductor ? html`<wc-conductor-view></wc-conductor-view>` : html``}
          ${this.mostrarEntradaSalida ? html`<crud-rutas></crud-rutas>` : html``}
          ${this.mostrarEstaciones ? html`<estaciones-e></estaciones-e>` : html``}
          ${this.mostrarParadas ? html`<paradas-e></paradas-e>` : html``}
          ${this.mostrarRutas ? html`<rutas-r></rutas-r>` : html``}
          ${this.mostrarRutasExistentes ? html`<wc-rutas-existentes-view></wc-rutas-existentes-view>` : html``}
          ${this.mostrarVehiculos ? html`<wc-vehiculos-view></wc-vehiculos-view>` : html``}
        </section>
      </main>
     
      <br>
      <body>
      </body>
      

      
      
      <footer>
        <p>Copyright &copy; 2023</p>
      </footer>
    `;
  }
}

customElements.define('index-entrar', Index);
