import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface posts {
  id: number;
  img: any;
  price: number;
  p: string
}

const App: React.FC = () => {
  const [postData1, setPostData1] = useState<posts | null>(null);
  const [postData2, setPostData2] = useState<posts | null>(null);
  const [postData3, setPostData3] = useState<posts | null>(null);
  const [postData4, setPostData4] = useState<posts | null>(null);
  const [postData5, setPostData5] = useState<posts | null>(null);

  useEffect(() => {
    const fetchData = async (postId: number, setPostData: React.Dispatch<React.SetStateAction<posts | null>>) => {
      try {
        const response = await axios.get(`http://localhost:3000/posts/${postId}`);
        setPostData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(1, setPostData1);
    fetchData(2, setPostData2);
    fetchData(3, setPostData3);
    fetchData(4, setPostData4);
    fetchData(5, setPostData5);
  }, []);

  return (
    <div className='text-center bpace-x-4 '>

      <div>
  <span key={1}>
          {postData1 ? (
            <>
              <img className='' src={postData1.img}/> 
              

            </>
          ) : (
            <p></p>
          )}
        </span>

      </div>

      <ul className='flex'>
        <li key={2}>
          {postData2 ? (
            <>
              <img src={postData2.img}/> 
              <p>{postData2.price}</p>
              <p>{postData2.p}</p>
            </>
          ) : (
            <p></p>
          )}
        </li>
        <li key={3}>
          {postData3 ? (
            <>
              <img src={postData3.img}/> 
              <p>{postData3.price}</p>
              <p>{postData3.p}</p>
            </>
          ) : (
            <p></p>
          )}
        </li>
        <li key={4}>
          {postData4 ? (
            <>
              <img src={postData4.img}/> 
              <p>{postData4.price}</p>
              <p>{postData4.p}</p>
            </>
          ) : (
            <p></p>
          )}
        </li>

        <li key={5}>
          {postData5 ? (
            <>
              <img className='' src={postData5.img}/> 
              <p>{postData5.price}</p>
              <p>{postData5.p}</p>
              

            </>
          ) : (
            <p></p>
          )}
        </li>

      </ul>
    </div>
  );
};

export default App;
