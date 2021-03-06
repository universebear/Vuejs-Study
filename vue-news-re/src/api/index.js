import axios from 'axios';

const config = {
  baseUrl: 'https://api.hnpwa.com/v0',
};

export const fetchNewsList = () => {
  return axios.get(`${config.baseUrl}/news/1.json?print=pretty`);
};

export const fetchJobsList = () => {
  return axios.get(`${config.baseUrl}/jobs/1.json?print=pretty`);
};

export const fetchAskList = () => {
  return axios.get(`${config.baseUrl}/ask/1.json?print=pretty`);
};

export const fetchUserInfo = id => {
  return axios.get(`${config.baseUrl}/user/${id}.json`);
};

export const fetchItem = id => {
  return axios.get(`${config.baseUrl}/item/${id}.json`);
};
