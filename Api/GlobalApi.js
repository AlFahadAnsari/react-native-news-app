// showLastCommitMessageForThisLibrary.js
import { create } from 'apisauce'

// define the api
const api = create({
  baseURL: 'https://newsapi.org/v2'
})

const ApiKey="?country=us&apiKey=65cb947a99674ba8a5adc5dde79596f2"


const GetTopHeadLine=api.get("/top-headlines" + ApiKey)


export default{
    GetTopHeadLine
}