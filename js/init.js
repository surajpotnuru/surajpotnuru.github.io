$(document).ready(function(){
	$("html").niceScroll();
});
window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		axisX:{
			interval: 1,
			gridThickness: 10,
			labelFontSize: 15,
			labelFontStyle: "normal",
			labelFontWeight: "normal",
			labelFontFamily: "Roboto",
			

		},
		axisY:{
			suffix:"%",
			labelFontSize:10
		},
		axisY2:{
			interlacedColor: "#2196F3",
			gridColor: "rgba(1,77,101,.1)"
		},

			data: [
			{     
				type: "bar",
                name: "skills",
				axisYType: "primary",
				color: "#2196F3",				
				dataPoints: [
				
				{y: 90, label: "HTML"  },
				{y: 95, label: "CSS(3)"  },
				{y: 80, label: "jQuery"  },
				{y: 70, label: "AJAX"  },
				{y: 80, label: "Bootstrap"  },
				{y: 90, label: "MaterializeCSS"  },
				{y: 75, label: "PHP"  },
				{y: 85, label: "MySQL"  },
				{y: 50, label: "Django"  },
				{y: 80, label: "C"  },
				{y: 85, label: "Java"  },
				{y: 70, label: "Python"  },
				]
			}
			
			]
		});

chart.render();
}
