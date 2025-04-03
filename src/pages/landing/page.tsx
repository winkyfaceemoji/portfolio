import styles from "./styles.module.css";
import pagestyles from "../pagestyles.module.css"

export default function Landing() {
    return(
      <div className={`${pagestyles.pageContainer} ${pagestyles.flexbox}`}>

        <div className={`${pagestyles.contentContainer} ${pagestyles.flexbox}`}>
          <div className={pagestyles.flexbox}>
            <h1>Hi, I'm Adam,</h1>
            <h2>a Sales Analyst currently based in NYC.</h2>
          
          </div>
        </div>
        
        <div className={pagestyles.backgroundContainer}>
          <div className={styles.backgroundImage}>

          </div>
        </div>

        
      
      </div>
    )
  }