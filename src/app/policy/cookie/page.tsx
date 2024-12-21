import { Box, Container, Divider, Typography } from "@mui/material";
import React, { FC } from "react";

const Cookie: FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Cookie Policy
      </Typography>
      <Divider />
      <Box sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2 }}>
        <Box>
          <Typography variant="h6" gutterBottom>
            What Are Cookies?
          </Typography>
          <Typography paragraph>
            Cookies are small text files that are stored on your device when you
            visit a website. These files contain information that allows
            websites to remember your preferences, login details, and other
            interactions with the site. Cookies are essential to providing a
            seamless browsing experience, but they also raise privacy concerns,
            especially when used for tracking or advertising.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" gutterBottom>
            Types of Cookies We Use
          </Typography>
          <Typography paragraph>
            AuthSafe uses the following types of cookies:
          </Typography>
          <ul>
            <li>
              <Typography paragraph>
                <strong>Essential Cookies:</strong> These cookies are necessary
                for the operation of our website and services. They enable basic
                functionalities such as secure login and session management.
              </Typography>
            </li>
            <li>
              <Typography paragraph>
                <strong>Performance Cookies:</strong> These cookies collect data
                about how visitors use our site, such as which pages are visited
                most often, and if users encounter errors. This information
                helps us optimize the website for better user experiences.
              </Typography>
            </li>
            <li>
              <Typography paragraph>
                <strong>Functional Cookies:</strong> These cookies enable us to
                remember choices you make, such as language preferences or login
                details, to provide a more personalized experience.
              </Typography>
            </li>
            <li>
              <Typography paragraph>
                <strong>Advertising Cookies:</strong> These cookies are used to
                deliver personalized advertisements based on your browsing
                activity. While we may not directly serve ads, third-party
                services we use may deploy these cookies.
              </Typography>
            </li>
          </ul>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            How We Use Cookies
          </Typography>
          <Typography paragraph>
            We use cookies to enhance your experience on our platform. This
            includes remembering your login details so you don’t have to
            re-enter them, understanding how you use our site so we can improve
            performance, and delivering personalized content. Some cookies are
            essential to the functioning of the site, while others can be
            disabled without affecting functionality.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            Managing Cookies
          </Typography>
          <Typography paragraph>
            You can manage your cookie preferences through your browser
            settings. Most browsers allow you to reject cookies, clear existing
            cookies, and provide notifications when cookies are set. However,
            disabling cookies may result in a degraded user experience or
            prevent access to some features.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            Third-Party Cookies
          </Typography>
          <Typography paragraph>
            Some of the cookies we use are third-party cookies set by external
            services we integrate with. These include analytics platforms like
            Google Analytics, social media integrations, and advertising
            networks. These third-party cookies are governed by the privacy
            policies of the respective providers.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            Changes to This Policy
          </Typography>
          <Typography paragraph>
            We reserve the right to update this Cookie Policy as necessary. Any
            changes will be posted on this page, and significant changes will be
            communicated through other channels such as email or on-site
            notifications.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Cookie;
