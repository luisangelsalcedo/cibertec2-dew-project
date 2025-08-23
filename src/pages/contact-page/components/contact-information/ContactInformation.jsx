import videoFile from "@/assets/videos/video.mp4";
import {
  DireccionIcon,
  EmailIcon,
  HorarioIcon,
  TelefonoIcon,
} from "@/assets/svg";
import "./contact-information.scss";

export function ContactInformation() {
  return (
    <div className="contact-data">
      <ul>
        <li>
          <DireccionIcon alt="Dirección" />
          Jr. Cruz de Piedra 673, Cajamarca
        </li>
        <li>
          <TelefonoIcon alt="Teléfono" />
          (076) 305501
        </li>
        <li>
          <EmailIcon alt="Correo" />
          contacto@lacholasangucheria.com
        </li>
        <li>
          <HorarioIcon alt="Horario" />
          Cerrado ahora
        </li>
      </ul>

      <video controls id="video">
        <source src={videoFile} type="video/mp4" />
        Tu navegador no soporta video.
      </video>
    </div>
  );
}
