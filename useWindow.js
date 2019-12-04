import React,{useState, useEffect} from 'react';


//useWindowDimensions, curtosy https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs

//Used in useWindowDimensions
export function getWindowDimensions () {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
//useWindowDimenions returns to values, height and width of the viewport without reloading the page.
export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
