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