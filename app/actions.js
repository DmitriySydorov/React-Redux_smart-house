export const addDevice = (name,type = "Device") => {
   return {
      type: "ADD_DEVICE",
      name,
      deviceType: type
   };
};

export const delDevice = (name) => {
   return {
      type: "DEL_DEVICE",
      name
   };
};

export const on = (name) => {
   return {
      type: "ON_DEVICE",
      name
   };
};

export const off = (name) => {
   return {
      type: "OFF_DEVICE",
      name
   };
};

export const increase = (name) => {
   return {
      type: "INCREASE",
      name
   };
};

export const decrease = (name) => {
	return {
		type: "DECREASE",
		name
	};
};
	export const increasech = (name) => {
		return {
			type: "INCREASE_CH",
			name
		};
};
export const decreasech = (name) => {
	return {
		type: "DECREASE_CH",
		name
	};
};
export const decreaseVolume = (name) => {
	return {
		type: "DECREASE_VOLUME",
		name
	};
};
export const increaseVolume = (name) => {
	return {
		type: "INCREASE_VOLUME",
		name
	};
};
export const nextTemp = (name) => {
	return {
		type: "INCREASE_TEMP",
		name
	};
};
export const prevTemp = (name) => {
	return {
		type: "DECREASE_TEMP",
		name
	};
};
export const startWasherMachine = (name) => {
	return {
		type: "START_WASHER_MACHINE",
		name
	};
};
export const modeShower = (name) => {
	return {
		type: "MODE_SHOWER",
		name
	};
};
export const modeJacuzzi = (name) => {
	return {
		type: "MODE_JACUZZI",
		name
	};
};
export const modeMassage = (name) => {
	return {
		type: "MODE_MASSAGE",
		name
	};
};
