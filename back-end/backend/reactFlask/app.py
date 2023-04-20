from flask import Flask
import logging
import pymongo
import ssl
import certifi
from pymongo import MongoClient,uri_parser
from flask_cors import CORS #comment this on deployment
from flask import Flask, jsonify, request
from flask_pymongo import PyMongo



app = Flask(__name__)


# app.config['MONGO_URI'] = 'mongodb+srv://testDB:DrJHRPQGjl8ZhOkZ@cluster0.7pdellm.mongodb.net/?retryWrites=true&w=majority' 
# mongo = PyMongo(app,tlsCAFile=certifi.where())
# collection_name = mongo.db.myCollection

# cluster = MongoClient("mongodb+srv://testDB:DrJHRPQGjl8ZhOkZ@cluster0.7pdellm.mongodb.net/myDatabase?retryWrites=true&w=majority",ssl=True,
#     ssl_cert_reqs="CERT_REQUIRED")
client = pymongo.MongoClient("mongodb+srv://testDB:DrJHRPQGjl8ZhOkZ@cluster0.7pdellm.mongodb.net/myDatabase?retryWrites=true&w=majority", ssl_cert_reqs=ssl.CERT_NONE)

# app.config["MONGO_URI"]  = pymongo.MongoClient("mongodb+srv://testDB:DrJHRPQGjl8ZhOkZ@cluster0.7pdellm.mongodb.net/mydatabase?retryWrites=true&w=majority", ssl_cert_reqs=ssl.CERT_NONE)
app.config["MONGO_URI"] = "mongodb+srv://testDB:DrJHRPQGjl8ZhOkZ@cluster0.7pdellm.mongodb.net/myDatabase?retryWrites=true&w=majority"
# app.config["MONGO_URI"] = "mongodb://localhost:27017/myDatabase"
# mongo = PyMongo(app)

db = client["myCollection"]
collection = db["myCollection"]

logging.basicConfig(level=logging.DEBUG)

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