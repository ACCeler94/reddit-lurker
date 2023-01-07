
export const API_ROOT = 'https://www.reddit.com';

// getting top subreddits for side bar

export const getTopSubreddits = async () => {
    const response = await fetch(`${API_ROOT}/subreddits.json`);
    const json = await response.json();
    return json.data.children.map((subreddit) => subreddit.data);
}


