
import './SocialIcons.css';

const SocialIcons = () => {
  return (
    <div className="list-social">
      <a
        href="https://www.instagram.com/geegokids_fi/"
        target="_blank" rel="noreferrer"
        className="link"
      >
        <img src="/image/instagram.svg" alt="instagram img" width={48} height={48} className="icon-social" />
      </a>
      <a href="https://www.facebook.com/geegokids" target="_blank" rel="noreferrer">
        <img src="/image/facebook.svg" alt="instagram img" width={48} height={48} className="icon-social" />
      </a>
      <a href="https://www.youtube.com/channel/UCBvf4ff8Y_QpF3OPaH8K6Xw" target="_blank" rel="noreferrer">
        <img src="/image/youtube.svg" alt="youtube img" width={48} height={48} className="icon-social" />
      </a>
    </div>
  );
};

export default SocialIcons;