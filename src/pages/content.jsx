import Perfil from '../assets/Perfil.jpg';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import Verificar from '../assets/verificar.png'


import '../App.scss';

const Conteudo = () => {
    return (

        <div className="container-content">
            <div className="box">
                <div className="box-header">


                    <img
                        src={Perfil}
                        alt="Foto de perfil"
                        className='img-profile' />

                    <div className="title">
                        <h1>Eduarda Martins <i>
                            <img src={Verificar} alt="" /></i></h1>

                        <div className="bio">
                            <p>Mais do que unhas, é auto-estima. Designer que cuida e encanta. Fale comigo! 💖</p>
                        </div>
                    </div>
                </div>

                <nav className="links">
                    <li><i>
                        <FaWhatsapp />
                    </i>
                        <a href="https://wa.me/5581984410216?text=Olá, gostaria de mais informações sobre seu trabalho!">Agende seu horário agora <span>📲</span></a></li>
                    <li>
                        <i>
                            <FaTiktok />

                        </i>
                        <a href="https://www.tiktok.com/@dumartinstudio">Tiktok <span>✨💋</span></a></li>
                    <li>
                        <i>
                            <FaInstagram />

                        </i>
                        <a href="https://www.instagram.com/dumartinstudio/">Instagram <span>📸💅</span></a></li>
                </nav>
            </div>
        </div>
    )
}

export default Conteudo;