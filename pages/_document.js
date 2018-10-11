import Document, {Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,600|Raleway:400,600,700" rel="stylesheet"/>
            <link rel="stylesheet" href="/_next/static/style.css"/>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
          <script src="/static/js/bootstrap.js" type="text/javascript"></script>

          <link href="/static/bootstrap.css" rel="stylesheet" />
          <script dangerouslySetInnerHTML={{__html: `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
ga('create', 'UA-51162965-1', 'auto');
ga('send', 'pageview');`}} />

 <script async src='https://www.google-analytics.com/analytics.js'></script>
        </Head>
        <body>
          <script src="/static/js/facebook.js"></script>
          <Main/>
          <NextScript/>

          <div id="fb-root"></div>
          <div className="fb-customerchat" page_id="207401359461176">
          </div>

          <script src="/static/js/parallaxify.min.js"></script>
          <script src="/static/js/css3-animate-it.js"></script>
          <script src="/static/js/index.js"></script>
        </body>

      </html>
    )
  }
}

// <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"/>
//
// <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossOrigin="anonymous"/>
//
// <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossOrigin="anonymous"></script>
