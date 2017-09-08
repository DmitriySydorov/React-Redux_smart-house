import Device from "./Device";
import Range from "./Range"

export default class WasherMachine extends Device{
	constructor(name,tempWater=new Range(20,20,90,10),time=3000,pressing=true,status='pending'){
		super (name);
		this.tempWater=tempWater;
		this.time=time;
		this.pressing=pressing;
		this.status=status;
	}

	nextTemp() {
		this.tempWater.increase();
	};
	prevTemp() {
		this.tempWater.decrease();
	};
	startWasherMachine() {

		if(this.pressing == true){
			this.status= "WasherMachine start...";
			setTimeout(function () {
		        this.status='WasherMachine stop';
			}.bind(this),this.time+3000);

		}
		else {
			this.status= "WasherMachine start...";
			setTimeout(function () {
				this.status='WasherMachine stop';
			}.bind(this),this.time);
		}
	};
}

