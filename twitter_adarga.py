import tweepy
import tkinter as Tk
from tkinter import *


# NER with nlyk and spacy

from nltk.tag import pos_tag
from nltk.chunk import ne_chunk
import spacy
from nltk.chunk import conlltags2tree, tree2conlltags
from pprint import pprint
from spacy import displacy
from collections import Counter
import en_core_web_sm
from bs4 import BeautifulSoup
import requests
nlp = en_core_web_sm.load()

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


def fetch_friends():
    friends = []
    for friend in tweepy.Cursor(api.friends).items():
        friends.append(friend.name)
    return(friends)

def fetch_followers():
    followers = []
    for follower in tweepy.Cursor(api.followers).items():
        followers.append(follower.name)
    return(followers)


def search(query):
    tweet_list = [];
    for tweet in api.search(q=query, lang="en", rpp=10):
      tweet_list.append(f"{tweet.user.name}:{tweet.text}")

    return(tweet_list)

def adarga_ner(query):
    tweet_list = [];
    for tweet in api.search(q=query, lang="en", rpp=10):
      tweet_list.append(f"{tweet.text}")

    html = []

    # return tweets with spacy NER
    for tweet in tweet_list:
        ny_bb = tweet
        tweet = nlp(ny_bb)
        len(tweet.ents)

        labels = [x.label_ for x in tweet.ents]
        Counter(labels)

        items = [x.text for x in tweet.ents]
        Counter(items).most_common(3)

        sentences = [x for x in tweet.sents]
        print(sentences, '--------SENTENCES----')

        print(sentences, '#####SENTENCES####')
        print(len(sentences), '#####LENGTH####')

        [(x.orth_,x.pos_, x.lemma_) for x in [y 
                                            for y
                                            in nlp(str(sentences[0])) 
                                            if not y.is_stop and y.pos_ != 'PUNCT']]

        dict([(str(x), x.label_) for x in nlp(str(sentences[0])).ents])

        print('From here the magic happens')
        print([(x, x.ent_iob_, x.ent_type_) for x in sentences[0]])

        html.append(displacy.render(tweet, page=True, style='ent'))

        print(html)
    return html

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