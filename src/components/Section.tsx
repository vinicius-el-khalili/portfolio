import React from 'react'
type Props={
    children:React.ReactNode
}
class Section extends React.Component<Props,{}>{
    constructor(props:Props){
        super(props)
    }
    render(): React.ReactNode {
        return(<>
        
    {this.props.children}
        
        </>)
    }
}
export default Section