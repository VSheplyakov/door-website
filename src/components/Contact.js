import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section>
      <div className="container">
        <div className="contact-info">
          <div className="contact-details">
            <h2>Контакти</h2>
            <p>
              <a href="#map"> Адреса: Львів, Стрийська 45а</a>
            </p>
            <p>
              Телефони: <a href="tel:123-456-78-90">123-456-78-90</a>
            </p>
            <p>
              Пошта:{' '}
              <a href="mailto:tamdedveri@gmail.com">tamdedveri@gmail.com</a>
            </p>
          </div>
          <div id="map" className="google-map">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10372.762429019565!2d24.0150321!3d49.8023751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae7c23a8f442f%3A0xd60b5b859b8d6379!2s%D0%A2%D0%B0%D0%BC%20%D0%B4%D0%B5%20%D0%B4%D0%B2%D0%B5%D1%80%D1%96!5e0!3m2!1sen!2sus!4v1595223095886!5m2!1sen!2sus"
              style={{ border: 0, width: '100%', height: '100%' }}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
