import React from "react";

//Components import
import ChartBar from "./ChartBar"

//Css import
import "./Chart.css"

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map( (dataPoint) => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    const renderChart = () => {
        return (
            props.dataPoints.map((dataPoint) => {
                return (
                    <ChartBar 
                        key={dataPoint.label} 
                        value={dataPoint.value}
                        maxValue={totalMaximum}
                        label={dataPoint.label}
                    />
                );
            })
        );
    }

    return (
        <div className="chart">
            {renderChart()}
        </div>
    );
}

export default Chart;