import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain:"koyo-blog",
    apiKey: process.env.API_KEY,
});