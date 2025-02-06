import pagestyles from '@/styles/Page.module.css'
import navstyles from '@/styles/Nav.module.css'
import Link from 'next/link'


function ContactSection(){


}

function AboutSection (){

}

function InfoSection (){
    return(
        <>
            
        </>
    )
}

function HomeSection (){
    return(
        <>
            <div className={`${pagestyles.page}`}>
                <div className={`${pagestyles.blur} `}>
                    <div id={`${pagestyles.landing}`}>
                    </div>
                </div>
                <div id={`${pagestyles.maincontent}`}>
                    <h1>Adam Chou</h1>
                    <ul id={`${navstyles.mainnavbox}`}>
                        <h4>| WORK</h4>
                        <h4>| MEDIA</h4>
                        <h4>| ABOUT</h4>
                        <br></br>
                        <h4>| CONTACT</h4>
                    </ul>
                </div>   
            </div>
        </>
    )
}

export default function Page (){
    return(
        <HomeSection />
        
    )

}