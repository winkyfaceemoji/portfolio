//Import Styling
import pagestyles from '@/styles/Page.module.css'
import navstyles from '@/styles/Nav.module.css'
import globalstyles from '@/styles/Home.module.css'

// Import Next Components
import Link from 'next/link'
function ProjectSection(){
    return (<>
            <div className={`${pagestyles.page}`}>
                <div className={`${pagestyles.blur} `}>
                    <div id={`${pagestyles.projectbackground}`}>
                    </div>
                </div>
                <div className={`${pagestyles.maincontent}`}>
                    <div className={`${globalstyles.flexrow} ${globalstyles.spacebetween}`}>
                            <div className={`${pagestyles.subcontainer} ${globalstyles.flexcol}`}>
                                <h1>Projects</h1>
                            </div>
                            <div className={`${pagestyles.subcontainer} ${globalstyles.flexcol}`}>
                                <h2>Media Library</h2>
                                <h2>ToolBox</h2>
                            </div>
                    </div>
                </div>   
            </div>
        </>)
}

function InfoSection(){
    return (<>
            <div className={`${pagestyles.page}`}>
                <div className={`${pagestyles.blur} `}>
                    <div id={`${pagestyles.projectbackground}`}>
                    </div>
                </div>
                <div className={`${pagestyles.maincontent}`}>
                    <div className={`${globalstyles.flexrow} ${globalstyles.spacebetween}`}>
                            <div className={`${pagestyles.subcontainer} ${globalstyles.flexcol}`}>
                                <h1>About Me</h1>
                            </div>
                            <div className={`${pagestyles.subcontainer} ${globalstyles.flexcol}`}>
                                <h2>Experience</h2>
                                <h2>ToolBox</h2>
                            </div>
                    </div>
                </div>   
            </div>
        </>)
}

function SkillsSection (){

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
                    <div className={`${globalstyles.flexrow} ${globalstyles.spacebetween} p-10`}>
                        <div className={`${pagestyles.subcontainer} ${globalstyles.flexcol}`}>
                           {skillInfo[selection]["Heading"].map((x : string) => <h3 className={`text-left`} key={`SkillHeading${x}`}>{x}</h3>)}
                        </div>
                        <div className={`${pagestyles.subcontainer} ${globalstyles.flexcol}`}>
                            {skillInfo[selection]["Description"].map((x : string) => <h3 className={`text-right`} key={`SkillDescription${x}`}>{x}</h3>)}
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
                            <h2 className={`m-4`}>Ideation</h2>
                            <h2 className={`m-4`}>Creation</h2>
                            <h2 className={`m-4`}>Governance</h2>
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
            <SkillsSection />
            <ProjectSection />
            <InfoSection />
        </>
        
    )

}