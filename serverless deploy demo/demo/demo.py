
import boto3
import requests
import json


def lambda_handler(event, context):
    url = "https//:codeops.tech"
    response = requests.get(url).json()
    return response
 