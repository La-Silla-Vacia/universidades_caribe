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
          <img src="https://c1.staticflickr.com/5/4319/36108213242_204074098f_b.jpg" alt=""
               className="background-img"/>

          <div onClick={this.handonclic.bind(this, "La Guajira", "<p><strong>Universidad de La Guajira</strong></p><p>Con la realización periódica de mesas de trabajo comunitarias la pública Uniguajira se ha vinculado fuertemente en los procesos de reconciliación y implementación del posconflicto en el departamento, que cuenta con una de las tres zonas veredales de las Farc en el Caribe.</p><p>Estas mesas técnicas se han realizado en el corregimiento de Conejo, donde  se encuentra concentrado el Frente 59 del Bloque Martín Caballero de las Farc.</p><p>El papel de la universidad es de acompañamiento técnico a las comunidades y miembros de las Farc para la reconstrucción de la memoria histórica del departamento y la elaboración del Plan de Desarrollo Territorial de Conejo.</p><p>Entre las apuestas de la universidad también está institucionalizar el voluntariado de paz que lidera la Federación de Estudiantes Universitarios de Colombia y la creación de un Observatorio de paz que haga seguimiento a la implementación de los acuerdos en La Guajira.</p>" )} className="personaje uno">
            <div className="punto"><span>La Guajira</span></div>
          </div>


          <div onClick={this.handonclic.bind(this, "Cesar", "<p><p><strong>Estudiantes de la Universidad Popular del Cesar: posconflicto de abajo hacia arriba</strong></p><p>Desde finales de 2016 varios grupos de colectivos estudiantiles de la UPC se han echado al hombro la tarea de pensarse el posconflicto y la paz en su departamento, supliendo así la carencia de una apuesta institucional en su alma mater, que apenas empieza a estructurar la obligatoria  cátedra de paz que instauró la Ley 1732 de 2014.</p><p>Juan Sebastián Niño, uno de los líderes del colectivo Cátedra Macondo, nos contó su experiencia organizando visitas a la zona veredal de Tierra Grata, ubicada en los municipios de La Paz y Manaure. Hasta allí han movilizado cerca de tres mil estudiantes de distintas carreras con quienes desarrollan proyectos de pedagogía de paz, sensibilización y reconciliación.</p><p>“Organizamos grupos de 20 estudiantes y entre todos reunimos para los pasajes, también hacemos actividades para recaudar fondos. La idea es darle información a los muchachos porque existen algunos mitos sobre el conflicto”, afirma Juan.</p><p>Dependiendo de los programas, los estudiantes se dividen para trabajar con los excombatientes. En Derecho, por ejemplo, se han apoyado del Consultorio Jurídico que tiene la universidad para hacer “brigadas jurídicas” y asesorar a los miembros de las Farc en temas legales.</p><p>Junto con Cátedra Macondo hay otros colectivos trabajando en temas de paz como Eutari e Identidad Estudiantil que según Juan Sebastián suman poco más de 30 estudiantes y algunos docentes. “La Universidad nos ha dejado muy aparte y no le ha interesado mucho el tema”, dice Juan, quien además lidera con su grupo una solicitud ante la Unidad de Víctimas para que la UPC sea reconocida como sujeto de reparación colectiva por la incursión paramilitar que sufrió a principio de la década del 2000.</p>" )} className="personaje tres">
            <div className="punto"><span>Cesar</span></div>
          </div>

          <div onClick={this.handonclic.bind(this, "Atlántico", "<p><strong>Universidad del Norte: profesores a las veredas</strong></p><p>En 2016 comenzó el programa UN Caribe, la apuesta institucional de la Universidad del Norte para el posconflicto.</p><p>Es un programa de investigación y pedagogía para la paz que está bajo la dirección de Viridiana Molinares, doctora en Derecho Constitucional, pero que cuenta con la participación de casi todos los profesores de los programas de Ciencia Política, Relaciones Internacionales y Derecho de la universidad.</p><p>En su primera fase el proyecto estuvo volcado a explicar y difundir el contenido de los Acuerdos. Mientras que este año ha estado concentrado en los retos de la implementación en la región, partiendo del Atlántico y teniendo en cuenta las particularidades de cada departamento.</p><p>Los profesores no solo producen contenido de investigaciones sino que se desplazan a terreno para adelantar procesos de formación a excombatientes con charlas, talleres y cursos de capacitación. La última de estas visitas fue a principios de julio en la zona de concentración de Pondores, en La Guajira, en donde dictaron un taller sobre formación del Estado, contenido de la Constitución y mecanismos de protección constitucional. “Además asistimos como invitados a un taller organizado por los mismos guerrilleros sobre reconstrucción de memoria histórica”, señala Viridiana Molinares, su directora.</p><p>Ese desplazamiento, al que llaman “trabajo en contexto”, es coordinado por el profesor Luis Fernando Trejos, quien también dirige el Instituto de Desarrollo Político e Institucional (IDEPI) de la Universidad.</p><p>Para Trejos, más que el trabajo con los excombatientes, que es muy importante, la universidad le apostó a llegar a las zonas rurales afectadas por el conflicto en el Caribe, con las juntas de acción comunal por ejemplo, porque es precisamente ahí donde más déficit del Estado se encuentra y la oferta institucional es nula.</p><p>UN Caribe lanzó el pasado 27 de julio un programa radial llamado “Todos Cuentan”, el cual se emite los jueves a las 8:30 a.m. por la emisora institucional Uninorte F.M Estéreo, en el que se pretende darle voz a las historias y procesos que trabajan en construcción de paz dentro de la región.</p><p><strong>Universidad del Atlántico: de vuelta a los estudios</strong></p><p>Además de la Cátedra de Paz que instauró en 2015 y que hoy es obligatoria como requisito de grado para todo el estudiantado y que se dicta de tercero a noveno semestre de cada carrera, la universidad le ha apostado a la consolidación de una política institucional de paz.</p><p>Esta tiene entre sus líneas de acción movilizar estudiantes a las zonas veredales para trabajar con los guerrilleros temas de pedagogía de paz, acompañamiento terapéutico, jornadas deportivas y brigadas jurídicas.</p><p>Ya se han hecho dos actividades en las zonas de Tierra Grata (Cesar) y de Pondores (en La Guajira).</p><p>Una de las apuestas de la Uniatlántico de cara a la reincorporación es permitirles a los estudiantes que dejaron las aulas para vincularse a las Farc obtener su grado y título universitario.</p><p>Un caso baluarte es el de Jesús Santrich, cuyo nombre real es Seusis Pausias Hernández, quien egresó de Ciencias Sociales de la Uniatlántico antes de iniciar su vida activa como guerrillero. Santrich también cursaba Derecho pero se fue a las Farc antes de recibir el grado, por lo que ahora adelanta sus preparatorios desde principios de este año y le falta entregar su tesis para poder hacerlo</p><p><strong>Universidad Autónoma del Caribe: la primera Cátedra de Paz</strong></p><p>La Uniautónoma fue pionera entre las universidades del Caribe en la apertura de una Cátedra de Paz antes de la expedición de la Ley que hizo obligatorio para las universidades y colegios contar con una.</p><p>Desde este instituto se organizan foros, se coordinan proyectos de investigación  y se concibe como una alternativa facilitadora del diálogo social.</p><p>Entre los proyectos destacables está uno enfocado en la reconstrucción de la memoria histórica de la comunidad desplazada de La Bonga, una vereda de San Basilio de Palenque azotada por la incursión de los paramilitares en el 2000, después de la masacre de Mampuján. Este proyecto lo trabajan en conjunto con el Centro Nacional de Memoria Histórica.</p>" )} className="personaje cua">
            <div className="punto"><span>Atlántico</span></div>
          </div>

          <div onClick={this.handonclic.bind(this, "Bolívar", "<p><strong>Universidad Tecnológica de Bolívar: reivindicar los saberes populares</strong></p><p>Desde el 2012 la UTB arrancó con una apuesta firme al posconflicto. Ese año, de la mano del profesor Pablo Abitbol (miembro de la red de líderes Caribe de La Silla Llena) se creó el grupo regional de memoria histórica y  algunos años más tarde la Cátedra de Paz.</p><p>“Cuando arrancamos hicimos una investigación de dos años sobre un líder comunitario llamado Eduardo Estrada que tenía un proyecto de radio y fue asesinado en el sur de Bolívar. A partir de esa publicación nos institucionalizamos como grupo”, cuenta Abitbol.</p><p>La mayor parte del trabajo de la UTB se centra en la región de los Montes de María en donde trabajan de la mano con la comunidad en proyectos de reconstrucción de la memoria, los saberes populares y la lectura deliberativa de los acuerdos de paz. Esta última iniciativa también la han llevado a escuelas y empresas de la ciudad de Cartagena.</p><p>Desde la Cátedra de Paz, por otro lado, se articulan las investigaciones y proyectos que maneja el grupo y se abren espacios deliberativos para toda la comunidad en donde la apuesta es poner cara a cara a campesinos y líderes comunitarios con empresarios y representantes de la sociedad civil.</p><p>La cátedra, aparte de ser obligatoria para los estudiantes, es abierta al público y a sus clases puede asistir cualquier ciudadano así no esté matriculado en la universidad.</p><p>La apuesta ahora de la universidad es poner en marcha un programa de empoderamiento de los mercados campesinos e intercambio de saberes con ellos.</p><p><strong>Universidad de Cartagena: Maestría para el posconflicto.</strong></p><p>La de Cartagena abrió la primera y única maestría en Construcción de Paz y Posconflicto que ofrecen las universidades del Caribe. Este programa arrancó en septiembre de 2013, actualmente hay dos componentes en curso y otros tres esperan grado.</p><p>La maestría recoge la experiencia adquirida por la universidad gracias a su trabajo en el Observatorio de Desplazamiento, el cual funciona desde el 2001 y actualmente se encuentra en un proceso de reestructuración para integrar el enfoque de construcción de paz y resolución de conflictos.</p>" )} className="personaje cin">
            <div className="punto"><span>Bolívar</span></div>
          </div>

          <div onClick={this.handonclic.bind(this, "Sucre", "<p><strong>Corporación Universitaria del Caribe (Cecar): Los nuevos significados que trae la paz</strong></p><p>Desde hace cuatro años la Cecar abrió el Centro de Orientación Socio Jurídica, desde el cual adelantan un trabajo dirigido a víctimas y con enfoque de derechos humanos que ha hecho presencia en los municipios sucreños de los Montes de María, con algunas incursiones en municipios cordobeses.</p><p>El centro es dirigido por Berónica Narváez quien sostiene que uno de los principales aportes del centro y de la apuesta de posconflicto de la universidad es contribuir a los procesos colectivos de reconstrucción de la memoria histórica y la resignificación y reivindicación de los derechos de las víctimas.</p><p>“Con varias de las comunidades que fueron parte de ’la ruta de la muerte’ (una serie de asesinatos de los paramilitares en varios corregimientos de Montes de María) empezamos ha hacer el ejercicio de resignificar la memoria, hacernos la pregunta ¿Quienes eran esas personas que perdimos y qué significaban para nuestras comunidades?”, comentó Narváez.</p><p>En colaboración con la Unidad de Víctimas, el centro ha identificado las fechas conmemorativas de esas comunidades para ayudarlas a reconstruir la memoria pero también para ayudarles a dejar de superar su condición de victimas.</p><p>Para esto, el centro brinda atención sicológica y jurídica a víctimas y excombatientes, quienes tienen la particularidad en muchos casos de haber sido víctimas y victimarios al mismo tiempo. Esto, dice Narváez presenta un reto al momento de su reintegración.</p><p>La universidad, a través del centro, también permite a los estudiantes realizar sus prácticas profesionales en contacto con la comunidad de los Montes de María, en donde pueden desarrollar investigaciones y aportar a la reconciliación.</p>" )} className="personaje sei">
            <div className="punto"><span>Sucre</span></div>
          </div>

          <div onClick={this.handonclic.bind(this, "Córdoba", "<p><strong>Universidad de Córdoba: la hoja de ruta al 2030</strong></p><p>El año pasado se lanzó en la universidad el Plan Paz Córdoba, una iniciativa que pretende desarrollar una hoja de ruta para la implementación de la paz en el departamento partiendo de la academia y que tiene sus objetivos proyectados al 2030.</p><p>Este proyecto tiene como base los seis puntos del Acuerdo de Paz pactados en La Habana y los 17 objetivos de desarrollo sostenible de la ONU aprobados en 2015 que son vinculantes para Colombia.</p><p>En el marco de este programa la universidad creó un fondo para la paz con el cual financia proyectos de impacto en las comunidades afectadas por el conflicto en el departamento.</p><p>Cabe destacar que la Universidad de Córdoba es sujeto de reparación colectiva de la Unidad de Víctimas por haber sufrido una toma paramilitar comandada por Salvatore Mancuso a finales de los 90.</p>" )} className="personaje sie">
            <div className="punto color1"><span>Córdoba</span></div>
          </div>


        </div>
      </div>
    )
  }
}
