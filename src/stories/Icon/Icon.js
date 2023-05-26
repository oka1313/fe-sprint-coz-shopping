import bookmarkOff from "../../images/bookmark_icon_off.png";
import bookmarkOn from "../../images/bookmark_icon_on.png";

export const iconNames = [bookmarkOff, bookmarkOn];

export const Icon = ({ icon, size, ...rest }) => {
  return (
    <img
      src={icon}
      style={{ width: `${size}px`, height: `${size}px` }}
      alt={icon}
      {...rest}
    />
  );
};
