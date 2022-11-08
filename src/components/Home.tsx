import React from 'react'
type Props={

}
class Home extends React.Component<Props,{}>{
    constructor(props:Props){
        super(props)
    }
    render(): React.ReactNode {
        return(<>

            <div className="Home">
                <nav className="Navbar">
                    <button className="Nav-button">About</button>
                    <button className="Nav-button">Skills</button>
                    <button className="Nav-button">Projects</button>
                    <button className="Nav-button">Contact</button>
                </nav>
                <div className="MainContainer">
                    <div className="MySection">
                        <div className="PresentationBox">
                            <div className="Photo"><img src="snoopydoggo.png"/></div>
                            <h1>Vinicius El Khalili</h1>
                            <h4>Frontend developer</h4>
                            <div className="Links">
                                <a><img src="icons8-github.svg"/></a>
                                <img src="icons8-gmail.svg"/>
                                <img src="icons8-instagram.svg"/>
                            </div>
                        </div>
                    </div>
                    <div className="ScreenSection">
                    </div>
                </div>
            </div>
        </>)
    }
}

export default Home