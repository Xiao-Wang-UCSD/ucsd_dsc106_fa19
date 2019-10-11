// javascript
var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];
var dataset_example = [53,
                      165,
                      269,
                      344,
                      376,
                      410,
                      421,
                      405,
                      376,
                      359,
                      392,
                      433,
                      455,
                      478]
var svgWidth = 666;
var svgHeight = 555;
var barPadding = 5;
var barWidth = (svgWidth / dataset.length);


var svg = d3.select('svg')
   .attr("width", svgWidth)
   .attr("height", svgHeight)
   .attr("class", "bar-chart");

var barChart = svg.selectAll("rect")
   .data(dataset_example)
   .enter()
   .append("rect")
   .attr("y", function(d) {
        return svgHeight - d;//.value;
   })
   .attr("height", function(d) {
       return d;//.value;
   })
   .attr("width", barWidth - barPadding)
   .attr("transform", function (d, i) {
       var translate = [barWidth * i, 0];
       return "translate("+ translate +")";
   });
