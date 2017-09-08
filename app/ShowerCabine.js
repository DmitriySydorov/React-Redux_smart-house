import Device from "./Device";
import Range from "./Range"

export default class ShowerCabine extends Device {
	constructor(name, tempWater = new Range(36, 20, 50, 1), _bright = new Range(20, 0, 100, 10), mode='Shower') {
		super(name);
		this.tempWater = tempWater;                                  //температура воды
		this._bright =_bright;                                          //яркость света в кабине
		this.mode = mode;
	}

	nextTemp() {
		this.tempWater.increase();
	};
	prevTemp() {
		this.tempWater.decrease();
	};

	increaseBright(){
		this._bright.increase();
	}
	decreaseBright() {
		this._bright.decrease();
	}
	modeShower(){
		this.mode='Shower';
	}
	modeJacuzzi(){
		this.mode='Jacuzzi';
	}
	modeMassage(){
		this.mode='Massage';
	}
}
