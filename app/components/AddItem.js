import React from "react";
import Input from "./Input";
import Button from "./Button";

export default class AddItem extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         name: ""
      };
      this.onChange = this.onChange.bind(this);
   }
   onChange(event) {
      this.setState({
         name: event.target.value
      });
   }
   render() {
      return (
         <form>
            <label>
               {this.props.value}:
               <Input type="text" onChange={this.onChange} value={this.state.name} />

            </label>
	         <Button onClick={() => this.props.addDevice(this.state.name, "WasherMachine")} text="Add__WasherMachine" />
            <Button onClick={() => this.props.addDevice(this.state.name, "Tv")} text="Add__TV" />
            <Button onClick={() => this.props.addDevice(this.state.name, "ShowerCabine")} text="Add__ShowerCabine" />

         </form>
      );
   }
}