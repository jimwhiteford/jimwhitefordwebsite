import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function MobileMenuButton({ onClick }: any) {
  return (
    <button className="" onClick={onClick}>
      <FontAwesomeIcon
        className="text-neutral-600 text-[19px] ml-5"
        icon={faBars}
      />
    </button>
  );
}

export default MobileMenuButton;
