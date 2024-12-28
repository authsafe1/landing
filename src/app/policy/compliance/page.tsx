import { Box, Container, Divider, Typography } from '@mui/material';
import { FC } from 'react';

const Compliance: FC = () => {
  return (
    <main>
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Compliance with Data Protection Regulations
        </Typography>
        <Divider />
        <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box>
            <Typography variant="h6" gutterBottom>
              GDPR Compliance
            </Typography>
            <Typography component="p">
              AuthSafe is committed to complying with the General Data
              Protection Regulation (GDPR) for our users within the European
              Economic Area (EEA). Under the GDPR, you have specific rights
              regarding your personal data, including the right to access,
              rectification, erasure, and restriction of processing. We ensure
              that our practices meet the stringent data protection standards
              required by the GDPR.
            </Typography>
            <Typography component="p">
              If you are an EU resident, you can exercise these rights by
              contacting us directly. We are also required to obtain your
              explicit consent before collecting and processing certain types of
              personal data. Our platform includes consent mechanisms to ensure
              compliance.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              CCPA Compliance
            </Typography>
            <Typography component="p">
              For users in California, AuthSafe complies with the California
              Consumer Privacy Act (CCPA), providing you with the right to know
              what personal data is being collected, the right to request
              deletion of your data, and the right to opt out of the sale of
              your data. Although we do not sell personal data, third parties we
              engage with may collect data for targeted advertising. You can
              request that we stop sharing data with these third parties at any
              time.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              Other Jurisdictions
            </Typography>
            <Typography component="p">
              If you are located in a jurisdiction outside of the EEA or
              California, other data protection regulations may apply. We strive
              to meet the highest standards of privacy and data protection in
              all regions where we operate.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              Security Practices
            </Typography>
            <Typography component="p">
              AuthSafe employs industry-standard security measures to protect
              the personal data of our users. This includes data encryption,
              secure data transmission, and access control mechanisms. However,
              no system can be entirely secure, and we cannot guarantee the
              absolute security of your information.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              Reporting a Data Breach
            </Typography>
            <Typography component="p">
              In the event of a data breach, we will notify affected users and
              relevant authorities as required by applicable laws. We have
              established internal procedures to handle such incidents
              efficiently to minimize impact and protect your data.
            </Typography>
          </Box>
        </Box>
      </Container>
    </main>
  );
};

export default Compliance;
