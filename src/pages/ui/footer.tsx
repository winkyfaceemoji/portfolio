//Import Styling
import pagestyles from '@/styles/Page.module.css'
import navstyles from '@/styles/Nav.module.css'
import globalstyles from '@/styles/Home.module.css'
import footstyles from '@/styles/footer.module.css'

import Link from 'next/link'

export default function Footer () {

    const gitHubLink ="https://github.com/winkyfaceemoji";
    const socialLink = "https://www.linkedin.com/in/adam-chou";
    const emailLink = '';
    return (<>
            <div id={`${footstyles.footerpage}`} className={`${globalstyles.flexrow}`} >
                <div id={`${footstyles.footercontent}`} className={`${globalstyles.flexrow} ${globalstyles.spacebetween}`}>
                    <div className={`${globalstyles.flexcol} text-[50px]`}>
                            <h1>Contact Me</h1>
                        </div>
                    <div className={`${globalstyles.flexcol} text-right`}>
                        <Link className={`${globalstyles.links}`} href={`${gitHubLink}`}>GitHub</Link>
                        <Link className={`${globalstyles.links}`} href={`${socialLink}`}>LinkedIn</Link>
                        <Link className={`${globalstyles.links}`} href={`${emailLink}`}>Email</Link>
                    </div>
                </div>
            </div>
        </>)
}