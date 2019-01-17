'use strict';

const AreaChart = rd3.AreaChart;

hljs.initHighlightingOnLoad();

class Demos extends React.Component {

  state: {
      areaData: []
  }
  

  componentDidMount = () => {
    // Apple stock data from Mike Bostock's chart at
    // http://bl.ocks.org/mbostock/3883195
    var parseDate = d3.time.format("%d-%b-%y").parse;
    d3.tsv("data/applestock.tsv", function(error, data) {
      data.forEach(function(d) {
        d.date = parseDate(d.date);
        d.value = +d.value;
      });
      this.setState({areaData: data});
    }.bind(this))

  },

  render() {

    var lineData = {
        series1: [ { x: 0, y: 20 }, { x: 1, y: 30 }, { x: 2, y: 10 }, { x: 3, y: 5 }, { x: 4, y: 8 }, { x: 5, y: 15 }, { x: 6, y: 10 } ],
        series2: [ { x: 0, y: 8 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 12 }, { x: 4, y: 4 }, { x: 5, y: 6 }, { x: 6, y: 2 } ],
        series3: [ { x: 0, y: 0 }, { x: 1, y: 5 }, { x: 2, y: 8 }, { x: 3, y: 2 }, { x: 4, y: 6 }, { x: 5, y: 4 }, { x: 6, y: 2 } ]
    };
    var barData = [{label: 'A', value: 5}, {label: 'B', value: 6}, {label: 'C', value: 2}, {label: 'D', value: 11}, {label: 'E', value: 2}, {label: 'F', value: 7}];
    var pieData = [{label: "Margarita", value: 20.0}, {label: "John", value: 55.0}, {label: "Tim", value: 25.0 }];
    // 2014 Most Populous Countries
    // http://www.prb.org/pdf14/2014-world-population-data-sheet_eng.pdf
    var treemapData = [{label: 'China', value: 1364}, {label: 'India', value: 1296}, {label: 'United States', value: 318}, {label: 'Indonesia', value: 251}, {label: 'Brazil', value: 203}];
    var scatterData = {
        series1: [ { x: 0, y: 20 }, { x: 5, y: 7 }, { x: 8, y: 3 }, { x: 13, y: 33 }, { x: 12, y: 10 }, { x: 13, y: 15 }, { x: 24, y: 8 }, { x: 25, y: 15 }, { x: 16, y: 10 }, { x: 16, y: 10 }, { x: 19, y: 30 }, { x: 14, y: 30 }],
        series2: [ { x: 40, y: 30 }, { x: 35, y: 37 }, { x: 48, y: 37 }, { x: 38, y: 33 }, { x: 52, y: 60 }, { x: 51, y: 55 }, { x: 54, y: 48 }, { x: 45, y: 45 }, { x: 46, y: 50 }, { x: 66, y: 50 }, { x: 39, y: 36 }, { x: 54, y: 30 }],
        series3: [ { x: 80, y: 78 }, { x: 71, y: 58 }, { x: 78, y: 68 }, { x: 81, y: 47 },{ x: 72, y: 70 }, { x: 70, y: 88 }, { x: 81, y: 90 }, { x: 92, y: 80 }, { x: 81, y: 72 }, { x: 99, y: 95 }, { x: 67, y: 81 }, { x: 96, y: 78 }]
    };

    return (
      <div className="container">
        <a href="https://github.com/esbullington/react-d3"><img style={{position: "absolute", top: "0", right: "0", border: "0"}} src="https://camo.githubusercontent.com/a6677b08c955af8400f44c6298f40e7d19cc5b2d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677261795f3664366436642e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png" /></a>
        <h2 className="page-header">
          react-d3
        </h2>
        <div className="row">

          <div className="col-md-6">
            <AreaChart
              data={this.state.areaData}
              width={400}
              height={300}
              yAxisTickCount={4}
              xAxisTickInterval={{unit: 'year', interval: 1}}
              title="Area Chart"
            />
          </div>
          <div className="col-md-6">
            <pre ref='block'>
              <code className='js'>
              {'//Sample data format (not actually rendered)\n//for actual data, see Apple stock data from Mike Bostock\'s chart:\n// http://bl.ocks.org/mbostock/3883195\nvar areaData = [\n  {date: 1177646400000, value: 582.13},\n  ...\n  {date: 1178078400000, value: 603}\n];'}
              </code>
            </pre>
            <pre ref='block'>
              <code className='html'>
                {'<AreaChart\n  data={areaData}\n  width={400}\n  height={300}\n  yAxisTickCount={4}\n  xAxisTickInterval={{unit: "year", interval: 1}}\n  title="Area Chart"\n/>'}
              </code>
            </pre>
          </div>

        </div>

      </div>
    );
  }

});

React.render(
  <Demos />,
  document.body
);
