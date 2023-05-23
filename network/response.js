exports.success = function (req, res,status, message) {
    res.status(status||200).send({
        "error":"",
        "body":message
    })
}

exports.error = function (req, res, status, message) {
    res.status(status||500).send({
        "error":message,
        "body":""
    })
}