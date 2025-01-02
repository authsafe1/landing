import {
  ArrowDropDown,
  Book,
  Business,
  Code,
  Construction,
  ContactSupport,
  Cookie,
  Create,
  HelpOutline,
  Home,
  HourglassTop,
  Info,
  IntegrationInstructions,
  MenuBook,
  MonetizationOn,
  PlayArrow,
  PriceChange,
  School,
  Shield,
  Storage,
} from '@mui/icons-material';

const constants = {
  features: [
    {
      header: 'Generous Free Tier',
      description:
        'Freeto begin with and provides reasonable quotas to start with an organization.',
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
  headerData: {
    desktop: {
      static: [
        {
          header: 'Docs',
          url: '/docs',
          hasDropdown: false,
          EndIcon: null,
        },
        {
          header: 'Pricing',
          url: '/pricing',
          hasDropdown: false,
          EndIcon: null,
        },
        {
          header: 'Company',
          url: null,
          hasDropdown: true,
          EndIcon: ArrowDropDown,
        },
      ],
      dropdown: [
        {
          header: 'About',
          subHeader: 'Know about AuthSafe',
          Icon: Info,
          url: '/about',
        },
        {
          header: 'Blog',
          subHeader: 'Latest news and updates',
          Icon: Create,
          url: '/blog',
        },
        {
          header: 'Contact',
          subHeader: 'Contact us for help',
          Icon: ContactSupport,
          url: '/contact',
        },
      ],
    },
    mobile: [
      {
        header: 'Home',
        Icon: Home,
        url: '/',
      },
      {
        header: 'About',
        Icon: Info,
        url: '/about',
      },
      {
        header: 'Docs',
        Icon: Book,
        url: '/docs',
      },
      {
        header: 'Blog',
        Icon: Create,
        url: '/blog',
      },
      {
        header: 'Pricing',
        Icon: PriceChange,
        url: '/pricing',
      },
      {
        header: 'Contact',
        Icon: ContactSupport,
        url: '/contact',
      },
    ],
  },
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
      redirectUrl: '/billing?plan=free',
    },
    {
      title: 'Professional',
      subtitle: 'Powerful features for growing teams',
      subheader: 'Recommended',
      totalPrice: '999',
      description: [
        'Up to 100,000 users',
        'Social login integration',
        '1000 permissions and 100 roles',
        'Remove AuthSafe branding',
        'Email support with 24-hour response',
      ],
      buttonText: 'Upgrade to Pro',
      buttonVariant: 'contained',
      buttonColor: 'primary',
      redirectUrl: '/billing?plan=professional',
    },
    {
      title: 'Enterprise',
      subtitle: 'Custom-tailored for large organizations',
      totalPrice: '5999',
      description: [
        'Unlimited users',
        'SSO support',
        'Unlimited roles and permissions',
        '24/7 priority support',
      ],
      buttonText: 'Contact Us',
      buttonVariant: 'outlined',
      buttonColor: 'primary',
      redirectUrl: '/billing?plan=enterprise',
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
  countryList: [
    'Afghanistan',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antarctica',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas (the)',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia (Plurinational State of)',
    'Bonaire, Sint Eustatius and Saba',
    'Bosnia and Herzegovina',
    'Botswana',
    'Bouvet Island',
    'Brazil',
    'British Indian Ocean Territory (the)',
    'Brunei Darussalam',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cayman Islands (the)',
    'Central African Republic (the)',
    'Chad',
    'Chile',
    'China',
    'Christmas Island',
    'Cocos (Keeling) Islands (the)',
    'Colombia',
    'Comoros (the)',
    'Congo (the Democratic Republic of the)',
    'Congo (the)',
    'Cook Islands (the)',
    'Costa Rica',
    'Croatia',
    'Cuba',
    'Curaçao',
    'Cyprus',
    'Czechia',
    "Côte d'Ivoire",
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic (the)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini',
    'Ethiopia',
    'Falkland Islands (the) [Malvinas]',
    'Faroe Islands (the)',
    'Fiji',
    'Finland',
    'France',
    'French Guiana',
    'French Polynesia',
    'French Southern Territories (the)',
    'Gabon',
    'Gambia (the)',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guadeloupe',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Heard Island and McDonald Islands',
    'Holy See (the)',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran (Islamic Republic of)',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    "Korea (the Democratic People's Republic of)",
    'Korea (the Republic of)',
    'Kuwait',
    'Kyrgyzstan',
    "Lao People's Democratic Republic (the)",
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macao',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands (the)',
    'Martinique',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Micronesia (Federated States of)',
    'Moldova (the Republic of)',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands (the)',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger (the)',
    'Nigeria',
    'Niue',
    'Norfolk Island',
    'Northern Mariana Islands (the)',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestine, State of',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines (the)',
    'Pitcairn',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Republic of North Macedonia',
    'Romania',
    'Russian Federation (the)',
    'Rwanda',
    'Réunion',
    'Saint Barthélemy',
    'Saint Helena, Ascension and Tristan da Cunha',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Martin (French part)',
    'Saint Pierre and Miquelon',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Sint Maarten (Dutch part)',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Georgia and the South Sandwich Islands',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan (the)',
    'Suriname',
    'Svalbard and Jan Mayen',
    'Sweden',
    'Switzerland',
    'Syrian Arab Republic',
    'Taiwan',
    'Tajikistan',
    'Tanzania, United Republic of',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tokelau',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks and Caicos Islands (the)',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates (the)',
    'United Kingdom of Great Britain and Northern Ireland (the)',
    'United States Minor Outlying Islands (the)',
    'United States of America (the)',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Venezuela (Bolivarian Republic of)',
    'Viet Nam',
    'Virgin Islands (British)',
    'Virgin Islands (U.S.)',
    'Wallis and Futuna',
    'Western Sahara',
    'Yemen',
    'Zambia',
    'Zimbabwe',
    'Åland Islands',
  ],
};

export default constants;
