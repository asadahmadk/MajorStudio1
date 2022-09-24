/*global d3*/

let unesco;
d3.json('labourshare/data.json').then (function(data) 
{
 unesco = data;
 console.log(unesco);
})
