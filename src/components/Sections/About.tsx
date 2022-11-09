import React from 'react'
type Props={}
class About extends React.Component<Props,{}>{
    constructor(props:Props){
        super(props)
    }
    render(): React.ReactNode {
        return(<>
        
<section className="About">
    <h1>About</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint libero labore laboriosam non ipsam nostrum dignissimos. </p>
</section>
        
        </>)
    }
}
export default About