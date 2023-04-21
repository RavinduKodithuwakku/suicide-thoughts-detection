from flask import Flask
import logging
import pymongo
from flask_cors import CORS
from pymongo import MongoClient,uri_parser
# from flask_cors import CORS #comment this on deployment
from flask import Flask, jsonify, request
from flask_pymongo import PyMongo


app = Flask(__name__)
CORS(app)

CORS(app, resources={r"/api/*": {"origins": ["http://example.com", "http://localhost:3000"]}})

client = pymongo.MongoClient("mongodb+srv://admin:admin@cluster0.coi5ykd.mongodb.net/test")

db = client["myDatabase"]
collection = db["myCollection"]


logging.basicConfig(level=logging.DEBUG)
from flask import Flask, request


@app.route('/flask/hello', methods=['DELETE'])
def delete_hello():
    collection.delete_many({})
    print("collection cleared")
    app.logger.info('Processing default request')
    return jsonify({'message': 'Data deleted successfully'})
   

@app.route('/flask/hello', methods = ['POST']  )
def hello_world():
    print("test")
    json_data = request.get_json(force=True)
    print(json_data)
    # mongo.db.myCollection.insert_one(json_data)
    collection.insert_one(json_data)
    print(json_data)
    app.logger.info('Processing default request')
    return jsonify({'message': 'Data added successfully'})
    


if __name__ == '__main__':
    app.run(debug=True)