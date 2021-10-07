const AWS = require('aws-sdk');
const BUCKET = 'rsuploaded'


export const getFiles = async () => {
    const s3 = new AWS.S3({region:'eu-west-1'});
    let status = 200;
    let thumbnails = [];
    const params = {
        Bucket:BUCKET,
        Prefix: 'uploaded/'
    };

    try {
        const s3Response = await s3.listObjectsV2(params).promise();
        thumbnails = s3Response.Contents;
    }
    catch (error) {
        console.error(error);
        status = 500;
    }

    return {
        statusCode: status,
        headers: {'Access-Control-Allow-Origin': '*'},
        body: JSON.stringify(
            thumbnails
                .filter(thumbnail => thumbnail.Size)
                .map(thumbnail => `https://${BUCKET}.s3.amazonaws.com/${thumbnail.Key}`)
        )

    }

}
