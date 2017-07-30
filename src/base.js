import {h, render, Component} from 'preact';

import s from './base.css';
const data = require('../data/data.json');

export default class Base extends Component {
  constructor() {
    super();

    this.state = {
      popup: false
    }
  }

  handonclic(title, content) {
    this.setState({popup: {title, content}});
  }

  closePopup() {
    this.setState({popup: false});
  }

  getPopup() {
    if (!this.state.popup) return;
    return (
      <div className={s.popup}>
        <button className={s.salir} onClick={this.closePopup.bind(this)}>Cerrar</button>
        <h2>{this.state.popup.title}</h2>
        <div dangerouslySetInnerHTML={{__html: this.state.popup.content}}/>
      </div>
    )
  }

  render(props, state) {
    const popup = this.getPopup();
    let fondo;
    if (state.popup) {
      fondo = (<div className={s.fondo}/>);
    }
    return (
      <div className={s.container}>
        {fondo}
        {popup}

        <div className="cont_circulos">
          <img src="https://c1.staticflickr.com/5/4302/35463088463_986f6ba815_b.jpg" alt=""
               className="background-img"/>

          <div onClick={this.handonclic.bind(this, "Los hemanos Daes, megacontratistas de Barranquilla y dueños de Tecnoglass", "<p>En enero de 2010, durante su primera administración como alcalde de Barranquilla, Alejandro Char firmó un otrosí al contrato de concesión de amoblamiento urbano que desde 1999 maneja la empresa Construseñales SA, de los hermanos Christian y José Manuel ‘Yuyo’ Daes Abuchaibe, superpoderosos de Barranquilla y dueños de la empresa Tecnoglass. Con ese otrosí, el Distrito le entregó a un privado el 35% del total del recaudo de las fotomultas. Desde entonces, la Alcaldía instala cámaras por toda la ciudad, que hoy suman 56, para registrar infracciones por exceso de velocidad, irrespeto a las cebras y semáforos, bloqueo de intersecciones o incumplimiento a la medida de 'pico y placa'.</p><p> Entre 2010 y febrero de este año, la Secretaría de Tránsito impuso 744 mil comparendos electrónicos por 187 mil millones de pesos. Sin embargo, solo recaudó 30.663 millones de pesos porque los 157.202 millones restantes están en cobros coactivos, según respuesta de esa dependencia a un derecho de petición. Desde su instalación, las cámaras han generado polémica en Barranquilla porque, pese a que la Alcaldía las presentó como aliadas en su campaña para reducir la accidentalidad vial, son consideradas elementos de generación de recursos que no siempre se instalan con criterios técnicos.</p>" +
            "<div style='text-align: center;font-size: .8em;font-weight: bold;font-family: Lato'><a href='http://lasillavacia.com/node/61475' target='_blank' >VER MAS...</a></div>")} className="personaje uno">
            <div className="punto color1"><span>Caribe</span></div>
          </div>


          <div onClick={this.handonclic.bind(this, "El 'turco' Hilsaca y otros contratistas locales", "<p>En los últimos cinco años en los santanderes se han entregado cuatro concesiones -Floridablanca en Santander y Ocaña, Los Patios y Villa del Rosario en Norte de Santander-  para la operación de las fotomulas. Tres han quedado en manos de contratistas conocidos por financiar campañas y una dentro de la red de negocios del emporio del controvertido empresario barranquillero, Alfonso 'el Turco' Hilsaca.</p><p> En los santanderes el concesionario que menos gana con el recaudo de las infracciones es el de Floridablanca que se queda con el 45,3%, el que más gana es el de Hilsaca que está en Villa del Rosario -municipio del área metropolitana de Cúcuta- y se queda con el 80%. Todas las concesiones tienen en común que resultaron de la sociedad de varias empresas y que están en la mira de entes de control por la manera en la que fueron licitados. Su operación ha sido igual de controvertida y en Los Patios, otro de los municipios del área metropolitana de Cúcuta, en solo ocho meses de operación se han emitido 60 mil órdenes de comparendos.</p>" +
            "<div style='text-align: center;font-size: .8em;font-weight: bold;font-family: Lato'><a href='http://lasillavacia.com/node/61643' target='_blank' >VER MAS...</a></div>")} className="personaje dos">
            <div className="punto color1"><span>Santanderes</span></div>
          </div>

          <div onClick={this.handonclic.bind(this, "Data Tools y Siett, los afectados en Cundinamarca", "<p>En Cundinamarca, hay dos tipos de fotomultas: las que dependen de la Gobernación y las que dependen de la jurisdicción de cada municipio. Por eso, los que más se ven afectados son las dos empresas que reciben la mayor parte del recaudo que se hace a nivel departamental: Data Tools, de Javier Ríos, y la Unión Temporal de Servicios Integrados y Especializados de Tránsito y Transporte de Cundinamarca (Siett). Aunque Data Tools no tiene máquinas de fotomultas, maneja, desde el 2002, toda la infraestructura tecnológica del sistema de tránsito del departamento y por esto recibe el 25 por ciento del recaudo de fotomultas. Este contrato se volvío a hacer en el 2015 e irá por 3 años y 3 meses.</p><p>Siett, por otro lado, se encarga de administrar la parte operativa de las fotomultas: instalar las cámaras, recolectar las pruebas, generar los comparendos y notificar a los infractores. Por esto recibe el 39 por ciento del recaudo. Además de las fotomultas, Siett también tiene concesionado la operación de las grúas, de los patios y la administración de centros donde hacen la revisión técnico mecánica y de gases. Este contrato, en el que la gobernación le concesiona todos estos servicios a Siett ,se firmó en el 2006 y va hasta el 2018.</p>" +
            "<div style='text-align: center;font-size: .8em;font-weight: bold;font-family: Lato'><a href='http://lasillavacia.com/node/61644' target='_blank' >VER MAS...</a></div>")} className="personaje tres">
            <div className="punto color1"><span>Bogotá</span></div>
          </div>

          <div onClick={this.handonclic.bind(this, "Quipux, SiTT y GCA", "<p>En 2012, el entonces Alcalde Rodrigo Guerrero prorrogó mediante un otro sí el convenio entre el municipio y el Centro de Diagnóstico Automotor del Valle, una empresa de capital mixto pero mayoritariamente público, que a su vez, subcontrata la concesión de las fotomultas en Cali con el Consorcio PST (Programa de Servicios de Tránsito) que no sólo tiene el recaudo y la operación de las fotomultas sino el registro automotor de Cali. Esa empresa está compuesta por socios grandes que tienen contratos similares en otra parte del país. Los principales accionistas son tres: la antioqueña Quipux, que tiene la concesión en Medellín y está representada legalmente por Álvaro León Zuluaga; la bogotana SITT y Cía, representada legalmente por Juan José Franco Zuluaga (que también es la cabeza visible de Montrans, la empresa que tiene la concesión de la administración del tránsito en Montería; y GCA Technologies de Guillermo Corredor Naranjo, una empresa especializada en comunicación estratégica. Los socios minoritarios son la empresa bogotana Kentaur S.A.S que tiene el 10 por ciento.  El único socio caleño es el abogado Víctor Hugo Vallejo, que tiene un 6 por ciento de las acciones. Vallejo es conocido en Cali no sólo porque es un especialista en asuntos de tránsito -de hecho, es consultado frecuentemente por medios regionales como El país de Cali-, sino porque, como abogado, ha representado a políticos vallecaucanos como la actual Gobernadora del Valle, Dilian Francisca Toro.</p><p>Según este contrato, el municipio de Cali se queda con el 56 por ciento de los recursos recaudados -lo que en el 2016, representó 53 mil millones de pesos- mientras que los demás socios, el CDAV y el consorcio PST se quedan con el 34 por ciento de ese recaudo. A ese porcentaje, según el gerente del CDAV, Jaime Cárdenas se le restan los costos operacionales y los excedentes, que suelen ser un 15 por ciento, se reparten 9 por ciento para el consorcio y al rededor de 4 por ciento para el CDAV. Ese porcentaje es mejor incluso que el tope que puso el nuevo proyecto de ley por lo que en teoría, no se vería tan afectado con el nuevo proyecto de ley. Aún así, según una fuente de la Secretaría de Movilidad de Cali, la idea era aumentar este contrato por lo que en últimas, sus socios sí pueden resultar afectados a largo plazo.</p>" +
            "<div style='text-align: center;font-size: .8em;font-weight: bold;font-family: Lato'><a href='http://lasillavacia.com/node/61645' target='_blank' >VER MAS...</a></div>")} className="personaje cua">
            <div className="punto color1"><span>Sur</span></div>
          </div>

          <div onClick={this.handonclic.bind(this, "Álvaro León Zuluaga, el afectado en Medellín", "<p>En Antioquia la empresa dueña de las fotomultas es Quipux. Fue creada en 1995 en Rionegro y su representante legal es Álvaro León Zuluaga, un contratista que lleva desde la alcaldía de Luis Pérez en 2001 manejando todo el sistema de fotomultas en Medellín y luego, a raíz de un informe de auditoria de la Contraloría de Medellín que le pedía a la Secretaría de Movilidad fijar controles a la información que manejaban los empleados de Quipux y la que ellos ingresaban al sistema, el entonces alcalde Sergio Fajardo firmó un convenio interadministrativo con Emtelco, UNE, filial de las Empresas Públicas de Medellín, EPM, para que modernizara el sistema. Ese convenio fue por 6.023 millones a un plazo inicial de 8 años, y ya en el mismo 2006 se le añadieron 4 otrosíes que extendieron su plazo a 12 años.</p><p>En 2010  la alcaldía de Alonso Salazar hizo el otro sí 5 que le agregó una segunda etapa al convenio hasta 2025. El presupuesto para esa nueva etapa fue de 64.424 millones de pesos, adicionales a los 6.023 millones iniciales.</p><p>Para esa segunda etapa, el gerente general de UNE suscribió un acuerdo de colaboración empresarial con XM y el Consorcio ITS Medellín, que está conformado por SITT & Cía ltda y Quipux. UNE también firmó otro contrato para el suministro de equipos, software, implantación y mantenimiento de los equipos tecnológicos del sistema de fotodetección con la sociedad Velsis, una empresa brasilera cuya sucursal en Medellín fue creada en 2011 justamente por Álvaro León Zuluaga, el representante legal de Quipux.</p><p>Para el módulo de fotomultas, Quipux tiene el 41 por ciento del recaudo, por lo que el proyecto de ley le pegaría directamente a Álvaro León Zuluaga. </p>" )} className="personaje cin">
            <div className="punto color1"><span>Pacífico</span></div>
          </div>
        </div>
      </div>
    )
  }
}
