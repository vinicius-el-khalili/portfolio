import React from 'react'
import TypedWords from './TypedWords'
type Props={}
class PresentationBox extends React.Component<Props,{}>{
    constructor(props:Props){
        super(props)
    }
    render(): React.ReactNode {return(<>

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

    </>)}
}
export default PresentationBox