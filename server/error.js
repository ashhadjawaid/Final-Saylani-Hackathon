export const createError = (status, message, req, res) => {
    res
        .status(status)
        .json({
            "succes": false,
            "status": status,
            "message": message
        })
}