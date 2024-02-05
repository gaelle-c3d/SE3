import { createRef, useRef, useEffect } from 'react';
import React, {Component} from 'react';
import viewGL from '../providers/viewGL.js' ;
//import * as THREE from 'three';
import './viewer.scss'


class Viewer extends Component{
   private   canvasRef: React.RefObject<HTMLCanvasElement >
    private viewGL:viewGL |  null  = null;//new viewGL();    
   constructor(props: any) {
     super(props);
 
     this.state = {
       initialized: false,
     };
 
     this.canvasRef = React.createRef();
    //this.viewGL = new viewGL( this.canvasRef);
   }
   

    // ******************* COMPONENT LIFECYCLE ******************* //

        componentDidMount() {
            console.log('used')
        // Get canvas, pass to custom class
        const canvas = this.canvasRef.current;
      if (!this.viewGL)   this.viewGL  = new viewGL(canvas);
     // if( this.viewGL)    this.viewGL = new viewGL(canvas);
       console.log(window)

        // Init any event listeners
       window.addEventListener('mousemove', this.mouseMove);
       window.addEventListener('resize', this.handleResize);
    }

/*     componentDidUpdate(prevProps, prevState) {
        // Pass updated props to 
        const newValue = this.props.whateverProperty;
        this.viewGL.updateValue(newValue);
    }
 */
    componentWillUnmount() {
        // Remove any event listeners
        window.removeEventListener('mousemove', this.mouseMove);
        window.removeEventListener('resize', this.handleResize);
    }

    // ******************* EVENT LISTENERS ******************* //
    mouseMove = (event:any) => {
      if( this.viewGL)  this.viewGL.onMouseMove();
        console.log(event)
    }

    handleResize = () => {
      if(this.viewGL)  this.viewGL.onWindowResize(window.innerWidth, window.innerHeight);
    };
    


    render(){
return(
 <div className='viewer'>
<canvas id='three-canvas' ref={this.canvasRef}></canvas>
</div>
   )}

}





export default Viewer;
