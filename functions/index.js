exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hey there, this function works',
            event
        })
    }
}