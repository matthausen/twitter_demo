import os
from flask import Flask, render_template
from flask import jsonify,request,make_response,url_for,redirect
import json
from json import dumps
from requests import post, get
import twitter_adarga
import adarga_sentiment


app = Flask(__name__, static_folder="frontend/build/static", template_folder="frontend/build")

url =  'http://127.0.0.1:5000/';


@app.route("/", methods=['GET','POST'])
def find():
  if request.method == 'GET':
    followers = twitter_adarga.fetch_followers()
    friends = twitter_adarga.fetch_friends()
    print(jsonify(followers))
    print(jsonify(friends))
    return (jsonify(followers), jsonify(friends))

  if request.method == 'POST':
    tweet = request.get_json()
    tweetStr = json.dumps(tweet)
    data = json.loads(tweetStr)
    query = data['tweet']

    response = twitter_adarga.search(query)
    sentiment = adarga_sentiment.twitter_sentiment(query)

    return (jsonify(response, sentiment))
  return render_template('index.html', followers=followers)


if __name__ == '__main__':
    app.run(use_reloader=True, port=5000, threaded=True)