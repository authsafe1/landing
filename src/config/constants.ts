import {
  Apps,
  Badge,
  BarChart,
  Bolt,
  Business,
  Code,
  Construction,
  Cookie,
  HelpOutline,
  History,
  Home,
  HourglassTop,
  IntegrationInstructions,
  LockPerson,
  Login,
  MenuBook,
  MonetizationOn,
  Person,
  PlayArrow,
  School,
  Shield,
  Storage,
  Verified,
  Webhook,
} from '@mui/icons-material';

const constants = {
  features: [
    {
      header: 'Completely Free',
      description:
        'Completely free to start with and provides reasonable quotas to start with an organization.',
      Icon: MonetizationOn,
    },
    {
      header: 'Universal Authentication (OIDC)',
      description:
        'Easily integrate single sign-on (SSO) with OpenID Connect (OIDC) to manage user authentication across multiple applications securely.',
      Icon: Shield,
    },
    {
      header: 'Secure Session Management',
      description:
        'Leverage cookie-based sessions with secure, HttpOnly cookies for safe, persistent authentication and seamless user experiences.',
      Icon: Cookie,
    },
    {
      header: 'Advanced Session Handling with Redis',
      description:
        'Maximize performance with Redis-backed session storage, providing fast and scalable session handling for millions of users.',
      Icon: HourglassTop,
    },
    {
      header: 'Scalable and Secure Data Storage',
      description:
        'Use PostgreSQL to manage user data securely and at scale, ensuring your application can handle large datasets effortlessly.',
      Icon: Storage,
    },
    {
      header: 'Enterprise-Grade Scalability',
      description:
        'Built to scale with your business needs, ensuring robust performance and reliability for high-demand enterprise environments.',
      Icon: Business,
    },
  ],
  faq: [
    {
      title: 'What is AuthSafe, and how does it work?',
      summary: `AuthSafe is a developer-first identity management platform for secure authentication, authorization, and SSO.`,
    },
    {
      title: 'How is AuthSafe different from other authentication platforms?',
      summary: `AuthSafe offers flexibility, security, and customization without locking you into rigid workflows.`,
    },
    {
      title: 'Can AuthSafe integrate with existing applications?',
      summary: `Yes, AuthSafe integrates easily with new or existing applications using our APIs and SDKs.`,
    },
    {
      title: 'What authentication protocols does AuthSafe support?',
      summary:
        "AuthSafe supports OAuth2 and OIDC, offering secure, session-based authentication and authorization workflows. It's designed to integrate seamlessly with existing applications while providing enterprise-level security.",
    },
    {
      title: 'What authentication methods does AuthSafe support?',
      summary:
        'AuthSafe supports password login, social logins, MFA, and SSO via OAuth2 and OpenID Connect',
    },
    {
      title: 'Is AuthSafe suitable for large-scale enterprise applications?',
      summary:
        'Yes, AuthSafe is scalable for startups, SMBs, and enterprise-level applications',
    },
    {
      title: 'Does AuthSafe store passwords securely?',
      summary:
        'Yes, passwords are hashed and securely stored using industry-standard encryption',
    },
    {
      title: 'Can I customize the login and signup experience?',
      summary:
        'Yes, you can fully customize the user experience to match your brand.',
    },
    {
      title: 'How does AuthSafe handle user permissions and roles?',
      summary:
        'AuthSafe provides customizable role-based access control for granular permissions management.',
    },
    {
      title: 'Does AuthSafe support Single Sign-On (SSO)?',
      summary:
        'Yes, AuthSafe supports SSO using OpenID Connect and OAuth2 standards.',
    },
    {
      title: 'How can I get started with AuthSafe?',
      summary:
        'Sign up, follow our documentation, and integrate AuthSafe with your app.',
    },
  ],
  navigation: [
    {
      subheader: 'Overview',
      routes: [
        { to: '/dashboard', text: 'Quick Start', Icon: Bolt },
        { to: '/dashboard/insights', text: 'Insights', Icon: BarChart },
      ],
    },
    {
      subheader: 'Users and Applications',
      routes: [
        { to: '/dashboard/users', text: 'Users', Icon: Person },
        { to: '/dashboard/applications', text: 'Applications', Icon: Apps },
      ],
    },
    {
      subheader: 'Access Management',
      routes: [
        { to: '/dashboard/roles', text: 'Roles', Icon: Badge },
        { to: '/dashboard/permissions', text: 'Permissions', Icon: Verified },
      ],
    },
    {
      subheader: 'Branding & Customization',
      routes: [
        {
          to: '/dashboard/branding/login',
          text: 'Login',
          Icon: Login,
        },
        // {
        //   to: "/dashboard/branding/email",
        //   text: "Email",
        //   Icon: Email,
        // },
      ],
    },
    {
      subheader: 'Developers',
      routes: [
        {
          to: '/dashboard/webhooks',
          text: 'Webhooks',
          Icon: Webhook,
        },
      ],
    },
    {
      subheader: 'Analytics and Monitoring',
      routes: [
        { to: '/dashboard/log/activity', text: 'Activity Logs', Icon: History },
        {
          to: '/dashboard/log/authorization',
          text: 'Authorization Logs',
          Icon: LockPerson,
        },
        { to: '/dashboard/log/security', text: 'Security Logs', Icon: Shield },
      ],
    },
    // {
    //   subheader: "Plan",
    //   routes: [
    //     { to: "/dashboard/plan/billing", text: "Billing", Icon: CreditCard },
    //   ],
    // },
  ],
  billingTiers: [
    {
      title: 'Free',
      subtitle: 'Everything you need to get started',
      totalPrice: '0',
      description: [
        '10,000 monthly active users',
        '100 permission and 10 roles',
        'Email-password authentication',
        'Community support',
      ],
      buttonText: 'Continue as Free',
      priceId: '',
    },
    {
      title: 'Professional',
      subtitle: 'Powerful features for growing teams',
      subheader: 'Recommended',
      totalPrice: '1999',
      description: [
        'Up to 100,000 users',
        'Social login integration',
        '1000 permissions and 100 roles',
        'Remove AuthSafe branding',
        'Email support with 24-hour response',
      ],
      buttonText: 'Upgrade to Professional',
      priceId: '',
    },
    {
      title: 'Enterprise',
      subtitle: 'Custom-tailored for large organizations',
      totalPrice: '7999',
      description: [
        'Unlimited users',
        'SSO support',
        'Unlimited roles and permissions',
        '24/7 priority support',
      ],
      buttonText: 'Upgrade to Enterprise',
      priceId: '',
    },
  ],
  docNavigation: [
    {
      subheader: 'Getting Started',
      routes: [
        { to: '/docs', text: 'Introduction', Icon: Home },
        { to: '/docs/quick-start', text: 'Quick Start', Icon: School },
      ],
    },
    {
      subheader: 'Guides',
      routes: [
        { to: '/docs/basic-setup', text: 'Basic Setup', Icon: MenuBook },
        {
          to: '/docs/advanced-usage',
          text: 'Advanced Usage',
          Icon: Construction,
        },
      ],
    },
    {
      subheader: 'API Reference',
      routes: [
        { to: '/docs/auth', text: 'Authentication', Icon: Code },
        { to: '/docs/api/authorization', text: 'Authorization', Icon: Code },
        { to: '/docs/api/endpoints', text: 'Endpoints', Icon: Code },
      ],
    },
    {
      subheader: 'Integration',
      routes: [
        {
          to: '/docs/integration/sdk',
          text: 'SDK Integration',
          Icon: IntegrationInstructions,
        },
        {
          to: '/docs/integration/webhooks',
          text: 'Webhooks',
          Icon: IntegrationInstructions,
        },
      ],
    },
    {
      subheader: 'Support and Resources',
      routes: [
        { to: '/docs/faq', text: 'FAQ', Icon: HelpOutline },
        { to: '/docs/contact', text: 'Contact Support', Icon: HelpOutline },
      ],
    },
  ],
  docIntro: {
    cardData: [
      {
        Icon: PlayArrow,
        header: 'Quickstart',
        description:
          'Explore our end-to-end tutorials and getting started guides for different application stacks using AuthSafe.',
      },
      {
        Icon: Code,
        header: 'API Reference',
        description:
          'Dig into our API reference documentation and SDKs. We have everything you need to get started setting up authentication with AuthSafe.',
      },
    ],
  },
  pricingTiers: [
    {
      title: 'Free',
      subtitle: 'Everything you need to get started',
      totalPrice: '0',
      description: [
        '10,000 monthly active users',
        '100 permission and 10 roles',
        'Email-password authentication',
        'Community support',
      ],
      buttonText: 'Sign Up for free',
      buttonVariant: 'outlined',
      buttonColor: 'primary',
      redirectUrl: '/dashboard/plan/billing?plan=free',
    },
    {
      title: 'Professional',
      subtitle: 'Powerful features for growing teams',
      subheader: 'Recommended',
      totalPrice: '1999',
      description: [
        'Up to 100,000 users',
        'Social login integration',
        '1000 permissions and 100 roles',
        'Remove AuthSafe branding',
        'Email support with 24-hour response',
      ],
      buttonText: 'Start Now',
      buttonVariant: 'contained',
      buttonColor: 'primary',
      redirectUrl: '/dashboard/plan/billing?plan=professional',
    },
    {
      title: 'Enterprise',
      subtitle: 'Custom-tailored for large organizations',
      totalPrice: '7999',
      description: [
        'Unlimited users',
        'SSO support',
        'Unlimited roles and permissions',
        '24/7 priority support',
      ],
      buttonText: 'Contact Us',
      buttonVariant: 'outlined',
      buttonColor: 'primary',
      redirectUrl: '/dashboard/plan/billing?plan=enterprise',
    },
  ],
  authExamples: {
    javascript: `
  const fetch = require('node-fetch');
  
  // Step 1: Initiate login
  const initiateLogin = () => {
    const clientId = "<CLIENT_ID>";
    const organizationId = "<ORG_ID>";
    const redirectUri = "<REDIRECT_URI>";
    const state = "xxxxx";
    const nonce = "xxxxx";
    
    const url = \`https://authsafe.in/oauth2/authorize?response_type=code&client_id=\${clientId}&organization_id=\${organizationId}&scope=openid%20profile&redirect_uri=\${redirectUri}&state=\${state}&nonce=\${nonce}\`;
    
    window.location.replace(url);
  };
  
  // Step 2: Get code from callback URL
  const getCode = () => new URLSearchParams(window.location.search).get("code");
  
  // Step 3: Get ID Token
  const getToken = async () => {
    const response = await fetch("https://authsafe.in/api/oauth2/token", {
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
    python: `
  from flask import redirect, request, jsonify
  import requests
  
  # Step 1: Initiate login
  @app.route('/authorize')
  def initiate_login():
      client_id = "<CLIENT_ID>"
      organization_id = "<ORG_ID>"
      redirect_uri = "<REDIRECT_URI>"
      state = "xxxxx"
      nonce = "xxxxx"
  
      url = f"https://authsafe.in/oauth2/authorize?response_type=code&client_id={client_id}&organization_id={organization_id}&scope=openid%20profile&redirect_uri={redirect_uri}&state={state}&nonce={nonce}"
      return redirect(url)
  
  # Step 2: Get code from callback URL
  @app.route('/callback')
  def callback():
      code = request.args.get('code')
      return jsonify({'code': code})
  
  # Step 3: Get ID Token
  def get_token(code):
      response = requests.post("https://authsafe.in/api/oauth2/token", json={
          "grant_type": "authorization_code",
          "code": code,
          "client_id": "<CLIENT_ID>",
          "client_secret": "<CLIENT_SECRET>",
          "redirect_uri": "<REDIRECT_URI>",
      })
      return response.json()
  `,
    php: `
  <?php
  // Step 1: Initiate login
  function initiateLogin() {
      $client_id = "<CLIENT_ID>";
      $organization_id = "<ORG_ID>";
      $redirect_uri = "<REDIRECT_URI>";
      $state = "xxxxx";
      $nonce = "xxxxx";
  
      $url = "https://authsafe.in/oauth2/authorize?response_type=code&client_id={$client_id}&organization_id={$organization_id}&scope=openid%20profile&redirect_uri={$redirect_uri}&state={$state}&nonce={$nonce}";
      header("Location: $url");
      exit();
  }
  
  // Step 2: Get code from callback URL
  function getCode() {
      return $_GET['code'];
  }
  
  // Step 3: Get ID Token
  function getToken($code) {
      $url = "https://authsafe.in/api/oauth2/token";
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
  },
};

export default constants;
