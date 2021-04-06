// import dotenv from 'dotenv'
const dotenv = require('dotenv')
dotenv.config()
const { createLogger, Logger, transports, format } = require('winston')
const { combine, timestamp, colorize, json, simple } = format

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: combine(timestamp(), json(), colorize()),
  transports: [new transports.Console({ format: simple() })],
})

module.exports = logger
