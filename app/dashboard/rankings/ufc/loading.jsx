import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Loading() {
  return (
    <div className=" text-8xl w-min mx-auto my-60 animate-spin text-light-grey dark:text-dark-grey">
      <FontAwesomeIcon icon={faSpinner} />
    </div>
  )
}
