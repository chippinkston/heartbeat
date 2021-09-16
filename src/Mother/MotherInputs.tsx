import React,  {Component} from 'react';

const motherChartID = 'motherChart';

class MotherInputs extends Component{
	render(){
		return(
			<div className="card border-dark">
				<div className="card-header text-white bg-danger">Mother Heartbeat (HB)</div>
				<div className="card-body">
					<form>
						<div className="accordion" id="motherControls">
							<div className="accordion-item">
								<h2 className="accordion-header" id="motherAmplitude">
									<button className="accordion-button" type="button" data-bs-toggle="collapse"
											data-bs-target="#collapseOne" aria-expanded="false"
											aria-controls="MotherAmplitude">
										Mother Heartbeat Controls
									</button>
								</h2>
								<div id="motherAmplitude" className="accordion-collapse collapse show"
									 aria-labelledby="motherAmplitude" data-bs-parent="#motherAmplitude">
									<div className="accordion-body">
										<div className="mb-3">
											<label htmlFor="motherAmplitude" className="form-label">Mother HB Amplitude</label>
											<input type="range" className="form-range" min="0" max="20" step="1" id="MotherAmplitudeRange" defaultValue="15" />
										</div>
										<div className="mb-3">
											<label htmlFor="MotherAmplitudeVariation" className="form-label">Mother HB Variation</label>
											<input type="range" className="form-range" min="0" max="15" step="1" id="MotherAmplitudeVariation" defaultValue="3" />
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

export default MotherInputs;