import './ContactLinks.css';

const ContactLinks = () => {

  return (
    <div className="contacts-links">
      <div className="contact-link">
        <img  src="/image/phone.svg" alt="phone" height={29} />
        <p className="text-link">
        +358 40 5213 914
        </p>
      </div>
      <div className="contact-link">
        <img src="/image/mail.svg" alt="mail" width={25} height={29} className="mail-link" />
        <p className="text-link">
        info@geegokids.com
        </p>
      </div>
      <div className="contact-link">
        <p className="text-link">
          Rautatienkatu 21 B<br />
          33100 Tampere <br />
          Finland
        </p>
      </div>
    </div>
  );
};

export default ContactLinks;