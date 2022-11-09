import React from 'react'
type Props={
    children:React.ReactNode,
    home_handleNavButton:any,
    section:string
}
class NavButton extends React.Component<Props,{}>{
    constructor(props:Props){
        super(props)
    }
    render(): React.ReactNode {return(<>

<button className="Nav-button" onClick={()=>{this.props.home_handleNavButton(this.props.section)}}>{this.props.children}</button>
        
    </>)}
}
export default NavButton