import styles from "../styles/PizzaList.module.css";

import PizzaCard from "./PizzaCard";
const PizzaList = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.texts}>THE BEST PIZZA IN TOWN</h2>
      </div>
      <PizzaCard />
    </>
  );
};

export default PizzaList;
