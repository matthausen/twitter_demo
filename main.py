import os
from flask import Flask, render_template
from flask import jsonify,request,make_response,url_for,redirect
from json import dumps
from requests import post, get

app = Flask(__name__, static_folder="frontend/build/static", template_folder="frontend/build")

url =  'http://127.0.0.1:5000/';


@app.route("/", methods=['GET','POST'])
def hello():
  if request.method == 'POST':
    print('POST request: ', request.get_json())
    result = request.get_json()
    print(jsonify(result), 'is what I am sending to the FE' )
    return jsonify(result)
  return render_template('index.html')


if __name__ == '__main__':
    app.run(use_reloader=True, port=5000, threaded=True)