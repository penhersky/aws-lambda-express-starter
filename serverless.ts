import type { Serverless } from 'serverless/aws';

const serverlessConfiguration: Serverless = {
  service: {
    name: 'typescript-lambda',
  },
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
    'serverless-offline': {
      httpPort: 4000,
    },
  },
  plugins: ['serverless-webpack', 'serverless-offline'],
  provider: {
    name: 'aws',
    stage: '${env:NODE_ENV}',
    runtime: 'nodejs14.x',
    region: 'eu-central-1',
    memorySize: 512,
    timeout: 10,
    apiGateway: {
      minimumCompressionSize: 1024,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
  },
  functions: {
    hello: {
      handler: 'handler.mainEndpoint',
      events: [
        {
          http: {
            method: 'ANY',
            path: '/',
            cors: {
              origins: '*',
              headers: '*',
            },
          },
        },
        {
          http: {
            method: 'ANY',
            path: '/{proxy+}',
            cors: {
              origins: '*',
              headers: '*',
            },
          },
        },
      ],
    },
  },
};

module.exports = serverlessConfiguration;
