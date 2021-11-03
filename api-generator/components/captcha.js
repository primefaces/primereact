const CaptchaProps = [
    {
      name: 'id',
      type: 'string',
      default: 'null',
      description: 'Unique identifier of the element.'
    },
    {
      name: 'siteKey',
      type: 'string',
      default: 'null',
      description: 'Public sitekey.'
    },
    {
      name: 'theme',
      type: 'string',
      default: 'light',
      description: 'The color scheme of the widget.'
    },
    {
      name: 'type',
      type: 'string',
      default: 'image',
      description: 'The type of CAPTCHA to serve.'
    },
    {
      name: 'size',
      type: 'string',
      default: 'normal',
      description: 'The size of the widget.'
    },
    {
      name: 'tabIndex',
      type: 'number',
      default: '0',
      description: 'The tabIndex of the widget and challenge.'
    },
    {
      name: 'language',
      type: 'string',
      default: 'en',
      description: 'Language of the widget.'
    }
  ];

const CaptchaEvents = [
    {
        name: 'onResponse',
        description: 'The callback function to be executed when the user submits a successful CAPTCHA response.',
        arguments: [
            {
                name: 'event.response',
                type: 'any',
                description: 'The user response token.'
            }
        ]
    },
    {
        name: 'onExpire',
        description: 'The callback function to be executed when the recaptcha response expires and the user needs to solve a new CAPTCHA.',
        arguments: []
    }
];

const CaptchaStyles = [

];

module.exports = {
    captcha: {
        name: 'Captcha',
        description: 'Captcha is a form validation component based on Recaptcha.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/captcha',
        props: CaptchaProps,
        events: CaptchaEvents,
        styles: CaptchaStyles
    }
};
