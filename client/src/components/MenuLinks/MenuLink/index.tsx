import { Link, useLocation } from "react-router-dom";
import styles from "../MenuLinks.module.scss";

interface MenuLinkProps {
  hrefPage: string;
  children: string;
  onClick?: (event: any) => void;
}

export default function MenuLink({
  hrefPage,
  children,
  onClick,
}: MenuLinkProps) {
  const location = useLocation();

  return (
    <Link
      to={hrefPage}
      className={`
                ${location.pathname === "/" ? styles.link : ""}    
                ${styles.link}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
