import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import NewsList from './NewsList';
import './app.css';

/*
function get(url) {
    return Promise.resolve($.ajax(url));
}
get('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(function (stories) {
        return Promise.all(stories.slice(0, 30).map(itemId => get('https://hacker-news.firebaseio.com/v0/item/' + itemId + '.json')));
    }).then(function (items) {
        render(<NewsList items={items} />, $('#content')[0]);
    }).catch(function (err) {
        console.log('error occur', err);
    });
*/

const items = [
    {
        "by" : "dhouston",
        "descendants" : 71,
        "id" : 8863,
        "kids" : [ 8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876 ],
        "score" : 111,
        "time" : 1175714200,
        "title" : "My YC app: Dropbox - Throw away your USB drive",
        "type" : "story",
        "url" : "http://www.getdropbox.com/u/2/screencast.html"
    },
    {
        "by" : "norvig",
        "id" : 2921983,
        "kids" : [ 2922097, 2922429, 2924562, 2922709, 2922573, 2922140, 2922141 ],
        "parent" : 2921506,
        "text" : "Aw shucks, guys ... you make me blush with your compliments.<p>Tell you what, Ill make a deal: I'll keep writing if you keep reading. K?",
        "time" : 1314211127,
        "type" : "comment"
    },
    {
        "by" : "tel",
        "descendants" : 16,
        "id" : 121003,
        "kids" : [ 121016, 121109, 121168 ],
        "score" : 25,
        "text" : "<i>or</i> HN: the Next Iteration<p>I get the impression that with Arc being released a lot of people who never had time for HN before are suddenly dropping in more often. (PG: what are the numbers on this? I'm envisioning a spike.)<p>Not to say that isn't great, but I'm wary of Diggification. Between links comparing programming to sex and a flurry of gratuitous, ostentatious  adjectives in the headlines it's a bit concerning.<p>80% of the stuff that makes the front page is still pretty awesome, but what's in place to keep the signal/noise ratio high? Does the HN model still work as the community scales? What's in store for (++ HN)?",
        "time" : 1203647620,
        "title" : "Ask HN: The Arc Effect",
        "type" : "story",
        "url" : ""
    },
    {
        "by" : "pg",
        "descendants" : 54,
        "id" : 126809,
        "kids" : [ 126822, 126823, 126993, 126824, 126934, 127411, 126888, 127681, 126818, 126816, 126854, 127095, 126861, 127313, 127299, 126859, 126852, 126882, 126832, 127072, 127217, 126889, 127535, 126917, 126875 ],
        "parts" : [ 126810, 126811, 126812 ],
        "score" : 46,
        "text" : "",
        "time" : 1204403652,
        "title" : "Poll: What would happen if News.YC had explicit support for polls?",
        "type" : "poll"
    }
];
render(<NewsList items={items} />, $('#content')[0]);
