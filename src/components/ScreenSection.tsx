import React from 'react'
import Section from './Section'
import About from './Sections/About'
import SSkills from './Sections/skills/SSkills'
import Projects from './Sections/Projects'
import Contact from './Sections/Contact'

type Props={
    ref:any // type of React.CreateRef()
}
class ScreenSection extends React.Component<Props,{section:string}>{

    constructor(props:Props){
        super(props)
        this.state={
            section:"Skills"
        }
    }
    changeSection(section:string){this.setState({section:section})}
    render(): React.ReactNode {
        return(<>
        
<section className="ScreenSection">

    <Section>
        {this.state.section==="About"&&<About></About>}
        {this.state.section==="Skills"&&<SSkills></SSkills>}
        {this.state.section==="Projects"&&<Projects></Projects>}
        {this.state.section==="Contact"&&<Contact></Contact>}
    </Section>

</section>

        </>)
    }
}
export default ScreenSection