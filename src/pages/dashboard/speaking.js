// Refactor Code for common components.

import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import {
  NavLink as RouterLink
} from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  ListItem,
  CircularProgress,
  Grid
} from '@material-ui/core';
import ReviewCard, { FeedbackCard } from 'src/components/dashboard/review-card';
import Graph from 'src/components/dashboard/graph';
import DropDown from 'src/components/form/drop-down';

const menuItems = [
  {
    label: 'Accuracy'
  }, {
    label: 'Vocabulary'
  }, {
    label: 'Fluency & Cohorence'
  }, {
    label: 'Engagement'
  },
];

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

const Speaking = ({ active }) => (
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
          <Typography variant="h4" color="text.blackvariant" sx={{ py: 1 }}>Did someone tell you how much improvement you have shown in your speaking skills, because you are becoming fabulous at it?</Typography>
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
            backgroundColor: '#F3F3F3',
            marginBottom: '5px',
            borderRadius: '8px'
          }}
        >
          <ListItem
            disableGutters
            sx={{
              display: 'flex',
              flexDirection: 'row',
              py: 1,
              px: 1
            }}
          >
            {
              menuItems.map((item) => (
                <Button
                  component={RouterLink}
                  sx={{
                    color: 'text.secondary',
                    fontWeight: 'medium',
                    justifyContent: 'center',
                    letterSpacing: 0,
                    textTransform: 'none',
                    width: '100%',
                    height: '90%',
                    textAlign: 'center',
                    fontSize: '18px',
                    ...(active && {
                      color: 'primary.main'
                    }),
                    '&:hover': {
                      backgroundColor: '#2DABFF',
                      color: '#ffffff'
                    }
                  }}
                  to="/"
                >
                  {item.label}
                </Button>
              ))
            }
          </ListItem>
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
          <Box display="flex">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                '& > * + *': { marginLeft: '20px' }
              }}
            >
              <Typography variant="caption" component="div" color="text.black" fontSize={18} fontWeight={600}> Overall </Typography>
              <div>
                <CircularProgressWithLabel
                  size={110}
                  color="constant"
                  value={85}
                // sx={{ margin: '55px 65px' }}
                />
              </div>
            </Box>

            <Grid
              container
              spacing={3}
              style={{ marginLeft: '10px' }}
            >
              <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
              >
                <ReviewCard sx={{ height: '100%' }} />
              </Grid>
              <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
              >
                <FeedbackCard sx={{ height: '100%' }} />
              </Grid>
              <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
              >
                <FeedbackCard sx={{ height: '100%' }} />
              </Grid>
              <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
              >
                <FeedbackCard sx={{ height: '100%' }} />
              </Grid>
            </Grid>
          </Box>

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
              <Typography>Grammar</Typography>
              <Box
                sx={{
                  backgroundColor: 'text.green',
                  opacity: 0.2,
                  width: '60px',
                  // height: '60px',
                  textAlign: 'center'
                }}
              >
                {/* <Box> */}
                <Typography fontSize={12}>AVERAGE</Typography>
                <Typography>95%</Typography>
                {/* </Box> */}
              </Box>
            </Box>
            <Graph sx={{ ml: 4, mr: 4, width: '100%' }} />
            <Box>
              <Typography>ANALYSIS</Typography>
              <Typography style={{ color: '#666666' }}>You are progressing over the last week</Typography>
            </Box>
          </Box>

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
              <Typography>Abbreviations & slangs</Typography>
              <Box
                sx={{
                  backgroundColor: '#EDB901',
                  opacity: 0.2,
                  width: '60px',
                  // height: '60px',
                  textAlign: 'center',
                  borderRadius: '2.3px'
                }}
              >
                {/* <Box> */}
                <Typography fontSize={12}>AVERAGE</Typography>
                <Typography>95%</Typography>
                {/* </Box> */}
              </Box>
            </Box>
            <Graph sx={{ ml: 4, mr: 4, width: '100%' }} />
            <Box>
              <Typography>ANALYSIS</Typography>
              <Typography style={{ color: '#666666' }}>You are progressing over the last week</Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  </>
);

Speaking.propTypes = {
  active: PropTypes.bool
};

export default Speaking;
