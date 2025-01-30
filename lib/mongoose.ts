"use server"

import { log } from 'console';
import moongose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    moongose.set('strictQuery', true);

    if(!process.env.MONGODB_URI) return log('MONGODB_URI is not defined');

    if(isConnected) return log('=> using existing database connection');

    try {
        await moongose.connect(process.env.MONGODB_URI);
        isConnected = true;
        log('MongoDB Connected');
    } catch (error) {
        log(error);
    }
}