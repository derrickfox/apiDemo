var helloService = module.exports;

function getRequest(request, response, next) {
    response.send('Hello Tim! Let me know what to do next! :)');
}

helloService.routes = [
    { path: '/hello', httpMethod: 'GET', middleware: getRequest }
]

