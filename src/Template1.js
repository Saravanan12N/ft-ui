import React from "react";
import Modal from './OptionModel';
// export class Header extends React.Component {
//     render() {

//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>

//         )
//     }
// }

export const Header = (props) => {
    return (
        <div className="header">
            <div className="container">
            <h1 className="header__title">{props.title}</h1>
        <h2 className="header__subtitle">{props.subtitle}</h2>
            </div>
       
    </div>

    )
}

Header.defaultProps = {
    title: 'Default Props'
}

// export class Action extends React.Component {

//     render() {
//         return (
//             <div>
//                 <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>What should i do?</button>
//             </div>
//         )
//     }
// }

export const Action = (props) => {
    return(
        <div>
                <button className="big-button" disabled={!props.hasOptions} 
                onClick={props.handlePick}>What should i do?</button>
            </div>
    )
}

// export class Options extends React.Component {

//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {this.props.options.map((option) => <Option key={option} optiontext={option}>{option}</Option>)}

//             </div>
//         )
//     }
// }

export const Options = (props) => {
    return (<div>
        <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
                        <button onClick={props.handleDeleteOptions}>Remove All</button>
        </div>

        {props.options.length === 0 && <p className="widget__message">Please add an option!</p>}
        
                        {props.options.map((option,index) => 
                        
                        <Option
                         key={option}
                        optiontext={option}
                        count={index+1}
                        handleDeleteOption={props.handleDeleteOption}
                        >{option}</Option>)}
        
                    </div>
                )
} 

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 <li key={this.props.optiontext}>{this.props.optiontext}</li>
//             </div>
//         )
//     }
// }

export const Option = (props) => {
    return(
        <div className="option">
           <p className="option__text">{props.count}. {props.optiontext}</p>
            <button
             onClick={(e)=>{
                props.handleDeleteOption(props.optiontext)
             }}
             className="button button--link"
             >
                remove
                </button>
        </div> 
    )
}

export class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.hanldeAddOption = this.hanldeAddOption.bind(this);
        this.state = {
            error : undefined
        }
    }
    hanldeAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(()=>{
            return {
                error : error
            }
        })


    }
    render() {
        return (
            <div>
               {this.state.error && <p>{this.state.error}</p> }
                <form className="add-option" onSubmit={this.hanldeAddOption}>
                    <input className="add-option__input" type="text" name="option"></input>
                    <button className="button">Add Option</button>
                </form>
            </div>
        )
    }
}

export class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            options: ['Thing one', 'Thing two', 'Thing three'],
            selectedOption : undefined
        };
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    componentDidMount(){
        console.log('fetching data');
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        this.setState(() => ({
        
                options
            
        }))
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
            console.log('saving Data');
        }
        
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    handleDeleteOption(optionToRemove){
        this.setState((prevStat)=>({
            options:prevStat.options.filter((option) => {
                return optionToRemove!==option;
            })
        }))
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption : option
        }))
    }

    handleClear = () => {
        this.setState(()=>({
            selectedOption : undefined
        }))
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        } else {
            this.setState((prevStat) => {
                return {
                    options: prevStat.options.concat([option])
                }
            })
        }
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a acomputer';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className="container">
                <Action
                    handlePick={this.handlePick}
                    hasOptions={this.state.options.length > 0 ? true : false} />
                <div className="widget">
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
                </div>
                
                
                <Modal
                    selectedOption = {this.state.selectedOption}
                    handleClear = {this.handleClear}
                />
                </div>
            </div>
        )
    }
}


