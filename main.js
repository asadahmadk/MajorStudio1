/*global d3*/
/*global allPlaces*/
/*global chart*/

//Get Data from Json File and check the objects available

let unesco;
let allPlaces = [];
d3.json('data.json').then(function(data){
  unesco = data;
  analyzeData();

  console.log(unesco);
});

//Fetch data for charts
function analyzeData(){
  unesco = unesco.Goal1;
  unesco.forEach(function(p){
    let countryName =p.GeoAreaName;
    let value = p.Value;
    let height =p.GeoAreaCode;
    
    allPlaces.push({
    country: countryName,
    labourShare : value,
    height : height
    });
  } 
)} console.log(allPlaces);


  // define dimensions and margins for the graphic
  const margin = ({top: 50, right: 50, bottom: 50, left: 80});
  const width = window.innerWidth;
  const height = window.innerHeight;

  // let's define our scales.
  // yScale corresponds with amount of textiles per country
  const yScale = d3.scaleLinear()
                    .domain([0, 100])
                    .range([height - margin.bottom, margin.top]);

  // xScale corresponds with country names
  const xScale = d3.scaleBand()
                  .domain([10,20,30,40,50,60,70])
                .range([margin.left, width - margin.right +100]);

  // create an svg container from scratch
  const svg = d3.select('body')
                .append('svg')
                .attr('width', width)
                .attr('height', height);

 
 // attach a graphic element, and append circle to it
 svg.append('g')
     .selectAll('circle')
     .data(allPlaces)
     .join('circle')
     .attr('cx', function(d){return xScale(d.labourShare) })
     .attr('cy', function(d){return yScale(d.height) })
     .attr('r', function(d){return yScale(0)-yScale(d.count) });
     //.attr('width', function(d){return xScale.bandwidth() - 2 });
     //.style('fill', function(d) {return sequentialScale(d.count);});

  
  // AXES

  // Y Axis
  const yAxis =  d3.axisLeft(yScale).ticks(5)

  svg.append('g')
  .attr('transform', `translate(${margin.left},0)`)
  .call(yAxis);

  // X Axis
  const xAxis =  d3.axisBottom(xScale).tickSize(0);
  svg.append('g')
  .attr('transform', `translate(0,${height - margin.bottom})`)
  .call(xAxis)
  .selectAll('text')
  .style('text-anchor', 'end')
  .attr('dx', '-.6em')
  .attr('dy', '-0.1em');
  // .attr('transform', function(d) {return 'rotate()' });

      // Labelling the graph
    svg.append('text')
    .attr('font-family', 'sans-serif')
    .attr('font-weight', 'bold')
    .attr('font-size', 20)
    .attr('y', margin.top-20)
    .attr('x', margin.left)
    .attr('fill', 'black')
    .attr('text-anchor', 'start')
    .text('Labour Share of GDP');
    //}
  
   
