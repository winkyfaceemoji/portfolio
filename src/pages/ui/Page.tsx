import pagestyles from '@/styles/Page.module.css'
import homestyle from '@/styles/Home.module.css'
import navstyles from '@/styles/Nav.module.css'

function HomePage (){
    return(
        <>
            <div className={`${pagestyles.blur}`}>
                <div id={`${pagestyles.landing}`} className={`${pagestyles.page}`}>
                    
                    <div id={`${homestyle.maincontent}`}>
                        <h1>Adam Chou</h1>
                        <ul id={`${navstyles.navbox}`}>
                            <h4>| WORK</h4>
                            <h4>| MEDIA</h4>
                            <h4>| ABOUT</h4>
                            <br></br>
                            <h4>| CONTACT</h4>
                        </ul>
                    </div>    
                </div>
            </div>
            
        </>

    )

}

export default function Page (){
    return(
        <HomePage />
        
    )

}