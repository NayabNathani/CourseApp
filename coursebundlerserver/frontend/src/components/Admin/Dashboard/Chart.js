import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    ArcElement,
    Legend
} from 'chart.js'

import { Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    ArcElement,
    Legend
);


export const LineChart = ({ views = [] }) => {

    const labels = getLastYearMonth();
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom"
            },
            title: {
                display: true,
                text: "Yearly Views"
            },
        },
    };
    const data = {
        labels,
        datasets: [
            {
                label: 'Views',
                data: views,
                borderColor: "rgba(107,70,193,0.5)",
                backgroundColor: '#6b46c1'
            }
        ]
    };

    return (
        <Line options={options} data={data} />
    )
};

export const DoughnutChart = ({ users = [] }) => {

    //const labels =['a','b','c','d'];
    const data = {
        labels: ['Subscribed', 'Not Subscribed'],
        datasets: [
            {
                label: 'Views',
                data: users,
                borderColor: ['rgba(62,12,171)', 'rgba(214,43,129)'],
                backgroundColor: ['rgba(62,12,171,0.3)', 'rgba(214,43,129,0.3)'],
                borderWidth: 1,
            }
        ]
    };



    return (
        <Doughnut data={data} />
    )
};

function getLastYearMonth() {

    const labels = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    const currentMonth = new Date().getMonth()

    const remain = 11 - currentMonth;

    for (let i = currentMonth; i < months.length; i--) {
        const element = months[i];
        labels.unshift(element);
        if (i === 0) break;
    }

    for (let i = 11; i < remain; i--) {
        if (i === currentMonth) break;
        const element = months[i];
        labels.unshift(element);

    }

    return labels
}

