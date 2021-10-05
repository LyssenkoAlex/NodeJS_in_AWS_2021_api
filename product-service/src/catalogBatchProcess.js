import * as AWS from "aws-sdk";


export const catalogBatchProcess = (event) => {

    const messages = event.Records.map(({body}) => body)
    console.log('message: ', messages);
}
