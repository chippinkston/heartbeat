import React,  {Component} from 'react';

const fetalChartID = 'fetalChart';

class FetalInputs extends Component{
	render(){
		return(
			<div className="card border-dark">
				<div className="card-header text-white bg-danger">Fetal Heartbeat (HB)</div>
				<div className="card-body">
					<form>
						<div className="accordion" id="fetalControls">
							<div className="accordion-item">
								<h2 className="accordion-header" id="fetalAmplitude">
									<button className="accordion-button" type="button" data-bs-toggle="collapse"
											data-bs-target="#collapseOne" aria-expanded="false"
											aria-controls="fetalAmplitude">
										Fetal Heartbeat Controls
									</button>
								</h2>
								<div id="fetalAmplitude" className="accordion-collapse collapse show"
									 aria-labelledby="fetalAmplitude" data-bs-parent="#fetalAmplitude">
									<div className="accordion-body">
										<div className="mb-3">
											<label htmlFor="fetalAmplitude" className="form-label">Fetal HB Amplitude</label>
											<input type="range" className="form-range" min="0" max="20" step="1" id="fetalAmplitudeRange" defaultValue="15" />
										</div>
										<div className="mb-3">
											<label htmlFor="fetalAmplitudeVariation" className="form-label">Fetal HB Variation</label>
											<input type="range" className="form-range" min="0" max="15" step="1" id="fetalAmplitudeVariation" defaultValue="3" />
										</div>
									</div>
								</div>
							</div>
    					</div>
					</form>
				</div>
			</div>
		);
	}
}

export default FetalInputs;