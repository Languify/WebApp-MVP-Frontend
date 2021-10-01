// Refactor Code for common components.

import { Helmet } from 'react-helmet';
// import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Container,
  Divider,
  Typography
} from '@material-ui/core';
import Stepper from '../../components/homepage/stepper-custom';

const Home = () => (
  <>
    <Helmet>
      <title>Dashboard | Languify</title>
    </Helmet>
    <Container>
      <Box
        sx={{
          minHeight: '100%',
          py: 3
        }}
      >
        <Typography>become an expert communicator</Typography>
        <Typography>Languify analyzes, corrects and helps you improve what you write or how you speak</Typography>
        <Typography>Learn more about Languify</Typography>
      </Box>

      <Box>
        <Button>Join the firstlist</Button>
        <Typography>Join the Firstlist now and get Languify premium worth INR 3600/ year for free </Typography>
      </Box>
      <Box>
        <Typography>Launching soon on</Typography>
      </Box>
      <Divider />

      <Box>
        <Typography>share more, earn more </Typography>
        <Typography>how it works</Typography>
        <Typography>Get upto 150% cashback on Languify</Typography>
        <Stepper />
      </Box>
    </Container>
  </>
);

// Home.propTypes = {};

export default Home;
