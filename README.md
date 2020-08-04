# CDK : ALB-fronted ECS Fargate Sample App

This example CDK app stack deploys an ALB-fronted ECS Fargate app using the amazon/amazon-ecs-sample Docker Hub image.

## Initial CDK Setup Commands

 * `mkdir app && cd app`    make a new directory and cd into it
 * `npm install -g aws-cdk`    install CDK
 * `cdk init app --language=typescript`    init a new app using the typescript template
 * `npm install --save @aws-cdk/aws-ec2 @aws-cdk/aws-ecs @aws-cdk/aws-ecs-patterns`    install+save additional dependencies

## CDK Usage Commands
 * `cdk diff`    show the differences between your current code state and deployed stack
 * `cdk synth > file.yaml`    synthesize the resulting CloudFormation template to a file
 * `cdk deploy`    deploy your stack
 * `cdk destroy`    destroy your stack