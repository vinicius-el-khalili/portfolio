import React from "react"

function delay(time:number,callback:Function){ // use setTimeout synchonously
    return new Promise((resolve)=>{setTimeout(()=>{callback();resolve(null)},time)})
}
type Props={
    texts:string[]
}
class TypedWords extends React.Component<Props,{
    output:string,
    current:string
    running:boolean
}>{
    constructor(props:Props){
        super(props)
        this.state={
            output:"",
            current:"0123456789",
            running:false
        }
        this.cycle=this.cycle.bind(this)
    }
    async write(){
        let output=""
        this.setState({output:output})
        for (let i=0;i<this.state.current.length;i++){
            await delay(500/this.state.current.length,()=>{
                output+=this.state.current[i]
                this.setState({output:output})
            })
        }
    }
    async unwrite(){
        let output=this.state.current
        this.setState({output:output})
        for (let i=this.state.current.length;i>=0;i--){
            await delay(500/this.state.current.length,()=>{
                output=this.state.current.slice(0,i)
                this.setState({output:output})
            })
        }
    }
    async cycle(){
        if (this.state.running){console.log("nope");return null}
        this.setState({running:true})
        let i=0
        while (true){
            this.setState({current:this.props.texts[i]})
            await this.write()
            await delay(500,()=>{})
            await this.unwrite()
            i++
            if(i>=this.props.texts.length){
                i=0
            }
        }
    }
    componentDidMount(): void {
        this.cycle()
    }
    render(): React.ReactNode {
        return(
            <>{this.state.output}_</>
        )
    }
}

export default TypedWords