import globals from "globals"

import NavBar from "../navbar/page"
import Experience from "../pages/experience/page"
import Contact from "../pages/contact/page"
import Projects from "../pages/projects/page"
import Landing from "../pages/landing/page"


export default function Home() {
  return (
    <div>
      <NavBar/>
      <div>
        <Landing/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}
