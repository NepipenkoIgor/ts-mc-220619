import axios, { AxiosInstance } from 'axios';

export const baseURL: string = 'http://learn.javascript.ru/courses/groups/api';
export const axiosInstance: AxiosInstance = axios.create({baseURL});
