import styles from "./Item.module.css";

const Item = ({foodItem ,bought,handleBuyButton}) => {
return (
  <li className={`list-group-item ${styles["kg-item"]}  ${bought && 'active'} `}>
    <span className={styles["kg-span"]}>{foodItem}</span>
      <button className={`${styles.button} btn btn-success`} 
      onClick = {handleBuyButton}
      >Buy</button>
  </li>

);
};  
export default Item;