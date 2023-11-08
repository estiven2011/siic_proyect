import './home.css' 
import fotop from '../../assets/img/Imgcarrusel2.jpg'
function Home() {
  return (
    <div>
      <div className='top-container'>
      <h1 className='titulop'>Explora el futuro de la Inteligencia Computacional</h1><br></br>
      <h2 className='titulos'>Donde el conocimiento se fusiona con la tecnología</h2>
      </div>
      <section>
        <h3 className='h3'>Información del Semillero</h3>
        <p className='pe'>¡Te damos la bienvenida al emocionante mundo del Semillero de Inteligencia Computacional! Este es el lugar donde la frontera entre la ciencia y la tecnología se difumina, dando paso a un horizonte de innovación y descubrimiento sin límites. En este viaje, te sumergirás en un fascinante universo de algoritmos inteligentes, aprendizaje automático y soluciones vanguardistas que están moldeando el futuro de la humanidad.<br></br>
                            En nuestro semillero, creemos en la capacidad de las máquinas para aprender, razonar y tomar decisiones de manera asombrosamente parecida a la mente humana. Aquí, explorarás temas apasionantes como la inteligencia artificial, el análisis de datos y la robótica, todos ellos desempeñando un papel fundamental en la evolución de la tecnología.
                            A medida que te adentres en nuestro semillero, te convertirás en un participante activo de la próxima revolución tecnológica. Descubrirás cómo las máquinas pueden comprender y resolver problemas complejos, cómo pueden contribuir al progreso de la sociedad y cómo pueden mejorar la vida de las personas en todo el mundo.</p>
        <div className='fototo'>
        <img src={fotop} alt="" className=' rounded-md justify-center' />
        </div>
        <p className='pp'> Así que, ¿estás listo para unirte a nosotros en este emocionante viaje hacia el futuro? En el Semillero de Inteligencia Computacional, te invitamos a ser parte de una comunidad dedicada a impulsar el potencial de la tecnología para el bien de la humanidad. ¡Únete a nosotros hoy mismo y sé parte de la revolución tecnológica que está transformando el mundo!</p>
      </section>
      <a href="login"> 
      <button className='boton'>Únete ahora</button><br></br><br></br>
      </a>
      <hr />
      <h3 className='h3'>Testimonios</h3>
      <div className="testimonials">
        <div className="testimonial">
          <p>Ingresar al Semillero de Inteligencia Computacional cambió mi vida por completo. Fue como abrir una puerta a un mundo de posibilidades infinitas. Aprendí a programar máquinas para que piensen y resuelvan problemas de manera asombrosa. ¡No puedo esperar para ver qué más nos depara el futuro de la tecnología!</p><br></br>
          <p> - Melissa Jaramillo, Graduada del Politécnico Colombiano Jaime Isaza Cadavid</p>
        </div>
        <div className="testimonial">
          <p>Cuando decidí unirme al semillero, no tenía idea de la magnitud de lo que aprendería. Ahora, puedo desarrollar algoritmos que toman decisiones en situaciones complejas, como nunca antes imaginé. Esta experiencia me ha abierto puertas y oportunidades que ni siquiera sabía que existían.</p><br></br>
          <p>- Juan Manuel Cano, Desarrollador de Software.</p>
        </div>
      </div>
      <section>
    <div className='bob-container'>  
        <h3 className='infos'>Información del Semillero</h3>
        <p className='mini'><strong>IDENTIFICACIÓN:</strong></p>
        <p className='tex'>El Semillero de Investigación en Inteligencia Computacional  SIIC, pertenece a la Línea Potencial de Sistemas, Informática y Telecomunicaciones - Nudo Problémico en Inteligencia Computacional y al Grupo de Investigación en Ingeniería Sostenible - (GIS) de la Facultad de Ingeniería del Politécnico Colombiano Jaime Isaza Cadavid.</p>

        <p className='mini'><strong>MISIÓN:</strong></p>
        <p className='tex'>Formar a estudiantes como investigadores en el área de la Inteligencia Computacional y sus aplicaciones en el área de la ingeniería y con ello, dar apoyo a los proyectos de investigación generados dentro del Grupo de Investigación GIS.</p>

        <p className='mini'><strong>VISIÓN:</strong></p>
        <p className='tex'>Ser reconocido como un ente formador de estudiantes investigadores capaces de aplicar conocimientos adquiridos a problemas del entorno académico e industrial, procurando beneficiar distintas comunidades mediante las soluciones que involucren el uso de tecnologías de Inteligencia Computacional.</p>

        <p className='mini'><strong>OBJETIVOS:</strong></p>
        <p className='mn'><strong>Objetivo General:</strong></p>
        <p className='tex'>Fomentar la investigación en el campo de la Inteligencia Computacional, con base en la formación en investigación y en la generación de soluciones proyectadas al mundo académico y laboral.</p>

        <p className='mn'><strong>Objetivos Especifícos:</strong></p>
        <ul>
          <li className='tex'>Dar apoyo a Proyectos de Investigación y Trabajos de Grado generados por el grupo GIS mediante el uso de la Inteligencia computacional y sus aplicaciones a la ingeniería con el fin de formar auxiliares de investigación idóneos para la industria y el sector real.</li>
          <li className='tex'>Capacitar a estudiantes en distintas tecnologías relacionadas con aplicaciones de la inteligencia computacional y su relación con la ingeniería mediante jornadas académicas.</li>
          <li className='tex'>Crear cultura de investigación en los estudiantes de pregrado y maestría mediante su vinculación al semillero con el fin que sea un diario vivir de la institución.</li>
          <li className='tex'>Apoyar ideas de aplicación e investigación en las distintas áreas de la ingeniería en especial las aplicaciones basadas en inteligencia computacional con fin de complementar el aprendizaje visto en el aula de clase.</li>
        </ul>
      </div>
      <footer>
        <p className='coc'><strong>Contacto:</strong></p>
        <p>Jorge Ernesto Espinosa Oviedo</p>
        <p>Email: jeespinosa@elpoli.edu.co</p>
        <p>PhD. Msc. Computer Engineer</p>
        <p>Docente Investigador</p>
        <p>Politécnico Colombiano Jaime Isaza Cadavid</p>
        <p>Tel. 57 (4) 319 79 00 ext 492</p>
        <p>Oficina P19-211 G</p>
      </footer>  
      </section>
    </div>
   
  ); 
}

export default Home;