const http = require('http');

const routes = {
    about: '/about',
    services: '/services',
    contact: '/contact',
};

const getH1 = text => {
    return `<h1 style='text-align:center;margin-top:100px'>${text}</h1>`;
};
const server = http.createServer(({ url }, res) => {
    let route = null;
    if (url !== '/favicon.ico') {
        console.log('server => url', url);
        route = url.split('/')[1];
    }
    if (url === '/') {
        res.end(getH1('Weclome to home pgae'));
    } else if (url === routes[route]) {
        res.end(getH1(`Weclome to ${route} pgae`));
    } else {
        res.end(getH1('This page is not found 404'));
    }
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});
