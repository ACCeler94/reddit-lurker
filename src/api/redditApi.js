
export const API_ROOT = 'https://www.reddit.com';

// get top subreddits for side bar
export const getTopSubreddits = async () => {
    const response = await fetch(`${API_ROOT}/subreddits.json`);
    const json = await response.json();
    return json.data.children.map(subreddit => subreddit.data);
}

// get posts for selected subreddit
export const getPosts = async (selectedSubreddit) => {
    const response = await fetch(`${API_ROOT}/r/${selectedSubreddit}/.json?limit=30`);
    const json = await response.json();
    return json.data.children.map(post => post.data)
    
}

// get more posts for selected subreddit
export const getMorePosts = async (selectedSubreddit, lastPostId) => {
    const response = await fetch(`${API_ROOT}/r/${selectedSubreddit}/.json?limit=30&after=${lastPostId}`);
    const json = await response.json();
    return json.data.children.map(post => post.data)
    
}

// get comments for clicked post
export const getComments = async (permalink) => {
    const response = await fetch(`${API_ROOT}${permalink}.json?limit=100`);
    const json = await response.json();
    return json[1].data.children.map(comment => comment)

}

// get search results based on input in the search bar
export const getResults = async (searchQuery) => {
    const response = await fetch(`${API_ROOT}/search.json?q=${searchQuery}&type=sr&include_over_18=1`);
    const json = await response.json();
    return json.data.children.map(subreddit => subreddit.data)
}

// get post data based on current location - when user refreshes or manually inputs post id into url
export const getPostData = async (currentLocation) =>{
        const response = await fetch(`${API_ROOT}${currentLocation}.json`);
        const json = await response.json();
        const postData =  await json[0].data.children[0].data
        return postData
}