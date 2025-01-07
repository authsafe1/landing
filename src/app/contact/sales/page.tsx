import { SalesContactForm } from '@/components';
import { Container } from '@mui/material';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Sales',
};

const Sales = () => {
  return (
    <main>
      <Container
        sx={{ display: 'flex', justifyContent: 'center', py: 8 }}
        maxWidth="xl"
      >
        <SalesContactForm />
      </Container>
    </main>
  );
};

export default Sales;
