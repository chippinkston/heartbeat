import React,  {Component} from 'react';
import MotherInputs from "../Mother/MotherInputs";
const motherChartID = 'motherChart';

class MotherDisplay extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col chicken">
                        <div id={motherChartID}>
                            Mother Chart goes here
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MotherDisplay;