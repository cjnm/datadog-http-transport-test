## TEST TEST

### Add datadog api key in dd_api_key constant in logger.js

### Note: The documentation may provide the datadoc url like this `http-intake.logs.datadoghq.com` but we may need to add region to the url like
this `http-intake.logs.us5.datadoghq.com` to make it work.

Running:
```bash
npm i
docker build . -t datadog/node_app
docker run -p 49160:8080 -d datadog/node_app
```
