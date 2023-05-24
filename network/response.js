const statusMessage = {
    '200': 'Done',
    '201': 'Created',
    '400': 'Invalid Format',
    '500': 'Internal Error'
}
exports.success = function (req, res, status, message) {

    let statusCode = status ? status : 200
    let codeMessage = message ? message : statusMessage[statusCode]

    res.status(statusCode).send({
        "error": "",
        "body": codeMessage
    })
}

exports.error = function (req, res, status, message) {
    let statusCode = status ? status : 500
    let codeMessage = message ? message : statusMessage[statusCode]

    res.status(statusCode).send({
        "error": codeMessage,
        "body": ""
    })
}