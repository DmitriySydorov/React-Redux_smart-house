import Device from "./Device";
import TV from "./Tv";
import WasherMachine from "./WasherMachine";
import ShowerCabine from "./ShowerCabine";

const initialState = {
   devices: new Map(),
   nameDuplicate: false
};

const reducer = (state = initialState, action) => {
   let newDevices;
   switch (action.type) {
      case "ADD_DEVICE":
         if (!state.devices.has(action.name)) {
            newDevices = new Map();
            for (let item of state.devices.keys()) {
               newDevices.set(item, state.devices.get(item));
            }
            
            let newDevice;
            switch(action.deviceType) {
               case "Tv":
                  newDevice = new TV(action.name);
                  break;
               case "WasherMachine":
                  newDevice = new WasherMachine(action.name);
                  break;
                  case "ShowerCabine":
                  newDevice = new ShowerCabine(action.name);
                  break;
            }
            
            newDevices.set(action.name, newDevice);
            
            return {
               devices: newDevices,
               nameDuplicate: false
            };
         } else {
            let newState = Object.assign({}, state);
            newState.nameDuplicate = true;
            return newState;
         }
      case "DEL_DEVICE":
         newDevices = new Map();
         for (let item of state.devices.keys()) {
            newDevices.set(item, state.devices.get(item));
         }
      
         newDevices.delete(action.name);
      
         return {
            devices: newDevices,
            nameDuplicate: false
         };
      case "ON_DEVICE":
         newDevices = new Map();
         for (let item of state.devices.keys()) {
            newDevices.set(item, state.devices.get(item));
         }
         
         newDevices.get(action.name).on();
         
         return {
            devices: newDevices,
            nameDuplicate: false
         };
      case "OFF_DEVICE":
         newDevices = new Map();
         for (let item of state.devices.keys()) {
            newDevices.set(item, state.devices.get(item));
         }
         
         newDevices.get(action.name).off();
         
         return {
            devices: newDevices,
            nameDuplicate: false
         };
      case "INCREASE":
         newDevices = new Map();
         for (let item of state.devices.keys()) {
            newDevices.set(item, state.devices.get(item));
         }
         
         newDevices.get(action.name).increaseBright();
         
         return {
            devices: newDevices,
            nameDuplicate: false
         };
      case "DECREASE":
         newDevices = new Map();
         for (let item of state.devices.keys()) {
            newDevices.set(item, state.devices.get(item));
         }
         
         newDevices.get(action.name).decreaseBright();
         
         return {
            devices: newDevices,
            nameDuplicate: false
         };
	   case "INCREASE_CH":
		   newDevices = new Map();
		   for (let item of state.devices.keys()) {
			   newDevices.set(item, state.devices.get(item));
		   }

		   newDevices.get(action.name).increasech();

		   return {
			   devices: newDevices,
			   nameDuplicate: false
		   };
	   case "DECREASE_CH":
		   newDevices = new Map();
		   for (let item of state.devices.keys()) {
			   newDevices.set(item, state.devices.get(item));
		   }

		   newDevices.get(action.name).decreasech();

		   return {
			   devices: newDevices,
			   nameDuplicate: false
		   };
       case "DECREASE_VOLUME":
		   newDevices = new Map();
		   for (let item of state.devices.keys()) {
			   newDevices.set(item, state.devices.get(item));
		   }

		   newDevices.get(action.name).decreaseVolume();

		   return {
			   devices: newDevices,
			   nameDuplicate: false
		   };
       case "INCREASE_VOLUME":
		   newDevices = new Map();
		   for (let item of state.devices.keys()) {
			   newDevices.set(item, state.devices.get(item));
		   }

		   newDevices.get(action.name).increaseVolume();

		   return {
			   devices: newDevices,
			   nameDuplicate: false
		   };
		   case "INCREASE_TEMP":
		   newDevices = new Map();
		   for (let item of state.devices.keys()) {
			   newDevices.set(item, state.devices.get(item));
		   }

		   newDevices.get(action.name).nextTemp();

		   return {
			   devices: newDevices,
			   nameDuplicate: false
		   };
		   case "DECREASE_TEMP":
		   newDevices = new Map();
		   for (let item of state.devices.keys()) {
			   newDevices.set(item, state.devices.get(item));
		   }

		   newDevices.get(action.name).prevTemp();

		   return {
			   devices: newDevices,
			   nameDuplicate: false
		   };
		   case "START_WASHER_MACHINE":
		   newDevices = new Map();
		   for (let item of state.devices.keys()) {
			   newDevices.set(item, state.devices.get(item));
		   }

		   newDevices.get(action.name).startWasherMachine();

		   return {
			   devices: newDevices,
			   nameDuplicate: false
		   };
		case "MODE_SHOWER":
				   newDevices = new Map();
				   for (let item of state.devices.keys()) {
					   newDevices.set(item, state.devices.get(item));
				   }

				   newDevices.get(action.name).modeShower();

				   return {
					   devices: newDevices,
					   nameDuplicate: false
				   };
		case "MODE_JACUZZI":
				   newDevices = new Map();
				   for (let item of state.devices.keys()) {
					   newDevices.set(item, state.devices.get(item));
				   }

				   newDevices.get(action.name).modeJacuzzi();

				   return {
					   devices: newDevices,
					   nameDuplicate: false
				   };
	   case "MODE_MASSAGE":
				   newDevices = new Map();
				   for (let item of state.devices.keys()) {
					   newDevices.set(item, state.devices.get(item));
				   }

				   newDevices.get(action.name).modeMassage();

				   return {
					   devices: newDevices,
					   nameDuplicate: false
				   };

default:
         return state;
   }
};

export default reducer;