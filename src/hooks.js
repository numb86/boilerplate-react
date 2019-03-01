import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handler = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener('resize', handler);
    return () => window.addEventListener(handler);
  }, []);
  return [width, height];
};

const WindowSize = () => {
  const [width, height] = useWindowSize();
  return (
    <p>
      width:{width}, height:{height}
    </p>
  );
};

ReactDOM.render(<WindowSize />, document.querySelector('#app'));
