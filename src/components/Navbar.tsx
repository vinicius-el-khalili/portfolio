import React from 'react'
import NavButton from './NavButton'
type Props={
    home_handleNavButton:any
}
class Navbar extends React.Component<Props,{}>{
    constructor(props:Props){
        super(props)
        
    }
    render(): React.ReactNode {return(<>
        
<nav className="Navbar">
    <NavButton home_handleNavButton={this.props.home_handleNavButton} section="About">About</NavButton>
    <NavButton home_handleNavButton={this.props.home_handleNavButton} section="Skills">Skills</NavButton>
    <NavButton home_handleNavButton={this.props.home_handleNavButton} section="Projects">Projects</NavButton>
    <NavButton home_handleNavButton={this.props.home_handleNavButton} section="Contact">Contact</NavButton>
</nav>
        
    </>)}
}
export default Navbar