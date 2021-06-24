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

];

const CaptchaStyles = [

];

module.exports = {
    captcha: {
        name: 'Captcha',
        description: 'TODO',
        docUrl: 'https://primefaces.org/primereact/showcase/#/captcha',
        props: CaptchaProps,
        events: CaptchaEvents,
        styles: CaptchaStyles
    }
};
