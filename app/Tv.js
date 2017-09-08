
import Device from "./Device";
import Channel from "./channel";
import Range from "./Range"

export default class Tv extends Device {
	constructor(name="", bright=new Range(50,0,100,10),channel=new Channel(45,50),volume=new Range(15,0,30,1)){
		super(name);
		this._bright = bright;
		this._channel=channel;
		this._volume=volume;
	}
	increaseBright(){
		this._bright.increase();
	}
	decreaseBright() {
		this._bright.decrease();
	}
	increasech(){
		this._channel.nextCH();
	}
	decreasech(){
		this._channel.prevCH();
	}
	increaseVolume(){
		this._volume.increase()
	}
	decreaseVolume(){
		this._volume.decrease()
	}
}