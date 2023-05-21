 
import React, { useState } from "react";
 
import styles from "../../styles/css/Navbar.module.css";
import{FaShoppingCart, FaBlog} from "react-icons/fa";
import{HiHome,HiInformationCircle, HiSun} from "react-icons/hi";
import{AiFillShopping} from "react-icons/ai";
import {CgProfile} from "react-icons/cg";
import {BsMoonFill,BsFillSunFill} from "react-icons/bs";
 
const Navbar = () => {
  const [darkMode,setMode]=useState(false);
  const[display,setDisplay]=useState({
    profile:false,
    shopCart:false
  })
  
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <p><span>Happy</span>shop</p>
      </div>
      <div className={styles.leftContainer}> 
        <ul>
          <li>
          <a href="#"><HiHome className={styles.icons}/>home</a>
          </li>
          <li>
            <a href="#"><AiFillShopping  className={styles.icons}/>shop</a>
          </li>
          <li>
            <a href="#"><FaBlog className={styles.icons}/>blog</a>
          </li>
          <li>
            <a href="#"><HiInformationCircle className={styles.icons}/>about</a>
          </li>
        </ul>
      </div>

      <div className={styles.rightContainer}>
        
            <a className={styles.shopCart}>
              <FaShoppingCart onClick={()=> setDisplay({profile:false,shopCart:true})} name="shopCart" className={styles.icons1}/>
              <span>1</span>
              <p className={display.shopCart?styles.shopCart1:styles.shopCart2}>shop cart</p>
            </a>
            <a>
               <CgProfile onClick={()=> setDisplay({profile:true,shopCart:false})}  name="profile" className={styles.icons1}/>
               <p className={display.profile?styles.shopCart1:styles.shopCart2}>profile</p>
            </a>
            
      </div>
      <div  className={darkMode?styles.darkMode:styles.lightMode}  onClick={()=>setMode(!darkMode)}>
              <div>{darkMode?<BsMoonFill className={styles.toggleIcons}/>:<BsFillSunFill className={styles.toggleIcons}/>}</div>
            </div>
    </div>
  );
};

export default Navbar;
