import { Container } from "../container/Container";
import "./footer.scss";
import { FbIcon, IgIcon, TkIcon, LogoFooter } from "@/assets/svg";

export function Footer() {
  const links = [
    {
      title: "Enlaces de Interes",
      items: [
        {
          label: "Trabaja con nosotros",
          link: "#",
        },
        {
          label: "Libro de reclamaciones",
          link: "#",
        },
      ],
    },
    {
      title: "Nuestros Locales",
      items: [
        {
          label: "Lima",
          link: "#",
        },
        {
          label: "Trujillo",
          link: "#",
        },
        {
          label: "Chiclayo",
          link: "#",
        },
      ],
    },
  ];

  return (
    <footer>
      <Container>
        {links.map(({ title, items }) => (
          <div key={title}>
            <h3>{title}</h3>
            <ul>
              {items.map(({ label, link }) => (
                <li key={label}>
                  <a href={link}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div class="redes">
          <h3>Siguenos en:</h3>
          <ul>
            <li>
              <a href="#">
                <FbIcon alt="icono facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <IgIcon alt="icono instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <TkIcon alt="icono tiktok" />
              </a>
            </li>
          </ul>
        </div>
        <LogoFooter alt="Logo" className="logo" />
      </Container>
    </footer>
  );
}
