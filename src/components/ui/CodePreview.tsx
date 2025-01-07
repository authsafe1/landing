'use client';

import { Box, Grid2 as Grid, Paper, Tab, Tabs } from '@mui/material';
import { FC, SyntheticEvent, useState } from 'react';
import CodeViewer from './CodeViewer';

const authExamples = {
  javascript: `const fetch = require('node-fetch');

// Step 1: Initiate login
const initiateLogin = () => {
  const clientId = "<CLIENT_ID>";
  const organizationId = "<ORG_ID>";
  const redirectUri = "<REDIRECT_URI>";
  const state = "xxxxx";
  const nonce = "xxxxx";
  
  const url = \`https://dashboard.authsafe.in/oauth2/authorize?response_type=code&client_id=\${clientId}&organization_id=\${organizationId}&scope=openid%20profile&redirect_uri=\${redirectUri}&state=\${state}&nonce=\${nonce}\`;
  
  window.location.replace(url);
};

// Step 2: Get code from callback URL
const getCode = () => new URLSearchParams(window.location.search).get("code");

// Step 3: Get ID Token
const getToken = async () => {
  const response = await fetch("https://api.authsafe.in/oauth2/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      grant_type: "authorization_code",
      code: getCode(),
      client_id: "<CLIENT_ID>",
      client_secret: "<CLIENT_SECRET>",
      redirect_uri: "<REDIRECT_URI>",
    }),
  });
  return await response.json();
};
`,
  python: `from flask import redirect, request, jsonify 
  import requests

# Step 1: Initiate login
@app.route('/authorize')
def initiate_login():
    client_id = "<CLIENT_ID>"
    organization_id = "<ORG_ID>"
    redirect_uri = "<REDIRECT_URI>"
    state = "xxxxx"
    nonce = "xxxxx"

    url = f"https://dashboard.authsafe.in/oauth2/authorize?response_type=code&client_id={client_id}&organization_id={organization_id}&scope=openid%20profile&redirect_uri={redirect_uri}&state={state}&nonce={nonce}"
    return redirect(url)

# Step 2: Get code from callback URL
@app.route('/callback')
def callback():
    code = request.args.get('code')
    return jsonify({'code': code})

# Step 3: Get ID Token
def get_token(code):
    response = requests.post("https://api.authsafe.in/oauth2/token", json={
        "grant_type": "authorization_code",
        "code": code,
        "client_id": "<CLIENT_ID>",
        "client_secret": "<CLIENT_SECRET>",
        "redirect_uri": "<REDIRECT_URI>",
    })
    return response.json()
`,
  php: `<?php
// Step 1: Initiate login
function initiateLogin() {
    $client_id = "<CLIENT_ID>";
    $organization_id = "<ORG_ID>";
    $redirect_uri = "<REDIRECT_URI>";
    $state = "xxxxx";
    $nonce = "xxxxx";

    $url = "https://dashboard.authsafe.in/oauth2/authorize?response_type=code&client_id={$client_id}&organization_id={$organization_id}&scope=openid%20profile&redirect_uri={$redirect_uri}&state={$state}&nonce={$nonce}";
    header("Location: $url");
    exit();
}

// Step 2: Get code from callback URL
function getCode() {
    return $_GET['code'];
}

// Step 3: Get ID Token
function getToken($code) {
    $url = "https://api.authsafe.in/oauth2/token";
    $data = array(
        "grant_type" => "authorization_code",
        "code" => $code,
        "client_id" => "<CLIENT_ID>",
        "client_secret" => "<CLIENT_SECRET>",
        "redirect_uri" => "<REDIRECT_URI>"
    );

    $options = array(
        "http" => array(
            "header"  => "Content-type: application/json\r\n",
            "method"  => "POST",
            "content" => json_encode($data),
        ),
    );

    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    return json_decode($result, true);
}
?>
`,
};

const CodePreview: FC = () => {
  const [language, setLanguage] = useState<'javascript' | 'python' | 'php'>(
    'javascript',
  );

  const handleCodeTabChange = (
    event: SyntheticEvent,
    newValue: 'javascript' | 'python' | 'php',
  ) => {
    setLanguage(newValue);
  };

  return (
    <Paper variant="outlined">
      <Grid container>
        <Grid width="100%">
          <Tabs
            value={language}
            onChange={handleCodeTabChange}
            variant="fullWidth"
          >
            <Tab label="Javascript" value="javascript" />
            <Tab label="Python" value="python" />
            <Tab label="Php" value="php" />
          </Tabs>
        </Grid>
        <Grid width="100%">
          <Box sx={{ overflow: 'auto', p: 1 }}>
            <CodeViewer code={authExamples[language]} language={language} />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CodePreview;
