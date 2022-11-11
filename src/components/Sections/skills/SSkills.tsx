import React from 'react'
type Props={}
class SSkills extends React.Component<Props,{}>{
    icons:object
    constructor(props:Props){
        super(props)
        this.icons={
            "html":"icons8-html-5.svg",
            "css":"icons8-css3.svg",
            "javascript":"icons8-javascript.svg",
            "typescript":"icons8-typescript.svg",
            "sass":"icons8-sass.svg",
            "nodejs":"icons8-nodejs.svg",
            "react":"icons8-reagir.svg",
            "mongodb":"icons8-mongodb.svg",
            "git":"icons8-git.svg",
        }
    }
    render(): React.ReactNode {
        return(<>
        
<section className="Skills">
    <h1>Skills</h1>
    <div className="SkillTree">
        <div><img className="skillIcon"src="icons8-html-5.svg"/><h2>HTML 5</h2></div>
        <div><img className="skillIcon"src="icons8-css3.svg"/><h2>CSS 3</h2></div>
        <div><img className="skillIcon"src="icons8-javascript.svg"/><h2>JavaScript ES6</h2></div>
        <div><img className="skillIcon"src="icons8-typescript.svg"/><h2>TypeScript</h2></div>
        <div><img className="skillIcon"src="icons8-sass.svg"/><h2>Sass</h2></div>
        <div><img className="skillIcon"src="icons8-nodejs.svg"/><h2>Node</h2></div>
        <div><img className="skillIcon"src="icons8-reagir.svg"/><h2>React</h2></div>
        <div><img className="skillIcon"src="icons8-mongodb.svg"/><h2>MongoDB</h2></div>
        <div><img className="skillIcon"src="icons8-git.svg"/><h2>Git/Github</h2></div>
    </div>
</section>
        
        </>)
    }
}
export default SSkills