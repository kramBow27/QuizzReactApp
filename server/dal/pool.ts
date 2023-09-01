
import { startDatabaseServer } from "../databaseServer/databasServer";
import { startJsonServer } from "../jsonServer/jsonServer";

const express = require('express');


require('dotenv').config();
const fs = require('fs');

const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:4000', 
  optionsSuccessStatus: 204
}


const jwt  = require('jsonwebtoken');
const { QueryResult } = require('pg');

const app = express();
app.use(cors());
app.use(cors(corsOptions));
app.use(express.json());
const database: boolean = true;

if (database) {
  startDatabaseServer(app)
}
else {
  startJsonServer(app);

}