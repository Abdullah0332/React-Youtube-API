import React, { Component } from 'react';

export default class InputField extends Component{

    state={value:''}

    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.value)
    }
    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.handleSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.value} 
                            onChange={e=>{this.setState({value:e.target.value})}} 
                        />
                    </div>
                </form>
            </div>
        )
    }
}