from flask_restful import Api, Resource, reqparse
from flask import Flask, jsonify, request
import sys
import logging

logging.basicConfig(level=logging.DEBUG)
class HelloApiHandler(Resource):
  def get(self):
    return {
      'resultStatus': 'SUCCESS',
      'message': "Hello Api Handler"
      }
  
  def post(self):
    print('This is error output', file=sys.stderr)
    sys.stdout.flush()
    print('This is standard output', file=sys.stdout)
    sys.stdout.flush()
    print("test",flush=True)
    sys.stdout.flush()
    json_data = request.get_json(force=True)
    print(json_data)
    sys.stdout.flush()
    un = json_data["username"]
    print(json_data)
    sys.stdout.flush()

    index = request.get_json()
    print(index)

    #note, the post req from frontend needs to match the strings here (e.g. 'type and 'message')

    # process request_type and request_json here
    # currently just returning directly for demo purposes
    ret_status = un
  

    if ret_status:
      message = "Your Message Requested: {}".format(ret_status)
    else:
      message = "No Msg"
    
    final_ret = {"resultStatus": "Success", "message": message}

    return final_ret

  