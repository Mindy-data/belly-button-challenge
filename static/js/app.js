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


function createPanel(var1) {
    d3.json(url).then(function (data) {
        let metadata = data.metadata;
        let results = metadata.filter(x => x.id == var1)[0];
        // console.log(results);

        let PANEL = d3.select('#sample-metadata');
        PANEL.html('')
        for (key in results) {
            PANEL.append('h6').text(`${key.toUpperCase()}: ${results[key]}`)
        }

    });
}

function createCharts(var2) {
    d3.json(url).then(function (data) {
        let samples = data.samples;
        let results = samples.filter(x => x.id == var2)[0];
        // console.log(results);
        let otu_ids = results.otu_ids;
        let sample_values = results.sample_values;
        let otu_labels = results.otu_labels;

        let bLayout = {
            xaxis: {
                title: 'OTU IDS'
            }
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

        let yNew = otu_ids.slice(0, 10).map(x => `OTU ${x}`).reverse()

        let barLayout = {
            title: 'Top 10 OTUs',
            margin: {
                l: 150,
            }
        };

        let barData = [{
            x: sample_values.slice(0, 10).reverse(),
            y: yNew,
            text: otu_labels.slice(0, 10).reverse(),
            type: 'bar',
            orientation: 'h'
        }];

        Plotly.newPlot('bar', barData, barLayout);



    });
}

function optionChanged(x) {
    createPanel(x);
    createCharts(x);
}

init();
