import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  useTheme
} from '@material-ui/core';

const Graph = (props) => {
  const theme = useTheme();
  const { title } = props;

  const data = {
    datasets: [
      {
        borderColor: '#2DABFF',
        backgroundColor: 'transparent',
        data: [18, 5, 19, 27, 29, 19, 20],
        label: 'This Day'
      }
    ],
    labels: ['1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug']
  };

  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          barThickness: 12,
          maxBarThickness: 10,
          barPercentage: 0.5,
          categoryPercentage: 0.5,
          ticks: {
            fontColor: theme.palette.text.secondary
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }
      ],
      yAxes: [
        {
          display: false
        }
      ]
    },
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  return (
    <Box
      sx={{
        height: 125,
        position: 'relative',
        display: 'flex'
      }}
      {...props}
    >
      {title ? (<Typography>{title}</Typography>) : <></>}
      <Line
        data={data}
        options={options}
      />
    </Box>
  );
};

Graph.propTypes = {
  title: PropTypes.string
};

Graph.defaultProps = {
  title: 'Test'
};

export default Graph;
