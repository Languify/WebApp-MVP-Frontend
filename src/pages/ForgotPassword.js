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

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Forgot Password | Languify</title>
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
          <Formik
            initialValues={{
              email: '',
              firstName: '',
              lastName: '',
              password: '',
              policy: false
            }}
            validationSchema={
              Yup.object().shape({
                email: Yup.string().email('Must be a valid email').max(255).required('Email is required')
              })
            }
            onSubmit={() => {
              navigate('/login', { replace: true });
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mt: 5, mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    forgot password
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="E-mail address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  variant="standard"
                  color="grey"
                />
                <Box sx={{ py: 2, pt: 15 }} display="flex" justifyContent="space-between" alignItems="center">
                  <Button
                    style={{ backgroundColor: '#2DABFF', width: '164px' }}
                    disabled={isSubmitting}
                    size="medium"
                    type="submit"
                  >
                    Submit
                  </Button>
                  <Typography
                    color="#2DABFF"
                    variant="body1"
                  >
                    <Link
                      component={RouterLink}
                      to="/login"
                      color="#2DABFF"
                      underline="none"
                    >
                      Signin to your account
                    </Link>
                  </Typography>
                </Box>
                <Box sx={{ mt: 1, mb: 1 }}>
                  <Divider>
                    <Typography color="#999999" fontSize={12}>OR</Typography>
                  </Divider>
                </Box>
                <Box sx={{ borderColor: '#2DABFF', py: 2 }}>
                  <Button
                    // disabled={isSubmitting}
                    fullWidth
                    size="large"
                    variant="contained"
                    style={{ color: '#2DABFF' }}
                  >
                    <img src="static/images/googleLogo.svg" alt="Google Logo" style={{ marginRight: '10px' }} />
                    Sign in using Google
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default ForgotPassword;
