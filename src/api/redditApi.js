
export const API_ROOT = 'https://www.reddit.com';

// get top subreddits for side bar
export const getTopSubreddits = async () => {
    const response = await fetch(`${API_ROOT}/subreddits.json`);
    const json = await response.json();
    return json.data.children.map((subreddit) => subreddit.data);
}

// get posts for selected subreddit
export const getPosts = async (selectedSubreddit) =>{
    const response = await fetch(`${API_ROOT}/r/${selectedSubreddit}/.json`);
    const json = await response.json();
    return  json.data.childern.map(post => post.data)
}
