
export default class Range{
   constructor( range,minRange,maxRange,step) {

	   this.range=range;                          //значение по умолчанию диапазона
	   this._maxRange=maxRange;                     //максимальное значение диапазона
	   this._minRange=minRange;                     //минимальное значение диапазона
	   this._step=step;
	  
   }
   get ranger() {
      return this.range;
   }

   increase() {
	   if(this.range < this._maxRange){
		   this.range += this._step;}
   }
   decrease() {
	   if(this.range > this._minRange){
		   this.range -= this._step;}
   }
}