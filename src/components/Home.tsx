import React from 'react'
import Navbar from './Navbar'
import PresentationBox from './PresentationBox'
import ScreenSection from './ScreenSection'
type Props={

}
class Home extends React.Component<{},{section:string}>{
    state={
        section:"About",
    }
    screenSection: any 
    constructor(props:Props){
        super(props)
        this.home_ChangeSection=this.home_ChangeSection.bind(this)
        this.home_handleNavButton=this.home_handleNavButton.bind(this)
        this.screenSection=React.createRef()
    }
    home_ChangeSection(section:string){
        this.screenSection.current.changeSection(section)
    }
    home_handleNavButton(section:string){
        this.home_ChangeSection(section)
    }

    render(): React.ReactNode {
        return(<>

            <div className="Home">
                <Navbar home_handleNavButton={this.home_handleNavButton}/>
                <div className="MainContainer" >
                    <PresentationBox/>
                    <ScreenSection ref={this.screenSection}/>
                </div>
            </div>
            
        </>)
    }
}

export default Home