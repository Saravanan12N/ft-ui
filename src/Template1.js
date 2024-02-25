import React from "react";

export class Header extends React.Component {
    render() {

        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>

        )
    }
}

export class Action extends React.Component {
    handleClick() {
        alert('HandlePick');
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>What should i do?</button>
            </div>
        )
    }
}

export class Options extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAll=this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        console.log(this.props.options);
        alert('handleRemoveAll');
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {this.props.options.map((option) => <Option key={option} optiontext={option}>{option}</Option>)}

            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <li key={this.props.optiontext}>{this.props.optiontext}</li>
            </div>
        )
    }
}

export class AddOption extends React.Component {
    hanldeAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if (option) {
            alert(option);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.hanldeAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

export class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a acomputer';
        const options = ['Thing one', 'Thing two', 'Thing three'];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        )
    }
}


