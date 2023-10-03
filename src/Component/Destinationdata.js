import{ Component } from 'react'
import "/Users/harshsahcdeva/Desktop/projected/src/Styles/Destination.css"
class Destinationdata extends Component{
    render(){
    return (
        <div className={this.props.className}>
        <div className="des-text">
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
        </div>
         <div className='images'>
         <img alt="image1" src={this.props.img1}/>
         <img alt="image1" src={this.props.img2}/>
     </div>
     </div>
      );
    }
}

export default Destinationdata;
