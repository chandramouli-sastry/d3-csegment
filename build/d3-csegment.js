(function (global, factory) { 
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.d3 = global.d3 || {})));
}(this, function (exports) { 'use strict';

  function csegment()
    {
      function cseg()
      {
        var r = this._.radius;
        var h = this._.height;
        if(r==null)
          throw "Radius is not defined";
        if(h==null)
            throw "Height is not defined";
        if(r<h)
          throw "Height greater than Radius"
        var a = -this._.angle;
        var theta;
        if(h==r)
           theta = Math.PI;
        else
          theta = Math.PI - 2 * Math.asin((r-h)/r);
        var x1 = r*Math.cos(a-theta/2);
        var y1 = r*Math.sin(a-theta/2);
        var x  = r*Math.cos(a+theta/2);
        var y  = r*Math.sin(a+theta/2);
        return "M "+x+" "+(y)+"A "+r+" "+r+" 0 0 0 "+x1+" "+(y1)+"Z";
      }
      cseg._={};
      cseg._.radius= undefined;
      cseg._.height= undefined;
      cseg._.angle= Math.PI/2;
      cseg.radius= function(r)
                    {
                      this._.radius = r;
                      return this;
                    };
      cseg.height= function(h)
                    {
                      this._.height = h;
                      return this;
                    };
      cseg.angle= function(a)
                   {
                     this._.angle = a;
                     return this;
                   };
      cseg.toString= cseg;
      return cseg;
    };

  exports.csegment = csegment;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
