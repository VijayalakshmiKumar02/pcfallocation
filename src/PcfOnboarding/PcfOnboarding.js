import React    from "react";
import "./PcfOnboarding.css";
import { RadioGroup, RadioButton } from 'react-radio-buttons';
class PcfOnboarding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "PCF Org/ Space/ User Alloaction"
    };
  }
  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };
  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    console.log("You have submitted:", this.state.selectedOption);
  };
  render() {
    return (
      <div>
        <div>
        <h3>Onboarding Requests</h3>
        </div>
        <form onSubmit={this.handleFormSubmit}>
        <div>  Select Your requirement type </div><br/>
        <input type="radio"  name="requirement_type" value="PCF Org/ Space/ User Alloaction"checked={this.state.selectedOption === "PCF Org/ Space/ User Alloaction"} onChange={this.handleOptionChange} /> PCF Org /Space /User Allocation 
        
        <input type="radio" name= "requirement_type" value="Product Onboarding"checked={this.state.selectedOption === "Product Onboarding"} onChange={this.handleOptionChange} /> Product Onboarding
        
        <div className="form-group">
                <button className="btn btn-primary mt-2" type="submit">
                  Save
                </button>
              </div>
        </form>
      </div>
    )
  }
}

export default PcfOnboarding;
