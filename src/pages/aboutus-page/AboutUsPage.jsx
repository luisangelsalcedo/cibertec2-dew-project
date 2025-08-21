import { Container } from "@/components";
import "./aboutus.scss";

export function AboutUsPage() {
  const valores = [
    {
      titulo: "Calidad",
      descripcion: "Utilizamos ingredientes frescos y de primera calidad en cada uno de nuestros sanguches."
    },
    {
      titulo: "Tradición",
      descripcion: "Mantenemos vivas las recetas tradicionales peruanas con un toque moderno y auténtico."
    },
    {
      titulo: "Servicio",
      descripcion: "Brindamos una atención cálida y personalizada para que cada cliente se sienta como en casa."
    },
    {
      titulo: "Pasión",
      descripcion: "Cada sanguche está preparado con amor y dedicación por nuestro equipo de cocina."
    }
  ];

  const historia = [
    {
      año: "2015",
      evento: "Fundación de La Chola en Lima, con una pequeña sanguchería en el centro de la ciudad."
    },
    {
      año: "2017",
      evento: "Apertura del segundo local y reconocimiento como una de las mejores sangucherías de Lima."
    },
    {
      año: "2020",
      evento: "Expansión a Trujillo y lanzamiento del servicio de delivery durante la pandemia."
    },
    {
      año: "2023",
      evento: "Llegada a Chiclayo y consolidación como cadena regional de sangucherías."
    },
    {
      año: "2024",
      evento: "Más de 50,000 clientes satisfechos y reconocimiento nacional por la calidad de nuestros productos."
    }
  ];

  const equipo = [
    {
      nombre: "María González",
      cargo: "Fundadora y Chef Principal",
      descripcion: "Con más de 15 años de experiencia en gastronomía peruana, María es el corazón culinario de La Chola."
    },
    {
      nombre: "Carlos Ramírez",
      cargo: "Gerente General",
      descripcion: "Especialista en administración de restaurantes, Carlos lidera nuestro crecimiento y expansión."
    },
    {
      nombre: "Ana Torres",
      cargo: "Jefa de Calidad",
      descripcion: "Garantiza que cada ingrediente y cada sanguche cumplan con nuestros estándares de excelencia."
    }
  ];

  return (
    <div className="aboutus-page">
      <Container>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Nuestra Historia</h1>
            <p className="hero-subtitle">
              Desde 2015, La Chola ha sido sinónimo de sabor auténtico y tradición peruana. 
              Comenzamos como un pequeño sueño familiar y hoy somos la sanguchería favorita 
              de miles de peruanos.
            </p>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              [Imagen de la primera sanguchería]
            </div>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="mission-vision">
          <div className="mission">
            <h2>Nuestra Misión</h2>
            <p>
              Brindar a nuestros clientes los mejores sanguches peruanos, preparados con 
              ingredientes frescos y de calidad, manteniendo viva la tradición culinaria 
              de nuestro país mientras ofrecemos un servicio excepcional que supere las 
              expectativas de cada persona que nos visita.
            </p>
          </div>
          <div className="vision">
            <h2>Nuestra Visión</h2>
            <p>
              Ser la cadena de sangucherías más reconocida y querida del Perú, expandiendo 
              nuestra presencia a nivel nacional e internacional, siendo embajadores de la 
              gastronomía peruana y un referente de calidad, tradición e innovación en el 
              sector gastronómico.
            </p>
          </div>
        </section>

        {/* Valores */}
        <section className="valores-section">
          <h2>Nuestros Valores</h2>
          <div className="valores-grid">
            {valores.map(({ titulo, descripcion }) => (
              <div key={titulo} className="valor-card">
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Historia */}
        <section className="historia-section">
          <h2>Nuestra Trayectoria</h2>
          <div className="timeline">
            {historia.map(({ año, evento }, index) => (
              <div key={año} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-year">{año}</div>
                <div className="timeline-content">
                  <p>{evento}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Nuestro Equipo */}
        <section className="equipo-section">
          <h2>Nuestro Equipo</h2>
          <div className="equipo-grid">
            {equipo.map(({ nombre, cargo, descripcion }) => (
              <div key={nombre} className="equipo-card">
                <div className="equipo-foto">
                  <div className="foto-placeholder">
                    [Foto de {nombre}]
                  </div>
                </div>
                <h3>{nombre}</h3>
                <h4>{cargo}</h4>
                <p>{descripcion}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Compromiso */}
        <section className="compromiso-section">
          <div className="compromiso-content">
            <h2>Nuestro Compromiso</h2>
            <div className="compromiso-grid">
              <div className="compromiso-item">
                <h3>Con la Calidad</h3>
                <p>
                  Seleccionamos cuidadosamente cada ingrediente, trabajamos con proveedores 
                  locales y mantenemos estrictos controles de calidad en todas nuestras 
                  preparaciones.
                </p>
              </div>
              <div className="compromiso-item">
                <h3>Con la Comunidad</h3>
                <p>
                  Apoyamos a productores locales, generamos empleo en las comunidades donde 
                  operamos y participamos activamente en iniciativas sociales de nuestras ciudades.
                </p>
              </div>
              <div className="compromiso-item">
                <h3>Con el Medio Ambiente</h3>
                <p>
                  Implementamos prácticas sostenibles en nuestras operaciones, reducimos el 
                  desperdicio de alimentos y utilizamos empaques eco-amigables para nuestros deliveries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reconocimientos */}
        <section className="reconocimientos-section">
          <h2>Reconocimientos</h2>
          <div className="reconocimientos-grid">
            <div className="reconocimiento-item">
              <h3>"Mejor Sanguchería de Lima"</h3>
              <p>Revista Gastronómica Peruana - 2022</p>
            </div>
            <div className="reconocimiento-item">
              <h3>"Empresa del Año en Gastronomía"</h3>
              <p>Cámara de Comercio de Lima - 2023</p>
            </div>
            <div className="reconocimiento-item">
              <h3>"5 Estrellas en Calidad de Servicio"</h3>
              <p>Asociación Peruana de Restaurantes - 2024</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>¡Ven y Vive la Experiencia La Chola!</h2>
            <p>
              Te invitamos a visitarnos en cualquiera de nuestros locales y descubrir por qué 
              somos la sanguchería favorita de miles de peruanos. ¡Tu paladar nos lo agradecerá!
            </p>
            <div className="cta-buttons">
              <a href="/productos" className="btn btn-primary">Ver Nuestro Menú</a>
              <a href="/contactenos" className="btn btn-secondary">Ubicaciones</a>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}