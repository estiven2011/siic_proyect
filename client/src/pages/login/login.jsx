import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [isSignInActive, setIsSignInActive] = useState(true);

  const toggleForm = () => {
    setIsSignInActive(!isSignInActive);
  };

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="overlay-container">
            <div className={`overlay ${isSignInActive ? "right-panel-active" : ""}`}>
              <div className="overlay-panel overlay-left">
                <h1>Iniciar Sesión</h1>
                <p>o</p>
                <button id="signInButton" className="rounded-md" onClick={toggleForm}>
                  Crear Cuenta
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Crea una cuenta</h1>
                <p>o</p>
                <button id="signUpButton" className="rounded-md" onClick={toggleForm}>
                  Ingresa
                </button>
              </div>
            </div>
          </div>

          <div className={`form-container ${isSignInActive ? "" : "right-panel-active"}`}>
            <div className={`form ${isSignInActive ? "" : "sign-up-form active"}`}>
              <form action="#">
                <h1>{isSignInActive ? "Iniciar Sesión" : "Crear Cuenta"}</h1>
                {isSignInActive ? (
                  <>
                    <p>Ingresa tus datos</p>
                    <input type="email" required name="correo" placeholder="Coreo Electronico *" className=" rounded-md"/>
                    <input type="password" required name="contra" placeholder="Contraseña *" className=" rounded-md"/>
                    <select name="rol" id="roles" className="lista rounded-md ">
                      <option value="estudiante">Estudiante</option>
                      <option value="docente">Monitor</option>
                      <option value="administrador">Administrador</option>
                    </select>
                  </>
                ) : (
                  <>
                    <p>Por favor, proporciona toda la información correcta para crear una cuenta.</p>
                    <input type="text" required name="nombreCom" placeholder="Nombres *" className="rounded-md" />
                    <input type="text" required name="primerApe" placeholder="Primer Apellido *" className=" rounded-md"/>
                    <input type="text" required name="segundoApe" placeholder="Segundo Apellido" className=" rounded-md"/>
                    <input type="number" required name="celular" placeholder="Celular *" className=" rounded-md"/>
                    <input type="email" required name="correo" placeholder="Coreo Electronico *" className=" rounded-md"/>
                    <input type="password" required name="contra" placeholder="Contraseña *" className=" rounded-md"/>
                    <select name="rol" id="roles" className="lista rounded-md ">
                      <option value="estudiante">Estudiante</option>
                      <option value="docente">Monitor</option>
                      <option value="administrador">Administrador</option>
                    </select>
                    
                  </>
                )}
                <button className="rounded-md mt-5">
                  {isSignInActive ? "Ingresar" : "Registrarse"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
