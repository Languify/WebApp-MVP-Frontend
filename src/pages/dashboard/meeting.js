// Refactor Code for common components.

import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import {
  Box,
  Container,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import Graph from 'src/components/dashboard/graph';
import DropDown from 'src/components/form/drop-down';

const CircularProgressWithLabel = (props) => {
  const { value = 0 } = props;
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          // backgroundColor: '#41D7A1',
          borderRadius: '50%',
          // opacity: 0.2
        }}
      >
        <Typography variant="caption" component="div" color="text.green" fontSize={42}>{Math.round(value)}</Typography>
      </Box>
    </Box>
  );
};

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number
};

const RectangleBox = ({ color }) => (
  <div
    style={{
      width: '24px',
      height: '16px',
      background: color,
      marginRight: '5px'
    }}
  />
);

RectangleBox.propTypes = {
  color: PropTypes.string
};

RectangleBox.defaultProps = {
  color: '#F3F3F3'
};

const Insights = () => (

  <Box
    sx={{
      display: 'flex',
      mt: 4,
      py: 2,
      pl: 2,
      pr: 2,
      backgroundColor: 'white',
      borderRadius: '8px'
    }}
  >
    <Box display="flex" flexDirection="column" justifyContent="space-around">
      <Typography>Accuracy</Typography>
      <Box
        sx={{
          backgroundColor: 'text.green',
          opacity: 0.2,
          width: '60px',
          textAlign: 'center'
        }}
      >
        <Typography fontSize={12}>AVERAGE</Typography>
        <Typography>95%</Typography>
      </Box>
    </Box>
    <Graph
      title="GRAMMAR"
      sx={{
        ml: 4,
        mr: 4,
        width: '50%',
        height: '100px',
        marginBottom: '5px'
      }}
    />
    <Graph
      title="ABBREVIATIONS & SLANGS"
      sx={{
        ml: 4,
        mr: 4,
        width: '50%',
        height: '100px',
        marginBottom: '5px'
      }}
    />
    <Box>
      <Typography>ANALYSIS</Typography>
      <Typography style={{ color: '#666666' }}>You are progressing over the last week</Typography>
    </Box>
  </Box>
);

const Meeting = ({ active }) => (
  <>
    <Helmet>
      <title>Dashboard | Languify</title>
    </Helmet>
    <Box
      sx={{
        minHeight: '100%',
        py: 3
      }}
    >
      <Box
        sx={{
          minHeight: '30%',
          px: 3,
          py: 3,
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <div>
          <Typography variant="h2">Welcome back, Shivam</Typography>
          <Typography variant="h4" color="text.blackvariant" sx={{ py: 1 }}>See how well did you speak in your recent meetings</Typography>
        </div>
        <DropDown />
      </Box>
      <Container
        maxWidth={false}
        sx={{
          backgroundColor: '#ffffff',
          width: '95%',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box display="flex" justifyContent="space-between">
          <div style={{ width: '80%' }}>
            <Typography variant="h2" sx={{ py: 1 }}>Meetings</Typography>
            <Typography sx={{ py: 1 }}>Select a particular part of the meeting to hear what you said and see its analysis below</Typography>
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" sx={{ py: 1, marginBottom: '20px' }}>
              <Typography>Meeing start time 10:30 am</Typography>
              <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around"' }}>
                <RectangleBox />
                <RectangleBox />
                <RectangleBox />
                <RectangleBox />
                <RectangleBox />
                <RectangleBox />
                <RectangleBox />
                <RectangleBox />
                <RectangleBox />
                <RectangleBox />
                <RectangleBox />
                <RectangleBox color="#2DABFF" />
                <RectangleBox />
                <RectangleBox />
                <RectangleBox />
              </Box>
              <Typography>Meeting end time 11:30 am</Typography>
            </Box>
            <audio controls>
              <source src="horse.mp3" type="audio/mpeg" />
              <track kind="captions" src="sampleCaptions.vtt" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div style={{ margin: '10px' }}>
            <CircularProgressWithLabel
              size={110}
              color="constant"
              value={85}
            />
          </div>
        </Box>
        <Box
          sx={{
            backgroundColor: '#F3F3F3',
            mt: 2,
            mb: 2,
            p: 5,
            borderRadius: '8px'
          }}
        >
          <Insights />
          <Insights />
          <Insights />
          <Insights />
        </Box>
      </Container>
    </Box>
  </>
);

Meeting.propTypes = {
  active: PropTypes.bool
};

export default Meeting;
