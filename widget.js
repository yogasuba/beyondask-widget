<!-- BeyondAsk Widget Code -->
<script>
  (function(w,d,s,o,f,js,fjs){
    w['BeyondAskWidget']=o;w[o]=w[o]||function(){
      (w[o].q=w[o].q||[]).push(arguments)};
    js=d.createElement(s),fjs=d.getElementsByTagName(s)[0];
    js.id=o;js.src=f;js.async=1;fjs.parentNode.insertBefore(js,fjs);
  }(window,document,'script','beyondWidget','https://yogasuba.github.io/beyondask-widget/widget.js'));
  
  beyondWidget('init', {
    publicKey: 'pk_wrV8tLKDYSft0ejeeMYeft0Dd25PjJ4f', // Your unique widget key
    container: '#beyond-container',   // ID of container element (for embedded mode)
    
    // Basic configuration
    position: 'bottom-right',
    size: 'medium',
    welcomeMessage: 'Hello! How can I help you today?',
    widgetTitle: 'kaviarasan',
    brandName: 'Support',
    
    // User information collection
    collectUserInfo: true,
    userFields: ["name","email"],
    requireOtpVerification: true,
    
    // Theme customization
    themeConfig: {
      primaryColor: '#60d600',
      textColor: '#f4e2e2',
      backgroundColor: '#8e54b6'
    }
  });
</script>

<!-- Add this div where you want the widget to appear -->
<div id="beyond-container"></div>

