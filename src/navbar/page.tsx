import styles from "./styles.module.css";

export default function NavBar() {
    return(
      <div>
        {/* Rainbow Bar */}
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Nav Bar */}
        <nav id={`${styles.nav}`}>
            <div id={`${styles.left}`} className={`${styles.sidecontainer}`}>
                <h1>_AC</h1>
            </div>
            <div id={`${styles.middle}`} className={`${styles.middlecontainer}`}></div>
            <div id={`${styles.right}`} className={`${styles.sidecontainer}`}>
                <ul id={`${styles.navbox}`} className={`${styles.navcontainer}`}>
                    <h4>| WORK</h4>
                    <h4>| MEDIA</h4>
                    <h4>| ABOUT</h4>
                    <br></br>
                    <h4>| CONTACT</h4>
                </ul>
            </div>
        </nav>
      </div>
    )
  }