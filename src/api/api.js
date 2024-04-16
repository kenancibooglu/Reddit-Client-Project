export const fetchRedditHome = async () => {
    const response = await fetch('https://www.reddit.com/r/home.json');
    const data = await response.json();
    return data;
  };
  
  fetchRedditHome().then(data => {
    console.log(data);
  });

  export const fetchRedditPopular = async () => {
    const response = await fetch('https://www.reddit.com/r/popular.json');
    const data = await response.json();
    return data;
  };

  fetchRedditPopular().then(data => {
    console.log(data);
  });


  export const fetchRedditGamingValheim = async () => {
    const response = await fetch('https://www.reddit.com/r/valheim.json');
    const data = await response.json();
    return data;
  };

  fetchRedditGamingValheim().then(data => {
    console.log(data);
  });

  export const fetchRedditGamingGenshin = async() => {
    const response = await fetch("https://www.reddit.com/r/genshin_impact.json");
    const data = await response.json();
    return data
  }

  fetchRedditGamingGenshin().then(data => {
    console.log(data);
  });

  export const fetchRedditGamingMineCraft = async() => {
    const response = await fetch("https://www.reddit.com/r/minecraft.json")
    const data = await response.json();
    return data
  }

  fetchRedditGamingMineCraft().then(data => {
    console.log(data);
  })


  