import React, { Component } from 'react';
import InputField from './Input'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

export default class App extends Component{

    state={ videos:[] , onSelect:null }

    componentDidMount(){
        this.onValueSubmint('Latest trailer')
    }

    onValueSubmint= async value=>{
        const response= await youtube.get('/search',{
            params:{
                q:value
            }
        })
        this.setState({ 
            videos : response.data.items ,
            onSelect : response.data.items[0]
        })
    }

    onSelect = video =>{
        this.setState({ onSelect:video })
    }

    render(){
        return (
            <div className="ui container">
                <InputField onFormSubmit={this.onValueSubmint}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.onSelect} /> 
                        </div>
                        <div className="five wide column">
                            <VideoList 
                            onSelect={this.onSelect}
                            videos={this.state.videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}