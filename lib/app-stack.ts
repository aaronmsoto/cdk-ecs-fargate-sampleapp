import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as ecs from '@aws-cdk/aws-ecs';
import * as ecs_patterns from '@aws-cdk/aws-ecs-patterns';

export class AppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'MyAppVpc', {maxAzs:2});
    const cluster = new ecs.Cluster(this, 'MyAppEcsCluster', {vpc:vpc});
    const fargateService = new ecs_patterns.ApplicationLoadBalancedFargateService(this, 'MyAppFargateService', {
      cluster: cluster,
      serviceName: 'MyService',
      taskImageOptions: { image: ecs.ContainerImage.fromRegistry("amazon/amazon-ecs-sample") },
      listenerPort:80,
      desiredCount:2,
      publicLoadBalancer:true
    });
  }
}
