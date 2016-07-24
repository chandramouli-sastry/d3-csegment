var jsdom = require("jsdom"),
    tape = require("tape"),
    fs=require('fs');

jsdom.env(
  {
    html: fs.readFileSync("./test/csegment-test.html"),
    scripts: ['http://d3js.org/d3.v3.min.js','./build/d3-csegment.js'],
    done: function(err,window)
    {
      if(err)
        console.log("Failed!"+err);
        function onload(d3)
        {
          var data = [
                 {r:50,h:6.698,angle:Math.PI/2},
                 {r:50,h:6.698,angle:Math.PI/2+Math.PI/3},
                 {r:50,h:6.698,angle:Math.PI/2+2*Math.PI/3},
                 {r:50,h:6.698,angle:Math.PI/2+3*Math.PI/3},
                 {r:50,h:6.698,angle:Math.PI/2+4*Math.PI/3},
                 {r:50,h:6.698,angle:Math.PI/2+5*Math.PI/3}];
          var svg = d3.select("#svg");
          var csegdata=svg.selectAll("path.cseg").data(data).enter();
          var c=d3.scale.category20();
          csegdata.append("path")
             .attr("class","cseg")
             .attr("d", function(d){
                           return d3.csegment()
                                   .radius(d.r*4)
                                   .height(d.h*4)
                                   .angle(d.angle);
                         })
              .attr("transform","translate(300,250)")
              .attr("fill",function(d,i){return c(i);})
              .attr("stroke","black");
        }
        onload(window.d3);
        if(window.d3.select("#svg").selectAll("path.cseg")[0].length==6)
        {
          console.log("Passed.");
        }
    }
  }
);
