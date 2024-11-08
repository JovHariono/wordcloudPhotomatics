import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Paragon } from '../type';

interface IParagonListProps {
}

const add = (value: any, idx: Number, isFirst: Boolean) => {
  var parent = document.getElementById('scroll-container');
  var newItem = document.createElement('div');
  newItem.className = 'container-kata';
  newItem.id = `container-${idx}`;
  var p = document.createElement('p');
  p.className = 'kata newItem';
  p.innerHTML = value;
  newItem.appendChild(p);
  var listItems = document.getElementsByClassName("container-kata");
  if (isFirst) {
    parent?.appendChild(newItem);
  } else {
    parent?.insertBefore(newItem, listItems[0]);
  }
  if (listItems.length > 15) {
    parent?.removeChild(listItems[listItems.length - 1]);
  }
}

const add2 = (value: any, idx: Number, isFirst: Boolean) => {
  var parent = document.getElementById('scroll-container2');
  var newItem = document.createElement('div');
  newItem.className = 'container-kata2';
  newItem.id = `container2-${idx}`;
  var p = document.createElement('p');
  p.className = 'kata2 newItem';
  p.innerHTML = value;
  newItem.appendChild(p);
  var listItems = document.getElementsByClassName("container-kata2");
  if (isFirst) {
    parent?.appendChild(newItem);
  } else {
    parent?.insertBefore(newItem, listItems[0]);
  }
  if (listItems.length > 15) {
    parent?.removeChild(listItems[listItems.length - 1]);
  }
}

const ParagonList: React.FunctionComponent<IParagonListProps> = (props) => {
  const [data, setData] = useState<Paragon[]>([]);
  const [data2, setData2] = useState<Paragon[]>([]);
  const [isLoaded, setIsLoaded] = useState(Boolean);

  useEffect(() => {
    if (!isLoaded) {
      axios
        .get(`https://suryanation.online/api/data1?_sort=id&_order=desc&_limit=12`)
        .then((res) => {
          var newData = data;
          res.data.forEach((d: any) => {
            if (!newData.some(e => e.id === d.id)) {
              newData.push({
                id: d.id,
                kata: d.kata
              });
              add(d.kata, d.id, true);
            }
          });
          setData(newData);
        })
        .catch((err) => console.log(err));
      axios
        .get(`https://suryanation.online/api/data2?_sort=id&_order=desc&_limit=12`)
        .then((res) => {
          var newData = data2;
          res.data.forEach((d: any) => {
            if (!newData.some(e => e.id === d.id)) {
              newData.push({
                id: d.id,
                kata: d.kata
              });
              add2(d.kata, d.id, true);
            }
          });
          setData2(newData);
        })
        .catch((err) => console.log(err));
      setIsLoaded(true);
      setInterval(() => {
        axios
          .get(`https://suryanation.online/api/data1?_sort=id&_order=desc&_limit=12`)
          .then((res) => {
            var newData = data;
            res.data.forEach((d: any) => {
              if (!newData.some(e => e.id === d.id)) {
                newData.push({
                  id: d.id,
                  kata: d.kata
                });
                add(d.kata, d.id, false);
              }
            });
            setData(newData);
          })
          .catch((err) => console.log(err));
        axios
          .get(`https://suryanation.online/api/data2?_sort=id&_order=desc&_limit=12`)
          .then((res) => {
            var newData = data2;
            res.data.forEach((d: any) => {
              if (!newData.some(e => e.id === d.id)) {
                newData.push({
                  id: d.id,
                  kata: d.kata
                });
                add2(d.kata, d.id, false);
              }
            });
            setData2(newData);
          })
          .catch((err) => console.log(err));
      }, 5000);
    }
  }, []);

  return (
    <>
      <script type="text/javascript" src="src/pages/components/mover/RandomObjectMover.js"></script>
      <div className='scroll-list'>
        <div className='scroll-container' id="scroll-container">
        </div>
        <div className='scroll-container' id="scroll-container2">
          <div className="scroll2">
          </div>
        </div>
      </div>
    </>
  );
};

export default ParagonList;