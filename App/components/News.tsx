//const url = "https://newsapi.org/v2/top-headlines?country=au&apiKey=f7a354b9b7194046ba497c4473d23f2a";
const url = "https://newsapi.org/v2/top-headlines?category=sports&q=arsenal&pageSize=30&country=gb&apiKey=f7a354b9b7194046ba497c4473d23f2a"
export async function getNews(){
    let result = await fetch(url).then(response => response.json());
    return result.articles;
}