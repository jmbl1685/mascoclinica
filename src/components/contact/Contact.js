import React from 'react';
import { Element } from 'react-scroll';
import { ContactIsValid, SendEmail } from '../../utils/utils';
import './Contact.css';

export default function Contact(props) {
  const { title, information, SocialNetworkAccounts } = props.values.contact;

  function HandleContact(e) {
    e.preventDefault();
    const { name, lastname, telephone, phone, email, issue, comment } = e.target;

    const contact = {
      name: name.value,
      lastname: lastname.value,
      telephone: telephone.value,
      phone: phone.value,
      email: email.value,
      issue: issue.value,
      comment: comment.value,
    };

    if (ContactIsValid(contact)) {
      SendEmail(contact);
    }

    //e.target.reset();
    //token.reset();
  }

  return (
    <Element name="contact" className="contact container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center">{title}</h1>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <form name="contactForm" onSubmit={event => HandleContact(event)}>
            <p className="fs-13">
              Nombre*
              <br />
              <input type="text" className="input-txt" name="name" id="name" />
            </p>

            <p className="fs-13">
              Apellido*
              <br />
              <input type="text" className="input-txt" name="lastname" id="lastname" />
            </p>

            <p className="fs-13">
              Teléfono
              <br />
              <input type="tel" className="input-txt" name="telephone" id="telephone" />
            </p>

            <p className="fs-13">
              Celular* (10 dígitos)
              <br />
              <input type="tel" className="input-txt" name="phone" id="phone" />
            </p>

            <p className="fs-13">
              Correo Electrónico*
              <br />
              <input type="email" className="input-txt" name="email" id="email" />
            </p>

            <p className="fs-13">
              Asunto*
              <br />
              <input type="text" className="input-txt" name="issue" id="issue" />
            </p>

            <p className="fs-13">
              Comentarios*
              <br />
              <textarea type="text" className="input-txt textarea" name="comment" id="comment" />
            </p>

            <div className="g-recaptcha" data-sitekey="6LcfMXcUAAAAAH3i2wZPdSogEmD8cxh1lbQa80dh" />
            <input type="submit" className="send-btn" value="Send" />
          </form>
          <br />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <h2>
            <i className="fas fa-map-marker-alt" /> Dirección:
          </h2>
          <p>{information.address}</p>
          <h2>
            <i className="fas fa-envelope" /> Correo Electrónico:
          </h2>
          <p>{information.email}</p>
          <h2>
            <i className="fas fa-phone" /> Teléfono:
          </h2>
          <p>{information.telephone}</p>
          <h2>
            <i className="fas fa-mobile" /> Celular:
          </h2>
          <p>
            <i className="fab fa-whatsapp" /> {information.phone}
          </p>

          <h2>
            <i className="fas fa-share-square" /> Siguenos en nuestras redes sociales
          </h2>
          <div className="social-icons">
            {SocialNetworkAccounts.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon"
                >
                  <i className={item.iconClass} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Element>
  );
}
