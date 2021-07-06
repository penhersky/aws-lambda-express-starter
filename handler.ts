import serverlessExpress from '@vendia/serverless-express';
import { APIGatewayProxyHandler } from 'aws-lambda';

import app from './src';

export const mainEndpoint: APIGatewayProxyHandler = serverlessExpress({ app });
