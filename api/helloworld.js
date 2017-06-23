var helloService = module.exports;

function hello(request, response, next) {
    response.send('Hello world!');
}

helloService.routes = [
    { path: '/hello', httpMethod: 'GET', middleware: hello }
]

