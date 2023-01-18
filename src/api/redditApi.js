
export const API_ROOT = 'https://www.reddit.com';

// get top subreddits for side bar
export const getTopSubreddits = async () => {
    const response = await fetch(`${API_ROOT}/subreddits.json`);
    const json = await response.json();
    return json.data.children.map(subreddit => subreddit.data);
}

// get posts for selected subreddit
export const getPosts = async (selectedSubreddit) => {
    const response = await fetch(`${API_ROOT}/r/${selectedSubreddit}/.json`);
    const json = await response.json();
    return json.data.children.map(post => post.data)
    
}

// get comments for clicked post
export const getComments = async (permalink) => {
    const response = await fetch(`${API_ROOT}${permalink}.json`);
    const json = await response.json();
    return json[1].data.children.map(comment => comment.data)
    
}


