import AnimatedVideo from './AnimatedVideo';
import './HeroSection.css';
import Slogan from './Slogan';

export default function HeroSection() {
  return (
    <div className="section">
      <AnimatedVideo/>
      <Slogan />
    </div>
  );
}