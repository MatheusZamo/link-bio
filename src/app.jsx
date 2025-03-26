import { FaHtml5 } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa"
import { FaBootstrap } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { FaReact } from "react-icons/fa"
import { RiNextjsFill } from "react-icons/ri"
import { SiTypescript } from "react-icons/si"
import { SiPrisma } from "react-icons/si"
import { BiLogoPostgresql } from "react-icons/bi"
import { FaGithub } from "react-icons/fa"
import { LuMonitorSmartphone } from "react-icons/lu"
import { RxGlobe } from "react-icons/rx"

const App = () => {
  return (
    <div className="container">
      <div className="content">
        {/* WIDGET 1: Informações do usuário  */}
        <div className="widget1">
          <div className="info-user">
            <div className="img-user">
              <img src="my.jpeg" alt="Imagem do usuário" />
            </div>
            <div className="name-user">
              <h1>Matheus Henrique</h1>
              <span>Desenvolvedor Freelancer</span>
            </div>
          </div>
          <div className="info-icon">
            <img src="smile-icon.png" alt="Ícone complementar" />
          </div>
        </div>

        {/* WIDGET 2: Informações CTA  */}
        <div className="widget2">
          <div className="skills">
            <span className="title-skills">Trabalhando com...</span>
            <ul>
              <li>
                <FaHtml5 className="skills-icons" />
              </li>
              <li>
                <FaCss3Alt className="skills-icons" />
              </li>
              <li>
                <FaBootstrap className="skills-icons" />
              </li>
              <li>
                <RiTailwindCssFill className="skills-icons" />
              </li>
              <li>
                <FaReact className="skills-icons" />
              </li>
              <li>
                <RiNextjsFill className="skills-icons" />
              </li>
              <li>
                <SiTypescript className="skills-icons" />
              </li>
              <li>
                <SiPrisma className="skills-icons" />
              </li>
              <li>
                <BiLogoPostgresql className="skills-icons" />
              </li>
              <li>
                <FaGithub className="skills-icons" />
              </li>
            </ul>
          </div>
        </div>

        {/* WIDGET 3: Redes sociais e link do site  */}
        <div className="widget3">
          <a href="#" target="_blank" className="site">
            <div className="text-site">
              <h1>Meu Site</h1>
              <span>Portfolio</span>
            </div>
            {/* <LuMonitorSmartphone className="img-site" /> */}
            <RxGlobe className="img-site" />
          </a>

          {/* Redes sociais  */}
          <div className="redes-sociais">
            <a
              className="box-social youtube"
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              className="box-social instagram"
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="box-social spotify"
              href="https://spotify.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-spotify"></i>
            </a>
            <a
              className="box-social mail"
              href="mailto:seuemail@email.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* WIDGET 4: Call to action adicional  */}
        <div className="widget4">
          <a href="#" className="cta" target="_blank">
            <i className="fas fa-calendar-alt"></i>
            <h1>Lorem ipsum dolor sit amet.</h1>
          </a>
        </div>

        {/* WIDGET 5: Embeds do Spotify  */}
        <div className="widget5">
          <span>Estou escutando...</span>

          <iframe
            title="deezer-widget"
            src="https://widget.deezer.com/widget/dark/track/602456552"
            width="100%"
            height="140"
            frameborder="0"
            allowtransparency="true"
            allow="autoplay; clipboard-write"
            loading="lazy"
          ></iframe>
          <iframe
            title="deezer-widget"
            src="https://widget.deezer.com/widget/dark/track/137726987"
            width="100%"
            height="140"
            frameborder="0"
            allowtransparency="true"
            allow="autoplay; clipboard-write "
            loading="lazy"
          ></iframe>
          <iframe
            title="deezer-widget"
            src="https://widget.deezer.com/widget/dark/track/3016378181"
            width="100%"
            height="140"
            frameborder="0"
            allowtransparency="true"
            allow="autoplay; clipboard-write"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export { App }

// <!DOCTYPE html>
// <html lang="pt-br">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>TITULO</title>

//     <!-- Estilos externos -->
//     <link rel="stylesheet" href="css/styles.css">
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

//     <!-- Favicon -->
//     <link rel="icon" type="image/x-icon" href="#">
// </head>

// <body>

//     <!-- Container principal -->

// </body>

// </html>
