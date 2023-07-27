import React from "react";
import footer from "../../images/wave.svg";
import { ImTelegram } from "react-icons/im";
import { BsWhatsapp, BsFillTelephoneFill } from "react-icons/bs";
import { GrInstagram } from "react-icons/Gr";
import { VscDebugBreakpointData } from "react-icons/vsc";
import styles from "../../styles/css/Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <img src={footer} alt="footer wave" />
      
      <div className={styles.Footer}>
        <div className={styles.left}>
          <h2>Happy shop</h2>
          <p>Lorem ipsum dolor sit amet cons</p>
       
        </div>
        <div className={styles.products}>
          <div>
            <h4>
            <VscDebugBreakpointData/>
              clothing
            </h4>
            <p>-Pants</p>
            <p>-shirt</p>
            <p>-coat</p>
          </div>

          <div>
            <h4>
              <VscDebugBreakpointData/>
              Digital appliances
            </h4>
            <p>-television</p>
            <p>-power bank</p>
            <p>-Laptop</p>
          </div>
          <div>
            <h4>
            <VscDebugBreakpointData/>
              accessory
            </h4>
            <p>-Necklaces</p>
            <p>-the ring</p>
            <p>-a bracelet</p>
          </div>
        </div>
        <div className={styles.right}>
          <h4>Ways of communication with our store:</h4>
          <p>
            <BsFillTelephoneFill /> 041-43222222
          </p>
          <p>
            <BsWhatsapp /> 09912222222
          </p>
          <p>
            <ImTelegram /> @happyShop-onlineshop
          </p>
          <p>
            <GrInstagram /> @happy_Shop
          </p>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
