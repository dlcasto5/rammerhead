const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use('/', createProxyMiddleware({
    target: 'https://browser.rammerhead.org',
    changeOrigin: true,
    headers: {
        host: 'fake1234.browser.rammerhead.org'
    }
}));

app.listen(8080, () => console.log('Proxy on http://localhost:8080'));
