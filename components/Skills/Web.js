import Image from 'next/image'
import styles from "styles/main.module.scss";


const Web = () => {
  return ( 
    <div className={styles.webImg}>
      <Image 
        src="/static/images/laptop.png"
        alt="Laptop.jpg"
        width={1957} 
        height={1138}
      />
    </div>
  );
}
 
export default Web;