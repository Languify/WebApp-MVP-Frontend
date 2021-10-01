// Refactor Code for common components.

import { Helmet } from 'react-helmet';
// import PropTypes from 'prop-types';
import {
  Box,
  Container,
  Typography
} from '@material-ui/core';
import Graph from 'src/components/dashboard/graph';
import DropDown from 'src/components/form/drop-down';

const GraphData = [
  {
    title: 'ACCURACY'
  }, {
    title: 'FLUENCY & COHORENCE'
  }, {
    title: 'VOCABULARY'
  }, {
    title: 'ENGAGEMENT'
  }];

const Home = () => (
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
          <Typography variant="h4" color="text.blackvariant" sx={{ py: 1 }}>Understand what you do best and what needs a little more practice.</Typography>
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
        <Typography variant="h2" sx={{ py: 1, marginBottom: '20px' }}>Speaking</Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap'
          }}
        >
          {
            GraphData.map((item) => {
              const { title } = item;
              return (
                <Box
                  sx={{
                    display: 'flex',
                    width: '48%',
                    height: '140px',
                    backgroundColor: '#F3F3F3',
                    borderRadius: '8px',
                    mb: 1,
                    py: 2,
                    pl: 2,
                    pr: 2
                  }}
                >
                  <Graph title={title} sx={{ width: '100%' }} />
                  <Box
                    sx={{
                      backgroundColor: 'blur.green',
                      width: '100px',
                      height: '50px',
                      textAlign: 'center',
                      alignSelf: 'center'
                    }}
                  >
                    <Typography fontSize={12} color="text.green" fontWeight={600}>AVERAGE</Typography>
                    <Typography color="text.green" fontWeight={600}>95%</Typography>
                  </Box>
                </Box>
              );
            })
          }
        </Box>
      </Container>

      <Container
        maxWidth={false}
        sx={{
          mt: 4,
          backgroundColor: '#ffffff',
          width: '95%',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Typography variant="h2" sx={{ py: 1, marginBottom: '20px' }}>Writing</Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap'
          }}
        >
          {
            GraphData.map((item) => {
              const { title } = item;
              return (
                <Box
                  sx={{
                    display: 'flex',
                    width: '48%',
                    height: '140px',
                    backgroundColor: '#F3F3F3',
                    borderRadius: '8px',
                    mb: 1,

                    py: 2,
                    pl: 2,
                    pr: 2
                  }}
                >
                  <Graph title={title} sx={{ width: '100%' }} />
                  <Box
                    sx={{
                      background: '#E42C2C40',
                      // opacity: 0.2,
                      width: '100px',
                      height: '50px',
                      textAlign: 'center',
                      alignSelf: 'center'
                    }}
                  >
                    <Typography fontSize={12} color="red" fontWeight={600}>AVERAGE</Typography>
                    <Typography color="red" fontWeight={600}>45%</Typography>
                  </Box>
                </Box>
              );
            })
          }
        </Box>
      </Container>
    </Box>
  </>
);

// Home.propTypes = {};

export default Home;
