import React from "react";

export class Header extends React.Component{
    render(){
        
        return(
            <div>
                 <h1>{this.props.title}</h1>
                 <h2>{this.props.subtitle}</h2>
            </div>

        )
    }
}

export class Action extends React.Component{
    render(){
        return(
            <div>
                <button>What should i do?</button>
            </div>
        )
    }
}

export class Options extends React.Component{
    render(){
        return(
            <div>
                {this.props.options.map((option)=><li key={option}>{option}</li>)}
               
            </div>
        )
    }
}


export class AddOption extends React.Component{
    render(){
        return(
            <div>
                AddOption component here
            </div>
        )
    }
}

export class IndecisionApp extends React.Component{
    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a acomputer';
        const options = ['Thing one','Thing two','Thing three'];
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action/>
                <Options options={options}/>
                <AddOption/>
            </div>
        )
    }
}


