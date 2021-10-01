import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  // Grid,
  Link,
  TextField,
  Typography,
  Divider,
  InputAdornment,
  IconButton
} from '@material-ui/core';
import { RemoveRedEye } from '@material-ui/icons';

const Validate = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Validate | Languify</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="xs" style={{ boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.15)' }}>

          <Box sx={{ mt: 5, mb: 3 }}>
            <Typography
              color="textPrimary"
              variant="h2"
            >
              Activation link sent!
            </Typography>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              A link has been sent to your registered email ****. If you did not receive the email, please check spam, or junk folder.
            </Typography>
          </Box>
          <Box>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="body2"
              sx={{ pt: 15 }}
            >
              Didn’t receive activation link?
            </Typography>
            <Box sx={{ py: 2, pt: 4 }} display="flex" justifyContent="space-between" alignItems="center">
              <Button
                style={{ backgroundColor: '#2DABFF', width: '164px', textTransform: 'none' }}
                size="medium"
                type="submit"
              >
                Resend Link
              </Button>
              <Typography
                color="#2DABFF"
                variant="body1"
              >
                <Link
                  component={RouterLink}
                  to="/register"
                  color="#2DABFF"
                  underline="none"
                >
                  Signup using another email.
                </Link>
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 1, mb: 1 }}>
            <Divider>
              <Typography color="#999999" fontSize={12}>OR</Typography>
            </Divider>
          </Box>
          <Box sx={{ borderColor: '#2DABFF', py: 2 }}>
            <Button
              fullWidth
              size="large"
              variant="contained"
              style={{ color: '#2DABFF' }}
            >
              <img src="static/images/googleLogo.svg" alt="Google Logo" style={{ marginRight: '10px' }} />
              Sign up using Google
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Validate;
