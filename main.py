import os
from flask import Flask, render_template
from flask import jsonify,request,make_response,url_for,redirect
import json
from json import dumps
from requests import post, get
import twitter_adarga


app = Flask(__name__, static_folder="frontend/build/static", template_folder="frontend/build")

url =  'http://127.0.0.1:5000/';


@app.route("/", methods=['GET','POST'])
def hello():
  if request.method == 'POST':
    print('POST request: ', request.get_json())
    tweet = request.get_json()
    tweetStr = json.dumps(tweet)
    data = json.loads(tweetStr)
    query = data['tweet']

    response = twitter_adarga.search(query)

    return jsonify(response)
  return render_template('index.html')


if __name__ == '__main__':
    app.run(use_reloader=True, port=5000, threaded=True)