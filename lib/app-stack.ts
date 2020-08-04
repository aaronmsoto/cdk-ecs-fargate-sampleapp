import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as ecs from '@aws-cdk/aws-ecs';
import * as ecs_patterns from '@aws-cdk/aws-ecs-patterns';

export class AppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const appName = this.node.tryGetContext('app_name');
    const appImg  = this.node.tryGetContext('app_img');
    if(appName && appImg) {
      const vpc = new ec2.Vpc(this, appName + '-vpc', {maxAzs:3});
      const cluster = new ecs.Cluster(this, appName + '-cluster', {vpc:vpc});
      const fargateService = new ecs_patterns.ApplicationLoadBalancedFargateService(this, appName + '-service', {
        cluster: cluster,
        serviceName: 'MyService',
        taskImageOptions: { image: ecs.ContainerImage.fromRegistry(appImg) },
        listenerPort:80,
        desiredCount:3,
        publicLoadBalancer:true
      });
    }
  }
}