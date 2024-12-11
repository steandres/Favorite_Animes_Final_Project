import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
//import { profileImg } from '../Components/utils/imagesImport.js'

const Detail = () => {
 
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({})

  const navigate = useNavigate();


  useEffect(()=>{
    setLoading(true);
    const fetchtData = async () => {
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/seasons/2022/summer?sfw${id}`);
        setCharacter(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        navigate("/error");
      }
    }
    fetchtData();
  },[id]);

  return (
    <>
      {!loading ? (
        <div className="details">
          <div className="detailsContainer">
            <img src={character.images.jpg.image_url} alt={character.title} />
            <div>
              <h3>{character.title}</h3>
            </div>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )} 
      
    </>
  )
}

export default Detail