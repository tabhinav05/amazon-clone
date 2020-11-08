const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const { response } = require('express');
const stripe = require("stripe")('sk_test_51HZ47YCevvooPVXjYgxANbmBwH9PpdYCYsitaiJio1MtBcaNsqQUf6LlGA6kCfoEsTDLXLkw7vHVSrjen8MMUlXD00ssKLyx6K')

// API

// API -App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => res.status(200).send('hello world'))

app.get('/abhi', (request, response) => res.status(200).send('Whats up abhi!'))

// -Listen cokmand
exports.api = functions.https.onRequest(app)