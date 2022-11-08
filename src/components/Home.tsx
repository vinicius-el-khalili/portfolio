import React from 'react'
import TypedWords from './TypedWords'
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
                    <button className="Nav-button">Test</button>
                </nav>
                <div className="MainContainer">
                    <div className="MySection">
                        <div className="PresentationBox">
                            <div className="Photo"><img src=""/></div>
                            <h1>...</h1>
                            <h4><TypedWords texts={[
                                "..."
                            ]}/></h4>
                            <div className="Links">
                                <a href=""><img src="icons8-github.svg"/></a>
                                <img src="icons8-gmail.svg"/>
                                <img src="icons8-instagram.svg"/>
                            </div>
                        </div>
                    </div>
                    <div className="ScreenSection">
                        <section className="About">
                            <h1>About</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint libero labore laboriosam non ipsam nostrum dignissimos. </p>
                        </section>
                        <section className="About">
                            <h1>Skills</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint libero labore laboriosam non ipsam nostrum dignissimos. </p>
                        </section>
                        <section className="Projects">
                            <h1>Projects</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestiae inventore dicta.</p>
                        </section>
                    </div>
                </div>
            </div>
        </>)
    }
}

export default Home