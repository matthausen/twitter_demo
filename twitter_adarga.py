import tweepy
import tkinter as Tk
from tkinter import *

consumer_key = 'vsrFwIpc6z4S23wFLfZZY3yd2'
consumer_secret = 'vz7bb3kOuQK7YJpq6mxQqddH9qJ0mxpQobb4XVskR3eJSbfcQ9'
access_token = '229876182-b7jI9eGYSOuppPaBNrHESqlBPr4iXy9sEYV2nqLy'
access_token_secret = 'DH2TE1CVAsD1HN8xQcMSV6tY3YHqpch2yJTPlwjFaAcbO'

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth)

user = api.me()
print(user.name)
print(user.description)
print(user.location)

''' for follower in tweepy.Cursor(api.followers).items():
    follower.follow() '''

def call(): 
    print('Module imported')

def search(query):
    tweet_list = [];
    for tweet in api.search(q=query, lang="en", rpp=10):
      tweet_list.append(f"{tweet.user.name}:{tweet.text}")
    return(tweet_list)

'''

    if reply == "yes":
        for tweet in tweepy.Cursor(api.search, search).items(numberOfTweets):
            try:
                #Reply
                print('\nTweet by: @' + tweet.user.screen_name)
                print('ID: @' + str(tweet.user.id))
                tweetId = tweet.user.id
                username = tweet.user.screen_name
                api.update_status("@" + username + " " + phrase, in_reply_to_status_id = tweetId)
                print ("Replied with " + phrase)
                
            except tweepy.TweepError as e:
                print(e.reason)

            except StopIteration:
                break


    if retweet == "yes": 
        for tweet in tweepy.Cursor(api.search, search).items(numberOfTweets):
            try:
                #Retweet
                tweet.retweet()
                print('Retweeted the tweet')   

            except tweepy.TweepError as e:
                print(e.reason)

            except StopIteration:
                break

    if favorite == "yes": 
        for tweet in tweepy.Cursor(api.search, search).items(numberOfTweets):
            try:
                #Favorite
                tweet.favorite()
                print('Favorited the tweet')   

            except tweepy.TweepError as e:
                print(e.reason)

            except StopIteration:
                break

    if follow == "yes": 
        for tweet in tweepy.Cursor(api.search, search).items(numberOfTweets):
            try:
                #Follow
                tweet.user.follow()
                print('Followed the user')
                
            except tweepy.TweepError as e:
                print(e.reason)

            except StopIteration:
                break       
 '''