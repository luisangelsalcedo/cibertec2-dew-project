import { Container } from "@/components";
import ContactForm from "./ContactForm";

import direccionIcon from "@/assets/svg/icono_direccion.svg";
import telefonoIcon from "@/assets/svg/icono_telefono.svg";
import emailIcon from "@/assets/svg/icono_email.svg";
import horarioIcon from "@/assets/svg/icono_horario.svg";
import videoFile from "@/assets/videos/video.mp4";

import "./ContactPage.scss";
export function ContactPage() {
 return (
    <main>
      <div className="contactenos-page">
        <Container>
          <h2>
            <strong>Escríbenos</strong> y comparte con nosotros
          </h2>

          <div className="flex">
            <ContactForm />

            <div className="contact-data">
              <ul>
                <li>
                  <img src={direccionIcon} alt="Dirección" />
                  Jr. Cruz de Piedra 673, Cajamarca
                </li>
                <li>
                  <img src={telefonoIcon} alt="Teléfono" />
                  (076) 305501
                </li>
                <li>
                  <img src={emailIcon} alt="Correo" />
                  contacto@lacholasangucheria.com
                </li>
                <li>
                  <img src={horarioIcon} alt="Horario" />
                  Cerrado ahora
                </li>
              </ul>

              <video controls id="video">
                <source src={videoFile} type="video/mp4" />
                Tu navegador no soporta video.
              </video>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}

