import { S3Client, GetObjectCommand  } from '@aws-sdk/client-s3'

import { getS3StaticsTypes } from "../types/utils"

const getS3Statics = ({ groupName, filePath }: getS3StaticsTypes) => {
  /*
  let src = ''

  const config = {
    region: 'us-east-1',
    credentials: {
      accessKeyId: process.env.USER_ACCESS_KEY_ID,
      secretAccessKey: process.env.USER_SECRET_ACCESS_KEY
    }
  }

  const params = {
    Bucket: 'portfolio-statics',
    Key: `${groupName}/${filePath}`,
  }

  const client = new S3Client(config)
  const command = new GetObjectCommand(params)

  try {
    const data = await client.send(command)
    console.log('data', data)
  } catch (error) {
    console.log(error)
  } finally {

  }

  return src
  */

  return `https://portfolio-statics.s3.amazonaws.com/${groupName}/${filePath}`
}

export default getS3Statics
