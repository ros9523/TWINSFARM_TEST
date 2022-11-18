import React from "react";


import "../components/styles/form.css";

const Form = () => {

  
  return (
    <div className="container">
      <form className="form">
        <h1 className="form_title">Completa tu Registro</h1>
        <div></div>
        <div className="form_names">
          <input
            className="input"
            type="text"
            id="name"
            name="Name"
            placeholder="Nombre"
          />
          <input
            className="input"
            type="text"
            id="Apellido"
            name="Apellido"
            placeholder="Apellido"
          />
        </div>
        <div className="form_pass">
          <i className="bx bx-lock-alt"></i>
          <input
            className="input input--pass"
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
          />
        </div>
        <div className="form_pass">
          <i className="bx bx-lock-alt"></i>
          <input
            className="input input--pass"
            type="password"
            id="password"
            name="password"
            placeholder="Ingresa nuevamente"
          />
        </div>
        <p className="form_text">
          Password must be at least 8 characters and contain at least two of the
          following: uppercase letters, lowevercase letters, numbers ans symbols
        </p>
        <div className="form_checkboxs">
          <li>
            <input className="checkbox" type="checkbox" />
            <label className="checkbox_label" for="logged in">
              Keep me logged in
            </label>
          </li>
          <li>
            {" "}
            <input className="checkbox" type="checkbox" />
            <label className="checkbox_label" for="newsletters">
              Sign me up for newsletters
            </label>
          </li>

          <li>
            <input className="checkbox" type="checkbox" />
            <label className="checkbox_label" for="Registrate con">
              Sign me up for newsletters
            </label>
          </li>
        </div>
        <button className="form_register">Registrate</button>
        <div className="form_texts">
          <p className="form_text2">
            YA TENES CUENTA? <spam className="form_spam">Ingresá</spam>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;
