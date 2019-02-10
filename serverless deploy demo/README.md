# AWS Devops
Deploy lambda function with required modules.

Hope you will configure and install the serverless requirements according to your system or you can check here:
    https://serverless.com/framework/docs/providers/aws/guide/quick-start/


So, here we are going to deploy simple two lambda functions in aws, 
where will we learn how to zip lambda with required module only,
first lambda functon is simple "HELLO World program" and second one is a functon with "requests" module in(requirements.txt) file.  

Install serverless plugin with command:
    npm serverless-python-requirements


ADD this plugin to your serverless file
    plugins:
      - serverless-python-requirements

And we need to add seprate requirement.txt file in demo folder where required module is added to it.
   - serverless.yml
   - package-lock.json
   - hello.py
   - README.md
   - demo
     - demo.py
     - requirements.txt


For making seprate module:

- functions:
   - demo:
   - handler: demo.lambda_handler   
   - module: demo          


Deploy:
    sls deploy or serverless deploy.
