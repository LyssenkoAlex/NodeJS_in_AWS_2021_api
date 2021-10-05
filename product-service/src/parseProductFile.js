import { S3Handler, S3Event } from "aws-lambda";
var AWS = require('aws-sdk');
import * as csvParser from "csv-parser";
import stream from 'stream';
import csv from 'csv-parser';
import {successResponse} from "./utils/responseBuilder";
import util from 'util';

AWS.config.update({region: 'eu-west-1'});
const sqs = new AWS.SQS({apiVersion: '2012-11-05'});

const finished = util.promisify(stream.finished);

export const parseProductFile = async (event) => {
    const { REGION, SQS_URL } = process.env;
    const s3 = new AWS.S3({ region: 'eu-west-1' });


    const s3Stream = s3.getObject({
        Bucket: 'rsuploaded',
        Key: 'down.txt'
    }).createReadStream();

    await finished(
        s3Stream.pipe(csv())
            .on('data', (data) => {
                console.log(data);
            })
    )

    console.log('SQS_URL: ', SQS_URL)
    await sqs.sendMessage({
        QueueUrl: 'https://sqs.eu-west-1.amazonaws.com/312548907996/TestQQ',
        MessageBody: "some dummy value"
        }, (error, result) => {
        console.log('Send message result:', error, ' result: ', result);

        return successResponse({text:'hello2'}, 200);
        }
    ).promise();




    return successResponse({text:'hello2'}, 200);

}
