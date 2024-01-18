// Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

d3.json(url).then(function (data) {
    console.log(data);
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
        let results = metadata.filter(x => x.id==mindy)[0];
        console.log(results);
    });
}

function createCharts(kelli) {
    d3.json(url).then(function (data) {
        let samples = data.samples;
        let results = samples.filter(x => x.id==kelli)[0];
        console.log(results);
    });
}

function optionChanged(x) {
    createPanel(x);
    createCharts(x);
}

init();
// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.



// Use sample_values as the values for the bar chart.



// Use otu_ids as the labels for the bar chart.



// Use otu_labels as the hovertext for the chart.



// bar Chart



// Create a bubble chart that displays each sample.



// Use otu_ids for the x values.



// Use sample_values for the y values.



// Use sample_values for the marker size.



// Use otu_ids for the marker colors.



// Use otu_labels for the text values.



// Bubble Chart



// Display the sample metadata, i.e., an individual's demographic information.



// Display each key-value pair from the metadata JSON object somewhere on the page.



// hw



// Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:



// hw

// Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file

// Advanced Challenge Assignment (Optional with no extra points earning)
// The following task is advanced and therefore optional.

// Adapt the Gauge Chart from https://plot.ly/javascript/gauge-charts/Links to an external site. to plot the weekly washing frequency of the individual.

// You will need to modify the example gauge code to account for values ranging from 0 through 9.

// Update the chart whenever a new sample is selected.

// Weekly Washing Frequency Gauge