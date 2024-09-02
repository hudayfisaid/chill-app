import logo from '../../../../assets/img/logo/movie-open.png';
import { Link } from "react-router-dom";

// Logo component with customizable height, width, and alignment
const Logo = ({ height, width, center }) => {
  return (
    <Link
      to="/"
      className={`flex items-center ${center ? 'justify-center' : 'justify-start'}`}
    >
      <div className="flex items-center space-x-2">
        {/* Logo image with customizable height and width */}
        <img
          src={logo}
          alt="Chill Logo"
          className={`${height || 'h-8'} ${width || 'w-8'}`}
        />
        {/* Logo text */}
        <span className="text-2xl font-bold">CHILL</span>
      </div>
    </Link>
  );
};

export default Logo;
