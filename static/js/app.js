// Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

d3.json(url).then(function (data) {
    // console.log(data);
});

function init() {
    d3.json(url).then(function (data) {
        let names = data.names;
        // console.log(names);
        let dropDown = d3.select("#selDataset");
        for (let i = 0; i < names.length; i++) {
            dropDown.append("option").text(names[i]).property("value", names[i]);

        }
        createPanel(names[0]);
        createCharts(names[0]);
    });
}


function createPanel(mindy) {
    d3.json(url).then(function (data) {
        let metadata = data.metadata;
        let results = metadata.filter(x => x.id == mindy)[0];
        // console.log(results);

        let PANEL = d3.select('#sample-metadata');
        PANEL.html('')
        for (key in results) {
        PANEL.append('h6').text(`${key.toUpperCase()}: ${results[key]}`)            
        }

    });
}

function createCharts(kelli) {
    d3.json(url).then(function (data) {
        let samples = data.samples;
        let results = samples.filter(x => x.id == kelli)[0];
        console.log(results);
        let otu_ids = results.otu_ids;
        let sample_values = results.sample_values;
        let otu_labels = results.otu_labels; 

        let bLayout = {
            title: 'Bubble'
             
        };
        let bData = [{
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: 'markers',
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: 'Picnic'
            }
        }];

        Plotly.newPlot('bubble', bData, bLayout);
























    });
}

function optionChanged(x) {
    createPanel(x);
    createCharts(x);
}

init();
