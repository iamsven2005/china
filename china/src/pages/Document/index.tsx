import { Links, Main, Scripts } from 'ice';

function Document() {
  return (
    <html>
      <head></head>
      <body>
        <Main />
        <Scripts ScriptElement={(props) => {
            console.log('Script props passed from framework', props);
            return (
              <script
                dangerouslySetInnerHTML={{
                  __html: `console.log('custom scripts')`,
                }}
              />
            );
          }}
        />
         <Links LinkElement={(props) => {
            return <link {...props} ></link>;
          }}
        />
      </body>
    </html>
  );
}