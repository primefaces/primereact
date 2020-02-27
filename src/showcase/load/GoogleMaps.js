export const loadGoogleMaps = (callback) => {
    const existingScript = document.getElementById('googleMaps');

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://maps.google.com/maps/api/js?key=AIzaSyA6Ar0UymhiklJBzEPLKKn2QHwbjdz3XV0';
      script.id = 'googleMaps';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (callback) callback();
      };
    }

    if (existingScript && callback) callback();
};

export const removeGoogleMaps = () => {
    const mapScript = document.getElementById('googleMaps');

    if (mapScript) {
        mapScript.parentNode.removeChild(mapScript);

        const head = document.getElementsByTagName('head')[0];
        const scripts = head.getElementsByTagName('script');
        for (let i = 0; i < scripts.length; i++) {
            let script = scripts[i];
            let src = script.src;

            if (src.startsWith('https://maps.google.com/maps')) {
                head.removeChild(script);
            }
        }
    }
};
