import Image from "next/image";
import styles from "../styles/Features.module.css";
const Features = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/../public/img/feature.png"
        className="d-block w-100"
        alt=""
        width="2000px"
        height="700"
      />
    </div>
  );
};

export default Features;
