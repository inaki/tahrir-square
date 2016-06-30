var barChartLoad = function(){
	var dataset = [375,91,38,36,34];
	var colors = ['#4D5E83','#E7654B','#579E9C','#BD4E6B','#A88A79']
	var groups = ['Muslim Brotherhood', 'Labor & Social', 'Students', 'Civil Powers', 'Pro-Regime'];
	var w = 220, h = 350;

	var chartSide = d3.select('#chart-side').append('svg')
		.attr('width', w)
		.attr('height', h);

	var xScale = d3.scale.linear()
		.domain([0, d3.max(dataset)])
		.range([0, w]);


	chartSide.selectAll(".textlabel")
	    .data(dataset)
	    .enter()
	    .append("text")
	    .attr("class", "textlabel")
	    .attr("x", 15)
	    .attr("y", function(d, i){
			return (i + 1) * 55;
		})
	    .text(function(d, i){
	    	return groups[i] + " (" + dataset[i] + ")";
	    });


	chartSide.selectAll('rect')
		.data(dataset)
		.enter()
		.append('rect')
		.attr('class', 'bar')
		.attr('fill', function(d, i){
			return colors[i];
		})
		.attr('y', function(d, i){
			return (i + 1) * 55 + 5;
		})
		.attr('x', 15)
		.attr('height', 25)
		.attr('width', 0)
		.transition().delay(function (d,i){ return i * 300;})
		.duration(3000)
		.attr('width', function(d){
			return xScale(d)
		});


}