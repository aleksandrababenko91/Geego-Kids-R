import './ContactLinks.css';
import phone from '../../../../public/images/phone.svg';
import mail from '../../../../public/images/mail.svg';

const ContactLinks = () => {

  return (
    <div className="contacts">
      <div className="contact">
        <img  src="./image/phone" alt="phone image" height={29} />
        <p className="text">
        +358 40 5213 914
        </p>
      </div>
      <div className="contact">
        <img src="./image/mail" alt="mail image" width={25} height={29} className="mail" />
        <p className="text">
        info@geegokids.com
        </p>
      </div>
      <div className="contact">
        <p className="text">
          Rautatienkatu 21 B<br />
          33100 Tampere <br />
          Finland
        </p>
      </div>
    </div>
  );
};

export default ContactLinks;