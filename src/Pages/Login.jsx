import React, { useState, useEffect } from 'react';
import '../CSS/Login.css';
import projectApi from '../api/proyectApi';
import { Link, Navigate, useNavigate } from 'react-router-dom';











function Login() {

    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [images, setImages] = useState([
        './Images/home-phones.png',
        './Images/home-phones2.png',
        './Images/home-phones3.png',
    ]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const navigate = useNavigate();

    
    useEffect(() => {
        // Cambia la imagen cada 5 segundos
        const intervalId = setInterval(() => {
            setCurrentImageIndex((currentImageIndex) => (currentImageIndex + 1) % images.length);
        }, 5000);

        // Limpia el intervalo cuando el componente se desmonta
        return () => clearInterval(intervalId);
    }, [images.length]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Aquí podrías enviar la información de inicio de sesión al servidor para verificar las credenciales del usuario
        console.log(`Email: ${email}, Password: ${password}`);
        // history.push("/home");
        try {
           // const { data } = await projectApi.post('/auth/', {
           //   email,
             // password,
            //});

            //console.log(data)
      
            //localStorage.setItem('token', data.token);
            //localStorage.setItem('token-init-date', new Date().getTime().toString());

            navigate("/inicio");


            
      
                } catch (error) {
      console.log(error)
          }
    };

   

    return (
        <>
            <div className="contenedor">
                <section className='principal'>
                    <main>
                        <div className="contenedorimagen">
                            <div className="imagenfondo">
                                <img src={images[currentImageIndex]} alt="Imagen de fondo" />
                            </div>
                        </div>

                        <div className="inicioSesion">
                            <div className='iniciocontenedor'>
                                <div className="logo">
                                    <img src="./Images/logo-Pinteres.png" alt="Logo de Pinterest" />
                                </div>
                                <div className="formulario">
                                    <form className='formlogin' onSubmit={handleSubmit}>
                                        <label>
                                            <input type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                        </label>
                                        <label>
                                            <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                        </label>

                                        <button  className='buttonlogin' type="submit">        Iniciar Sesión
</button>
                                        <p className='descripcionregistro'>¿Aun no estas en Pinteres?</p>
                                        <Link to = "/register">
                                            Registrarse
                                        </Link>

                                    </form>
                                </div>
                            </div>


                        </div>
                    </main>


                    <footer>
                        <div className='enlaces'>
                            <a href=''>Términos del servicio</a>
                            <a href=''>Política de privacidad</a>
                            <a href=''>Ayuda</a>
                            <a href=''>Usuarios</a>
                            <a href=''>Colecciones</a>
                            <a href=''>Hoy</a>
                        </div>

                        <div className='fecha'>
                            <p>©2023 Pinterest clone</p>
                        </div>

                    </footer>


                </section>



            </div>

        </>
    );
}

export default Login;