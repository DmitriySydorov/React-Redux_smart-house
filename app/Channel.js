export default class Channel {
	constructor(ch, maxCH) {   // переключение каналов
		this.ch = ch;
		this.maxCH = maxCH;
	}
	get channel() {
		return this.ch;
	}
	nextCH() {    //следующий канал
		if (this.ch < this.maxCH) {
			 this.ch++;
		}
		else{
			this.ch = 0;
		}
	}

	prevCH() {     //предыдущий канал
		if (this.ch > 0) {
			this.ch--;
		}
		else {
			 this.ch = this.maxCH;
		}
	}
}