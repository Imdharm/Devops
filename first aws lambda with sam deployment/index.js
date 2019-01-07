exports.handler = function(event, context, callback) {
    
    console.log('DEBUG: msg here');


    callback(null, {
        "statusCode": 200,
        "body": "hello world" 
    });
}