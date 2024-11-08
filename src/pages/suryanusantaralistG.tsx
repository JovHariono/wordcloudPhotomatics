import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Paragon } from '../type';
import move from './components/mover/RandomObjectMover';

interface IParagonListProps {
}

const ParagonList: React.FunctionComponent<IParagonListProps> = (props) => {
  const [data, setData] = useState<Paragon[]>([]);
  const [isLoaded, setIsLoaded] = useState(Boolean);

  useEffect(() => {
    if (!isLoaded) {
      axios
        .get(`https://suryanation.online/api/data1?_sort=id&_order=desc&_limit=30`)
        .then((res) => {
          setData(res.data);
          setIsLoaded(true);
        })
        .catch((err) => console.log(err));
      setInterval(() => {
        axios
          .get(`https://suryanation.online/api/data1?_sort=id&_order=desc&_limit=30`)
          .then((res) => {
            setData(res.data);
          })
          .catch((err) => console.log(err))
      }, 5000);
    }
  }, []);

  useEffect(() => {
    data.forEach(function (value, i) {
      move(`kata${i}`);
    })
  }, [data]);

  return (
    <>
      <script type="text/javascript" src="src/pages/components/mover/RandomObjectMover.js"></script>
      <div className='scroll-list-led'>
        <div className="scroll" id='scroll'>
          {data.map((x, idx) => (
            <div>
              <p className='kata-g' id={`kata${idx}`}>{x.kata}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ParagonList;