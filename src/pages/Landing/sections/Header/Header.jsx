import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "@assets/images/arte-gallera-logo.png";
import video from "/uploads/asd.mp4";
import "./Header.css";
import Typography from "@components/Typography/Typography";
import LoginModal from "@components/Login/components/LoginModal/LoginModal";
import Modal from "@components/Modal/Modal";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openRecharge, setOpenRecharge] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="header">
        <nav className={scrolled ? "header__nav scrolled" : "header__nav"}>
          <button
            className={`header__nav-menu`}
            onClick={() => setToggleMenu((prev) => !prev)}
          >
            <MenuIcon
              sx={{
                color: "white",
              }}
            />
          </button>
          <div
            className={`menu-overlay ${toggleMenu ? "open" : ""}`}
            onClick={() => setToggleMenu(false)}
          ></div>
          <ul className={toggleMenu ? "open" : ""}>
            <button
              onClick={() => setToggleMenu(false)}
              className="menu-btn-close"
            >
              <CloseIcon
                sx={{
                  color: "white",
                }}
              />
            </button>
            <li>
              <Link onClick={() => setOpenModal(true)}>Iniciar Sesión</Link>
            </li>
            <li>
              <Link onClick={() => setOpenRecharge(true)}>Recargar Saldo</Link>
            </li>
          </ul>

          <picture className="header__logo-container">
            <img src={logo} alt="Arte Gallera Logo" />
            <p>arte gallera</p>
          </picture>
        </nav>

        <div className="header__content">
          <video autoPlay loop muted playsInline>
            <source src={video} type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
          <div class="header__overlay"></div>
          <div className="header__title"></div>
          <Typography variant="h1">
            bienvenidos a<span>arte gallera</span>
          </Typography>
          <a href="#event">Proximos Eventos</a>
        </div>
      </header>

      <LoginModal open={openModal} close={setOpenModal} />

      <Modal
        title="Recarga ahora"
        link="https://wa.me/524591087015"
        open={openRecharge}
        close={setOpenRecharge}
      >
        Hola, Para recargar comunícate por WhatsApp al numero{" "}
        <a style={{ color: "#4362a5" }} href="https://wa.me/524591087015">
          +52 1 459 108 7015
        </a>{" "}
        o dando clic en el siguiente enlace donde recibiras tu recarga, usuario
        y contraseña
      </Modal>
    </>
  );
};

export default Header;
