import React from "react";
import {connect} from "react-redux";
import AddItem from "./components/AddItem";
import DevicesList from "./components/DevicesList";
import * as actions from "./actions";

class App extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      console.dir(this.props.state);
      return (
         <div>
            <AddItem value="Device name" addDevice={this.props.addDevice} />
            <DevicesList
               devices={this.props.devices}
               delDevice={this.props.delDevice}
               on={this.props.on}
               off={this.props.off}
               increase={this.props.increase}
               decrease={this.props.decrease}
               increasech={this.props.increasech}
               decreasech={this.props.decreasech}
               increaseVolume={this.props.increaseVolume}
               decreaseVolume={this.props.decreaseVolume}
               nextTemp={this.props.nextTemp}
               prevTemp={this.props.prevTemp}
               startWasherMachine={this.props.startWasherMachine}
               modeShower={this.props.modeShower}
               modeJacuzzi={this.props.modeJacuzzi}
               modeMassage={this.props.modeMassage}
            />
         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      state: state,
      devices: state.devices
   };
};


export default connect(mapStateToProps, actions)(App)