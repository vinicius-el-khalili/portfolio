import React from "react"

function delay(time:number,callback:Function){ // use setTimeout synchonously
    return new Promise((resolve)=>{setTimeout(()=>{callback();resolve(null)},time)})
}
type Props={}
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
                console.log(i)
            })
        }
        console.log("write done")
    }
    async unwrite(){
        let output=this.state.current
        this.setState({output:output})
        for (let i=this.state.current.length;i>=0;i--){
            await delay(500/this.state.current.length,()=>{
                output=this.state.current.slice(0,i)
                this.setState({output:output})
                console.log(i)
            })
        }
        console.log('unwrite done')
    }
    async cycle(){
        if (this.state.running){console.log("nope");return null}
        this.setState({running:true})
        let msg=["HTML","CSS","JavaScript","TypeScript","Sass","React","Git","Node","Express","MongoDB"]
        let i=0
        while (true){
            this.setState({current:msg[i]})
            await this.write()
            await delay(500,()=>{})
            await this.unwrite()
            i++
            if(i>=msg.length){
                i=0
            }
        }
    }
    render(): React.ReactNode {
        return(
            <div className="TypedWords" onClick={this.cycle}>
                <h1>{this.state.output}_</h1>
            </div>
        )
    }
}

export default TypedWords