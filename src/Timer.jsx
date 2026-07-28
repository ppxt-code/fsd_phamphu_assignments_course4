import React from 'react';
class Timer extends React.Component {
    constructor() {
        super();
        this.state = {duration: 0}; // elapsed time in seconds
        this.intervalId = null;
    }
    formatDuration = (duration) => {
        const hours = Math.floor(duration/3600);
        const mn = Math.floor((duration%3600)/60);
        const sec = duration%60;
        return [String(hours).padStart(2,"0"),String(mn).padStart(2,"0"),String(sec).padStart(2,"0")].join(':');
    }
    increment = () =>
        {this.intervalId = setInterval(()=>{this.setState({duration: this.state.duration+1});},1000);}
    stop = () => {clearInterval(this.intervalId);};
    reset = () => {this.setState({duration:0}); clearInterval(this.intervalId);}
    render() {
        return (<div>
            <h4 style={{margin: "50px"}}>{this.formatDuration(this.state.duration)}</h4>
            <div style={{display:"flex",margin:"10px", gap:"10px"}}>
                <button onClick={this.increment}>start</button> 
                <button onClick={this.stop}>stop</button>
                <button onClick={this.reset}>reset</button>
            </div>
        </div>);
    }
}
export default Timer;