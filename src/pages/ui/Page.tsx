//Import Styling
import pagestyles from '@/styles/Page.module.css'
import navstyles from '@/styles/Nav.module.css'
import globalstyles from '@/styles/Home.module.css'
// Import Next Components
import Link from 'next/link'

function ContactSection(){


}

function AboutSection (){

}

function InfoSection (){

    const skillInfo : any = {
                    Idea : {
                            Heading : [
                                    "UI/UX Design:",
                                    "Visual Planning:",
                                    "Documentation:",
                                ],
                            Description : [
                                "Figma",
                                "Miro",
                                "Notion",
                            ]
                        },
                    Create : {
                        Heading : [
                            "Web Development:",
                            "Data Analytics:",
                            "Storage:",
                        ],
                        Description : [
                            "React, NextJS, Node, TypeScript",
                            "Python, Pandas, Numpy, Excel",
                            "Git, SQL, POSTGRESQL",
                        ]
                    },
                    Govern : {
                        Heading : [
                                "Customer Relationship Management (CRM):",
                                "Enterprise Resource Planning (ERP):",
                                "HR & Payroll Software:",
                        ],
                        Description : [
                            "SalesForce",
                            "Oracle Netsuite",
                            "E-Pay Systems",
                        ]
                    },
                    }

    function SkillList (selection : string){ 
        return (<>
                    <div className={`${globalstyles.flexrow} ${globalstyles.spacebetween} p-5px`}>
                        <div className={`${pagestyles.subcontainer} ${globalstyles.flexcol}`}>
                           {skillInfo[selection]["Heading"].map((x : string) => <h3 key={`SkillHeading${x}`}>{x}</h3>)}
                        </div>
                        <div className={`${pagestyles.subcontainer} ${globalstyles.flexcol}`}>
                            {skillInfo[selection]["Description"].map((x : string) => <h3 key={`SkillDescription${x}`}>{x}</h3>)}
                        </div>
                    </div>
                    
                </>)
    }
    return(
        <>
            <div className={`${pagestyles.page}`}>
                <div className={`${pagestyles.blur} `}>
                    <div id={`${pagestyles.infobackground}`}>
                    </div>
                </div>
                <div className={`${pagestyles.maincontent}`}>
                    <div className={`${pagestyles.subcontainer}`}>
                        <h1>Blessed with a Mind that Wanders</h1>
                    </div>
                    <div className={`${pagestyles.subcontainer}`}>
                        <div className={`${globalstyles.flexcol} `}>
                            {SkillList("Idea")}
                        </div>
                        <div className={`${globalstyles.flexrow} ${globalstyles.rightalign}`}>
                            <h2>Ideation</h2>
                            <h2>Creation</h2>
                            <h2>Governance</h2>
                        </div>
                    </div>
                    
                </div>   
            </div>
        </>
    )
}

function HomeSection (){
    return(
        <>
            <div className={`${pagestyles.page}`}>
                <div className={`${pagestyles.blur} `}>
                    <div id={`${pagestyles.landingbackground}`}>
                    </div>
                </div>
                <div className={`${pagestyles.maincontent}`}>
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
        <>
        
            <HomeSection />
            <InfoSection />
        </>
        
    )

}