import React from "react";
import "./login.css"
// import {globalContext} from "../../contexto/contexto";


// const signIn = document.querySelector("#signInButton");
// const signUp = document.querySelector("#signUpButton");
// const signInForm = document.querySelector(".container .sign-in-form");
// const signUpForm = document.querySelector(".container .sign-up-form");
// const overlay_container = document.querySelector(
//   ".container .overlay-container"
// );
// const overlay = document.querySelector(
//   ".container .overlay-container .overlay"
// );

// signIn.addEventListener("click", () => {
//   overlay_container.style.transform = "translateX(100%)";
//   overlay.style.transform = "translateX(-50%)";
//   signInForm.classList.add("active");
//   signUpForm.classList.remove("active");
// });
// signUp.addEventListener("click", () => {
//   overlay_container.style.transform = "translateX(0)";
//   overlay.style.transform = "translateX(0)";
//   signUpForm.classList.add("active");
//   signInForm.classList.remove("active");
// });


// const WebCifarIcon = document.querySelector("#webCifar-icon");
// const WebCifarEl = document.querySelector("#webCifar");

// close.addEventListener("click", () => {
//   WebCifarEl.classList.remove("active");
// });

// youtubeLink.setAttribute("href", "https://youtu.be/7FbpuWOffc0");




const Login= () => {
  // const {overlay, handleOverlayShow, handleOverlayHide} = React.useContext(globalContext);
  return (
    <div>
      <section className=" section">
        <div className="container">
          <div className="form sign-in-form">
            <div className="wrapper">
              <form action="#">
                <h1>Iniciar Sesion</h1>
                <p>Ingresa tu correo y contraseña</p>
                <input type="email" placeholder="Correo electronico" />
                <input type="password" placeholder="Contraseña" />
                <button className=" rounded-md">Ingresar</button>
              </form>
            </div>
          </div>
          <div className="form sign-up-form active">
            <div className="wrapper">
              <form action="#">
                <h1>Crear Cuenta</h1>
                <p>Por favor, proporcione toda la información correcta para crear una cuenta.</p>
                <input type="text" placeholder="Nombre Completo *" className=" rounded-md"/>
                <input type="number" placeholder="Celular *" className=" rounded-md"/>
                <input type="email" placeholder="Coreo Electronico *" className=" rounded-md"/>
                <input type="password" placeholder="Contraseña *" className=" rounded-md"/>
                
                <button className=" rounded-md mt-5">Registrarse</button>
              </form>
            </div>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-left">
                <h1>Crear Cuenta</h1>
                <p>o</p>
                <button id="signInButton" className=" rounded-md">Iniciar Sesion</button>
              </div>
              <div className="overlay-right">
                <h1>Ingresa</h1>
                <p>o</p>
                <button id="signUpButton" className=" rounded-md">Crea una cuenta</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div id="webCifar-sidebox">
        <div id="webCifar">
          <h2 className="logo">Web Cifar</h2>
          <p className="author">Coded By <span>Shaif Arfan</span> </p>
          <div className="items">
            <a href="https://www.youtube.com/channel/UCdxaLo9ALJgXgOUDURRPGiQ" target="_blank" className="item youtubeLink">
              <svg title="watch how we made this" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-.457 1.56-1.675 3.002-3.042 3.68l-3.25-1.812v3.898l3.25-1.812c1.367.678 2.585 2.12 3.042 3.68.456 1.56.212 3.343-.707 4.263-1.215 1.214-3.355 1.214-4.57 0-.623-.624-.88-1.506-.707-2.465.227-1.166.633-2.35 1.207-3.308l-3.218-1.798c-1.02 1.946-1.78 4.42-1.84 6.813-.09 4.104 2.97 7.518 7.073 7.61 2.358.045 4.64-.81 6.823-2.328 2.272-1.62 3.982-4.007 4.942-6.818.79-2.45.858-4.947.095-7.38C16.683 1.25 13.105-.484 10 1.14c-3.105 1.624-4.69 5.22-3.385 8.556-.738 2.432-.69 4.93.1 7.38z" clipRule="evenodd" />
              </svg>
              <p>Watch how we made this.</p>
            </a>
            <a href="https://webcifar.com" target="_blank" className="item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <p>https://webcifar.com</p>
            </a>
          </div>
          <div className="close">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Login;
