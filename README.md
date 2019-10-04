
The application should allow for search of tweet by:
  - Text
  - Hashtags
  - User Location


- A status is a tweet .
- A friendship is a follow-follower relationship.
- A favorite is a like.


- These methods deal with reading tweets, mentions, and retweets from your timeline or any other user’s timeline, as long as it’s public.

timeline = api.home_timeline()
for tweet in timeline:
    print(f"{tweet.user.name} said {tweet.text}")


- Tweet something
api.update_status("Test tweet from Tweepy Python")

- Create friendship
api.create_friendship("realpython")

- Like tweets
tweets = api.home_timeline(count=1)
tweet = tweets[0]
print(f"Liking tweet {tweet.id} of {tweet.author.name}")
api.create_favorite(tweet.id)

- Searches
for tweet in api.search(q="Python", lang="en", rpp=10):
    print(f"{tweet.user.name}:{tweet.text}")

- Trends
trends_place() get list of trends for any place
trends_result = api.trends_place(1)
for trend in trends_result[0]["trends"]:
    print(trend["name"])

  
- Streaming: get tweets that match certain criteria real time

import json
import tweepy

class MyStreamListener(tweepy.StreamListener):
    def __init__(self, api):
        self.api = api
        self.me = api.me()

    def on_status(self, tweet):
        print(f"{tweet.user.name}:{tweet.text}")

    def on_error(self, status):
        print("Error detected")

# Authenticate to Twitter
auth = tweepy.OAuthHandler("CONSUMER_KEY", "CONSUMER_SECRET")
auth.set_access_token("ACCESS_TOKEN", "ACCESS_TOKEN_SECRET")

# Create API object
api = tweepy.API(auth, wait_on_rate_limit=True,
    wait_on_rate_limit_notify=True)

tweets_listener = MyStreamListener(api)
stream = tweepy.Stream(api.auth, tweets_listener)
stream.filter(track=["Python", "Django", "Tweepy"], languages=["en"])
