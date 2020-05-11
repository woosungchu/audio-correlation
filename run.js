// convert data from time-based to frequency-based
function fourier( arr ) {
 var len = arr.length;
 var output = new Array();

 for( var u=0; u < len; u++ ) {//u는 주파수?
   var real = 0; //실수부
   var imag = 0; //허수부

   for( var x=0; x < len; x++ ) {//원음은 (시간,주파수) x=는 시간?
     real += arr[x]*Math.cos(-2*Math.PI*u*x/len);
     imag += arr[x]*Math.sin(-2*Math.PI*u*x/len);
   }

   output.push( [ real, imag ] )
   //output.push( real + imag )
 }

 return output;
}
