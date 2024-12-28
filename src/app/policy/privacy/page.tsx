import { Box, Container, Divider, Typography } from '@mui/material';
import { FC } from 'react';

const Privacy: FC = () => {
  return (
    <main>
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Typography component="h1" variant="h3" gutterBottom>
          Privacy Policy
        </Typography>
        <Divider />
        <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Introduction
            </Typography>
            <Typography component="p" gutterBottom>
              At AuthSafe, we are committed to protecting your privacy and
              ensuring transparency about how we collect, use, and disclose
              personal data. This Privacy Policy explains how we handle your
              personal information when you use our services, including the type
              of data we collect, why we collect it, how we store it, and your
              rights regarding your personal data. By using our services, you
              agree to the practices described in this policy.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              Information We Collect
            </Typography>
            <Typography component="p">
              We collect both personal information and anonymous data when you
              interact with our services. The types of information we collect
              include, but are not limited to:
            </Typography>
            <ul>
              <li>
                <Typography component="p" gutterBottom>
                  <strong>Personal Information:</strong> This includes your
                  name, email address, phone number, and other details you
                  provide when creating an account. This also includes any
                  personal information you provide while contacting us or
                  through other voluntary submissions.
                </Typography>
              </li>
              <li>
                <Typography component="p">
                  <strong>Automatically Collected Data:</strong> This includes
                  technical information such as your IP address, browser type,
                  device information, access times, and the pages you visited
                  before using our service. This data helps us improve our
                  services and ensure that our systems are operating
                  efficiently.
                </Typography>
              </li>
            </ul>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              How We Use Your Data
            </Typography>
            <Typography component="p">
              We use the information we collect to provide and enhance the
              services you use. Specifically, we may use your data for the
              following purposes:
            </Typography>
            <ul>
              <li>
                <Typography component="p">
                  <strong>Account Creation and Management:</strong> We use your
                  personal data to create and manage your account on AuthSafe.
                </Typography>
              </li>
              <li>
                <Typography component="p">
                  <strong>Service Improvement:</strong> Usage data helps us
                  understand how users interact with our services so we can make
                  improvements. For example, we may analyze user behavior to
                  optimize user experiences and fix performance issues.
                </Typography>
              </li>
              <li>
                <Typography component="p">
                  <strong>Communication:</strong> We may use your contact
                  information to send you updates regarding our services, such
                  as critical security information, service outages, or
                  account-related notifications.
                </Typography>
              </li>
              <li>
                <Typography component="p">
                  <strong>Marketing:</strong> With your consent, we may use your
                  personal data to send you promotional materials or other
                  information about new features. However, you have the right to
                  opt out of these communications at any time.
                </Typography>
              </li>
            </ul>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              Data Retention and Storage
            </Typography>
            <Typography component="p">
              We retain your personal data for as long as your account is active
              or as necessary to provide you with services. We may also retain
              your data for legitimate business purposes, including to comply
              with legal obligations, resolve disputes, and enforce agreements.
              Data is stored on secure servers that comply with applicable laws.
            </Typography>
            <Typography component="p">
              <em>Note:</em> We may retain certain information for extended
              periods as required by law, even after you close your account, to
              comply with legal obligations.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              Sharing of Your Data
            </Typography>
            <Typography component="p">
              AuthSafe does not sell your personal data to third parties.
              However, we may share your data with trusted partners who assist
              us in providing services. These partners are subject to
              contractual agreements that ensure they handle your data securely
              and in compliance with applicable laws.
            </Typography>
            <Typography component="p">
              <strong>Third-Party Sharing:</strong> In certain cases, we may be
              required to share your personal data with third parties to comply
              with legal obligations, such as responding to lawful requests from
              public authorities, including to meet national security or law
              enforcement requirements.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              Your Rights
            </Typography>
            <Typography component="p">
              You have several rights concerning your personal data, including:
            </Typography>
            <ul>
              <li>
                <Typography component="p">
                  <strong>Right to Access:</strong> You can request access to
                  the personal data we hold about you at any time.
                </Typography>
              </li>
              <li>
                <Typography component="p">
                  <strong>Right to Rectification:</strong> You can request that
                  we correct any inaccurate or incomplete personal information
                  we hold about you.
                </Typography>
              </li>
              <li>
                <Typography component="p">
                  <strong>Right to Erasure:</strong> You can request that we
                  delete your personal data under certain circumstances, such as
                  when it is no longer necessary for the purposes for which it
                  was collected.
                </Typography>
              </li>
              <li>
                <Typography component="p">
                  <strong>Right to Data Portability:</strong> You can request
                  that we provide your personal data to you in a structured,
                  commonly used, and machine-readable format.
                </Typography>
              </li>
            </ul>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              Data Security
            </Typography>
            <Typography component="p">
              We implement appropriate technical and organizational measures to
              safeguard your personal data. However, no system is completely
              secure, and we cannot guarantee the security of your information.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              Children&apos;s Privacy
            </Typography>
            <Typography component="p">
              Our services are not intended for children under the age of 13,
              and we do not knowingly collect personal information from children
              without appropriate parental consent. If we discover that a child
              has provided us with personal information without parental
              consent, we will take steps to delete such information.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              Changes to This Privacy Policy
            </Typography>
            <Typography component="p">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or legal requirements. If we make
              significant changes, we will notify you either by email or by
              posting a notice on our website.
            </Typography>
          </Box>
        </Box>
      </Container>
    </main>
  );
};

export default Privacy;
