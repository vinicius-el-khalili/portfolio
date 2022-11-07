import React from "react"
type myProps={
    words:string[],
}

class TypedWords extends React.Component<myProps,{
    currentWord:string,
    text:string,
    flag:boolean,
    dt:number}>{
    constructor(props:myProps){
        super(props)
        this.state={
            currentWord:"default",
            text:"default",
            flag:true,
            dt:200
        }
        this.writeWord=this.writeWord.bind(this)
    }
    recursiveWrite(index:number=0){
        if (this.state.flag){
            setTimeout(() => {
                let text = this.state.text+this.state.currentWord[index]
                this.setState({text:text})
                if (text.length >= this.state.currentWord.length){
                    this.recursiveUnwrite()
                }else{
                    this.recursiveWrite(index+1)
                }
            }, this.state.dt)
        }
    }
    recursiveUnwrite(index:number=this.state.currentWord.length){
        if (this.state.flag){
            setTimeout(() => {
                let text = this.state.text.slice(0,index)
                console.log(text)
                this.setState({text:text})
                if (index <= 1){
                    this.recursiveWrite()
                }
                this.recursiveUnwrite(index-1)
            }, this.state.dt)
        }else{
            return null
        }
    }
    writeWord(word:string){
        this.setState({flag:true,text:"",currentWord:word})
        this.recursiveWrite()
    }
    render(): React.ReactNode {
        return(<>
        
        <div className="TypedWords" onClick={()=>{this.writeWord("yayaya")}}>
            <div className="word">{this.state.text}</div>
        </div>

        </>)
    }
}

export default TypedWords