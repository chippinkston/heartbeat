import React,  {Component} from 'react';
import FetalInputs from "../Fetal/FetalInputs";
const fetalChartID = 'fetalChart';

class FetalDisplay extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 funky">
                        <div id={fetalChartID}>
                            Fetal Chart will go here
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FetalDisplay;