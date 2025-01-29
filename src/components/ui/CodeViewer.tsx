import { Box } from '@mui/material';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeViewerProps {
  code: string;
  language?: string;
}

const CodeViewer: React.FC<CodeViewerProps> = ({
  code,
  language = 'javascript',
}) => {
  return (
    <Box component="code" sx={{ maxWidth: '100%', my: 2 }}>
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        wrapLines
        wrapLongLines
      >
        {code}
      </SyntaxHighlighter>
    </Box>
  );
};

export default CodeViewer;
