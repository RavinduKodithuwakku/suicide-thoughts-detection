from flask_restful import Api, Resource, reqparse
from flask import Flask, jsonify, request

class HelloApiHandler(Resource):
  def get(self):
    return {
      'resultStatus': 'SUCCESS',
      'message': "Hello Api Handler"
      }
  
  def post(self):
    json_data = request.get_json(force=True)
    print(json_data)
    un = json_data['message']
    print(json_data)

    #note, the post req from frontend needs to match the strings here (e.g. 'type and 'message')

    # process request_type and request_json here
    # currently just returning directly for demo purposes
    ret_status = un
  
    

    if ret_msg:
      message = "Your Message Requested: {}".format(ret_msg)
    else:
      message = "No Msg"
    
    final_ret = {"resultStatus": "Success", "message": message}

    return final_ret

  