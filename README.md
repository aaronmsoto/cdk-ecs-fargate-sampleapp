# Welcome to your CDK TypeScript project!

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

## Initial CDK Setup Commands

 * `mkdir app && cd app`    make a new directory and cd into it
 * `npm install -g aws-cdk`    install CDK
 * `cdk init app --language=typescript`    init a new app using the typescript template
 * `npm install --save @aws-cdk/aws-ec2 @aws-cdk/aws-ecs @aws-cdk/aws-ecs-patterns`    install+save additional dependencies

## CDK Usage Commands
 * `cdk diff`    show the differences between your current state and deployed stack
 * `cdk synth > file.yaml`    synthesize the resulting CloudFormation template to a file
 * `cdk deploy`    deploy your stack
 * `cdk destroy`    destroy your stack