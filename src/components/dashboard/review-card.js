import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import { red } from '@material-ui/core/colors';

export const FeedbackCard = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            Common informal mistakes
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

const ReviewCard = (props) => (
  <Card
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            Number of mistakes
          </Typography>
          <Typography
            color="textPrimary"
            variant="h2"
            sx={{
              paddingTop: 5
            }}
          >
            7
            <span style={{ fontSize: '14px', color: '#666666' }}>per day</span>
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default ReviewCard;
