/** LIBRARIES */
import Image from "next/image";

/** COMPONENTS */
import { images } from "components/assets";

/** STYLES */
import style from "styles/main.module.scss";

const Web = () => {
  return ( 
    <div className={style.webImg}>
      <Image 
        src={images.skillsLaptopIcon}
        alt="laptop"
        width={1957} 
        height={1138}
      />
    </div>
  );
}
 
export default Web;