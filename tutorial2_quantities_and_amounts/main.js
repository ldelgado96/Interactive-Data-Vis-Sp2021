// Author: Lilybeth Delgado, Assignment 1:

//d3.csv('/data/squirrelActivities.csv', d3.autoType).then(data => {
   //console.log('data', data)

    var data=[
        {"activity":"running","count":"730"},
        {"activity":"chasing","count":"279"},
        {"activity":"climbing","count":"658"},
        {"activity":"eating","count":"760"},
        {"activity":"foraging","count":"1435"} ]
    


    const margin= {top:20, right:20, bottom:20, left:200};

var width = window.innerWidth* .8;
    height = window.innerHeight /3;


const xScale = d3.scaleLinear()
.domain([0,d3.max(data, d => d.count)])
.range([width,0])


const yScale = d3.scaleBand()
.domain(d3.map(data,d=>d.activity))
.range([height,0])
.paddingInner(.1)

// bars
// select
// data join
// style draw elements

const svg = d3.select("#barchart")
.append("svg")
.attr("width", width )
.attr("height", height)

svg.selectAll("rect")
.data(data)
.join("rect")
.attr("x", d=>xScale)
.attr("y", d=>yScale(d.activity)) //d=>d.activity
.attr("width", d=>width - xScale(d.count)) //d => d.count
.attr("height", yScale.bandwidth())
.attr("fill","#69b3a2");

