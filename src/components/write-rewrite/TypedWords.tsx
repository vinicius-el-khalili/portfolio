import React from "react"

type Props={

}
function delay(time:number,callback:Function) {  
    return new Promise((resolve) => {
        setTimeout(() => {
            callback()
            resolve(null)
        }, time)
    });
  }
class TypedWords extends React.Component<Props,{
    color:string
}>{
    constructor(props:Props){
        super(props)
        this.state={
            color:"blue"
        }
    }
    render(): React.ReactNode {
        return(
            <h1 style={{
                width:"100vw",
                height:"100vh",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                color:this.state.color
            }}  onClick={async ()=>{
                console.log("wait...")
                await delay(1000,()=>{console.log("hey")})
                console.log("check!")
            }}
            >hello!!!1</h1>
        )
    }
}

export default TypedWords