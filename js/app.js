
$(document).ready(function() {
            $('#fullpage').fullpage({
                sectionsColor: ['#fff8f1', '#fff8f1', '#fff8f1', '#fff8f1', '#fff8f1', '#fff8f1'],
                anchors: ['homePage', 'introPage', 'groupsPage', 'protestsPage', 'ProtestorsPage', 'aboutPage'],
                menu: '#menu',
                css3: true,
                scrollingSpeed: 1000,
                afterLoad: function(anchorLink, index){
                    var loadedSection = $(this);
                    //using anchorLink
                    if(anchorLink == 'protestsPage'){
                        wheelLoad();
                        barChartLoad();
                    }
                },
                onLeave: function(index, nextIndex, direction){
                    var leavingSection = $(this);

                    //after leaving section 
                    if(index == 4 && direction =='down'){
                        $('#chart-side svg').remove();
                        $('#chart svg').remove();
                    }

                    else if(index == 4 && direction == 'up'){
                        $('#chart-side svg').remove();
                        $('#chart svg').remove();
                    }
                }
            });

        });
var wheelLoad = function(){
	var dataset = [
						
				[
				   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
				   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
				   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
				   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
				   'Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social',
				   'Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social',
				   'Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students',
				   'Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers',
				   'Pro-Regime','Pro-Regime','Pro-Regime','Pro-Regime','Pro-Regime','Pro-Regime'
				],[
				   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
				   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
				   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
				   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
				   'Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social',
				   'Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social',
				   'Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students',
				   'Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers',
				   'Pro-Regime','Pro-Regime','Pro-Regime','Pro-Regime','Pro-Regime','Pro-Regime'
				],[
				   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
				   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
				   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
				   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
				   'Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social',
				   'Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social',
				   'Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students',
				   'Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers',
				   'Pro-Regime','Pro-Regime','Pro-Regime','Pro-Regime','Pro-Regime','Pro-Regime'
				],[
				   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
				   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
				   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
				   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
				   'Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social',
				   'Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social',
				   'Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students',
				   'Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers',
				   'Pro-Regime','Pro-Regime','Pro-Regime','Pro-Regime','Pro-Regime','Pro-Regime'
				],[
				   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
				   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
				   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
				   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
				   'Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social',
				   'Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social',
				   'Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students',
				   'Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers',
				   'Pro-Regime','Pro-Regime','Pro-Regime','Pro-Regime','Pro-Regime','Pro-Regime'
				],[
				   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
				   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
				   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
				   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
				   'Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social',
				   'Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social',
				   'Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students',
				   'Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers',
				   'Pro-Regime','Pro-Regime','Pro-Regime','Pro-Regime','Pro-Regime','Pro-Regime'
				],[
				   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
				   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
				   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
				   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
				   'Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social',
				   'Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social',
				   'Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students',
				   'Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers',
				   'Pro-Regime','Pro-Regime','Pro-Regime','Pro-Regime','Pro-Regime','Pro-Regime'
				],[
				   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
				   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
				   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
				   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
				   'Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social',
				   'Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social',
				   'Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students',
				   'Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers',
				   'Pro-Regime','Pro-Regime','Pro-Regime','Pro-Regime','Pro-Regime','Pro-Regime'
				]
	];

	var colors = ['#4D5E83','#E7654B','#579E9C','#BD4E6B','#A88A79']
	var groups = ['Muslim Brotherhood', 'Labor & Social', 'Students', 'Civil Powers', 'Pro-Regime'];
	var w = '100%';
	var h = '100%';

	var basex = 535, basey = 311, baseRotation = 0;

	var positions = [
		[basex, basey, baseRotation], [basex + 10, basey + 41, baseRotation + 30], [basex - 2, basey + 82, baseRotation + 60], [basex - 33, basey + 112, baseRotation + 90], 
		[basex - 75, basey + 121, baseRotation + 120],[basex - 116, basey + 109, baseRotation + 150], [basex - 144, basey + 78, baseRotation + 180], 
		[basex - 154, basey + 36, baseRotation + 210]
	];

	var svg = d3.select('#chart').append('svg')
			.attr('width', w)
			.attr('height', h);

	for (var i = 0; i < dataset.length; i++) {

		var y = 13 ;
		var x = 13 ;
		var steps = 1;

		var circleGroup = svg.append('g')
			.attr("transform", "translate(" + positions[i][0] + "," + positions[i][1] + ") rotate(" + positions[i][2] + ")");

		var circles = circleGroup.selectAll('circle')
			.data(dataset[i])
			.enter()
			.append('circle')
			
		var circlesAttrs = circles.attr('class', 'circle')
			.transition().delay(function (d,i){ return i * 20;})
			.duration(300)
			.attr('cy', function(d,i){
					if (y <=39){
						y += 13;return y;
					} else {
						y = 26;return y;
					};
			})
			.attr('cx', function(d, i){
				if (steps < 4) {
					steps += 1; return x;
				} else {
					steps = 2;x += 13;return x;
				};
			})
			.attr('fill', function(d,i){
				switch(d) {
					case 'Muslim Brotherhood':return colors[0];break;
				    case 'Labor & Social':return colors[1];break;
				    case 'Students':return colors[2];break;
				    case 'Civil Powers':return colors[3];break;
				    case 'Pro-Regime':return colors[4];break;
				    default:return 'gray';break;} 
			})
			.attr('r', 3.5);	


	};
}
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