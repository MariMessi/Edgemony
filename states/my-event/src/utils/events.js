import { eventsJson } from "@/pages/api/events";

export function getAllPosts() {
    return eventsJson[0];
}

export function getAllSlugs() {
    let slugs = [];
    getAllPosts().map((p) => {
        slugs.push(`/event/${p.slug}`);
    });

    return slugs;
}

export function getPostData(slug) {
    let post = null;
    getAllPosts().map((p) => {
        if(p.slug === slug){
            post = p;
            return;
        }
    });
    return post;
}