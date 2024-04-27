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

  export const fetchRedditGamingPokimane = async() => {
    const response = await fetch("https://www.reddit.com/r/pokimane.json")
    const data = await response.json();
    return data
  }

  fetchRedditGamingPokimane().then(data => {
    console.log(data);
  })


  export const fetchRedditGamingCallofDuty = async() => {
    const response = await fetch("https://www.reddit.com/r/halo_infinite.json")
    const data = await response.json();
    return data
  }

  fetchRedditGamingCallofDuty().then(data => {
    console.log(data);
  })


  export const fetchRedditSportsNFL = async() => {
    const response = await fetch("https://www.reddit.com/r/nfl.json")
    const data = await response.json();
    return data
  }

  fetchRedditSportsNFL().then(data => {
    console.log(data);
  })

  export const fetchRedditSportsNBA = async() => {
    const response = await fetch("https://www.reddit.com/r/nba.json")
    const data = await response.json();
    return data
  }

  fetchRedditSportsNBA().then(data => {
    console.log(data);
  })

  export const fetchRedditSportsMegan = async() => {
    const response = await fetch("https://www.reddit.com/r/megantheestallion.json")
    const data = await response.json();
    return data
  }

  fetchRedditSportsMegan().then(data => {
    console.log(data);
  })

  export const fetchRedditSportsAtalanta = async() => {
    const response = await fetch("https://www.reddit.com/r/Atalanta.json")
    const data = await response.json();
    return data
  }

  fetchRedditSportsAtalanta().then(data => {
    console.log(data);
  })


  export const fetchRedditSportsPremier = async() => {
    const response = await fetch("https://www.reddit.com/r/premier_league.json")
    const data = await response.json();
    return data
  }

  fetchRedditSportsPremier().then(data => {
    console.log(data);
  })

  export const fetchRedditCsGo = async() => {
    const response = await fetch("https://www.reddit.com/r/csgo.json")
    const data = await response.json();
    return data
  }

  fetchRedditCsGo().then(data => {
    console.log(data);
  })

  export const fetchRedditBusinessTesla = async() => {
    const response = await fetch("https://www.reddit.com/r/tesla.json")
    const data = await response.json();
    return data
  }

  fetchRedditBusinessTesla().then(data => {
    console.log(data);
  })


  export const fetchRedditBusinessSpaceX = async() => {
    const response = await fetch("https://www.reddit.com/r/spacex.json")
    const data = await response.json();
    return data
  }

  fetchRedditBusinessSpaceX().then(data => {
    console.log(data);
  })

  export const fetchRedditBusinessPfizer= async() => {
    const response = await fetch("https://www.reddit.com/r/pfizer.json")
    const data = await response.json();
    return data
  }

  fetchRedditBusinessPfizer().then(data => {
    console.log(data);
  })

  export const fetchRedditBusinessNovavax= async() => {
    const response = await fetch("https://www.reddit.com/r/novavax.json")
    const data = await response.json();
    return data
  }

  fetchRedditBusinessNovavax().then(data => {
    console.log(data);
  })


  export const fetchRedditBusinessModerna= async() => {
    const response = await fetch("https://www.reddit.com/r/gamestop.json")
    const data = await response.json();
    return data;
  }

  fetchRedditBusinessModerna().then(data => {
    console.log(data);
  })



  