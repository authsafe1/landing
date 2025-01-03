import { EngineeringContactForm } from '@/components';
import { Container } from '@mui/material';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Engineering',
};

const Engineering = () => {
  return (
    <main>
      <Container
        sx={{ display: 'flex', justifyContent: 'center', py: 8 }}
        maxWidth="lg"
      >
        <EngineeringContactForm />
      </Container>
    </main>
  );
};

export default Engineering;
