# Devops
This is a simple hello world node js lambda. Which we are going to deploy in aws using sam template via sam CLI(test.yaml).
Prerequist :
   1: Lambda function with lambda handler.
   2: Yaml template for lambda. 
   3: AWS ACCOUNT : If not create here - https://aws.amazon.com/console/
   

Steps for Deploy lambda in aws(using sam cli).
    1: Login to aws.
    2: Write sam template -  https://github.com/Imdharm/Devops/blob/master/first%20aws%20lambda%20with%20sam%20deployment/test.yaml

    3: Open working repo. in terminal 
    4: Run the following commands-  aws cloudformation package --template-file template.yaml --output-template-file template-out.yaml --s3-bucket <your-s3-bucket-name>
    
    5: aws cloudformation deploy --template-file <path-to-file/template-out.yaml --stack-name <STACK_NAME> --capabilities CAPABILITY_IAM
    6: Check your Service AWS cloudformation and your lambda. That's it! Bingo. 
