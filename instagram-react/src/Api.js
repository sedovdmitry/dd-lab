import dotenv from 'dotenv';
import request from 'superagent';

dotenv.config();

export default class Api {
    constructor() {
        this.baseURL = 'https://api.instagram.com/v1';
        this.token = process.env.REACT_APP_INSTAGRAM_API || 'empty_token';
    }

    fetchUser() {
        console.log(`${this.baseURL}/users/self/`)
        return request
            .get(`${this.baseURL}/users/self/`)
            .query({
                access_token: this.token
            });
    }

    fetchPhotos(max_id, count = 5) {
        return request
            .get(`${this.baseURL}/users/self/media/recent/`)
            .query(
                Object.assign(
                    {
                        access_token: this.token,
                        count,
                    },
                    max_id ? { max_id } : {}
                )
            );
    }
}

