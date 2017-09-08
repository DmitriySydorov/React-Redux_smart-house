import React from "react";
import Button from "./Button";
import Switcher from "./Switcher";

export default class DevicesList extends React.Component {
   constructor(props) {
      super(props);
      console.dir(props);
   }
   render() {
      let devicesArr = [];
      for (let device of this.props.devices.values()) {
         devicesArr.push(device);
      }

      return (
         <div>
            {devicesArr.map(
               (value, index) => 
               <div key={index} className={value.constructor.name}>
                  <div>Name: {value.name}</div>
                  <div>Type: {value.constructor.name}</div>
                  <Switcher
                     feature={"State: " + (value.state ? "On" : "Off")}
                     onChangeLeft={() => this.props.on(value.name)}
                     onChangeRight={() => this.props.off(value.name)}
                     leftButtonText="On"
                     rightButtontext="Off"
                  />

                  {value.constructor.name === "Tv" ?
                       <Switcher
                        feature={"Bright: " + value._bright.range+"%"}
                        onChangeLeft={() => this.props.decrease(value.name)}
                        onChangeRight={() => this.props.increase(value.name)}
                        leftButtonText="-"
                        rightButtontext="+"
                     />
                  : ""}
	               {value.constructor.name === "Tv" ?
                       <Switcher
                           feature={"Channel: " + value._channel.ch}
                           onChangeLeft={() => this.props.decreasech(value.name)}
                           onChangeRight={() => this.props.increasech(value.name)}
                           leftButtonText="<-"
                           rightButtontext="->"
                       />
		               : ""}
                   {value.constructor.name === "Tv" ?
                          <Switcher
                              feature={"Volume: " + value._volume.range}
                              onChangeLeft={() => this.props.decreaseVolume(value.name)}
                              onChangeRight={() => this.props.increaseVolume(value.name)}
                              leftButtonText="-"
                              rightButtontext="+"
                          />
                          : ""}
	               {value.constructor.name === "WasherMachine" ?
		               <Switcher
			               feature={"Water temperature: " + value.tempWater.range+"C°"}
			               onChangeLeft={() => this.props.prevTemp(value.name)}
			               onChangeRight={() => this.props.nextTemp(value.name)}
			               leftButtonText="-"
			               rightButtontext="+"
		               />
		               : ""}
		               {value.constructor.name === "WasherMachine" ?
			               <div><div >status: {value.status}</div>
			               <Button onClick={() => this.props.startWasherMachine(value.name)} text="START" />
			               </div>
		               : ""}
	               {value.constructor.name === "ShowerCabine" ?
                       <Switcher
                           feature={"Water temperature: " + value.tempWater.range+"C°"}
                           onChangeLeft={() => this.props.prevTemp(value.name)}
                           onChangeRight={() => this.props.nextTemp(value.name)}
                           leftButtonText="-"
                           rightButtontext="+"
                       />
		               : ""}
	               {value.constructor.name === "ShowerCabine" ?
                       <Switcher
                           feature={"Bright: " + value._bright.range+"%"}
                           onChangeLeft={() => this.props.decrease(value.name)}
                           onChangeRight={() => this.props.increase(value.name)}
                           leftButtonText="-"
                           rightButtontext="+"
                       />
		               : ""}
                   {value.constructor.name === "ShowerCabine" ?
                       <div>
                          <div>Active mode: {value.mode}</div>
                          <Button onClick={() => this.props.modeShower(value.name)} text="Shower" />
                          <Button onClick={() => this.props.modeJacuzzi(value.name)} text="Jacuzzi" />
                          <Button onClick={() => this.props.modeMassage(value.name)} text="Massage" />
                       </div>
		               : ""}

                  <Button onClick={() => this.props.delDevice(value.name)} text="Delete" />
               </div>
            )}
         </div>
      );
   }
}