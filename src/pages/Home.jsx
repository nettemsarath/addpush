import React, {useState} from 'react';
import axios from 'axios';
import { useQuery } from 'react-query'
import "./home.css"

const Campaign = ({name, campaignURL, imageURL})=>{
  const TextToCopy = `<a href=${campaignURL} target="_blank"><img src=${imageURL} alt="Add campaign"></a>`;
    return(
        <div className='card' >
            <h3> {name} </h3>
            <div> Name </div>
            <div> {campaignURL} </div>
            <div> {imageURL} </div>
            <button onClick={() => {navigator.clipboard.writeText(TextToCopy)}}>Copy Code</button>
        </div>
    )
};

const DUMMYCAMPAIGNDATA = [
  {
    name: "AddPushup",
    campaignURL:"https://www.hackerearth.com/www.hackerearth.com/",
    imageURL: "https://www.hackerearth.com/.hackerearth.com/"
  },
  {
    name: "AddPushup",
    campaignURL:"https://www.hackerearth.com/www.hackerearth.com/",
    imageURL: "https://www.hackerearth.com/.hackerearth.com/"
  },
  {
    name: "AddPushup",
    campaignURL:"https://www.hackerearth.com/www.hackerearth.com/",
    imageURL: "https://www.hackerearth.com/.hackerearth.com/"
  },
  {
    name: "AddPushup",
    campaignURL:"https://www.hackerearth.com/www.hackerearth.com/",
    imageURL: "https://www.hackerearth.com/.hackerearth.com/"
  },
  {
    name: "AddPushup",
    campaignURL:"https://www.hackerearth.com/www.hackerearth.com/",
    imageURL: "https://www.hackerearth.com/.hackerearth.com/"
  },
];

function Home() {
  const [allCampaigns, setAllCampaigns] = useState([]);
    const { isLoading, error, data } = useQuery('campaigndata', () =>
      axios.get('https://reqres.in/api/users').then(res =>{
        setAllCampaigns(DUMMYCAMPAIGNDATA);
      })
    );

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    console.log("data data data", data)
    return (
      <div className='home'>
        {
          allCampaigns.map(data=> <Campaign name={data.name} campaignURL={data.campaignURL} imageURL={data.imageURL} /> )
        }
      </div>
    )
}

export default Home