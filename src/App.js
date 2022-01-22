import { useEffect, useState } from 'react';
import PictureDescription from './components/PictureDescription';
import PictureImage from './components/PictureImage';
import PictureTitle from './components/PictureTitle';
import './styles/styles.scss';

function App() {
  const [imageData, setImageData] = useState({});
  const monthMap = {
    1: 'jan',
    2: 'feb',
    3: 'mar',
    4: 'apr',
    5: 'may',
    6: 'jun',
    7: 'jul',
    8: 'aug',
    9: 'sep',
    10: 'oct',
    11: 'nov',
    12: 'dec'
  }

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(resp => resp.json())
      .then(data => {
        // parse month / day
        let monthInt = parseInt(data.date.split('-')[1]);
        let date = data.date.split('-')[2];
        setImageData({
          ...data,
          month: monthMap[monthInt],
          date
        })
      })
  }, []);


  return (
    <div className="App">
    <div className="siteTitle">
      <h1>APOD</h1>
      <a href='pcarlton.co' target='_blank'>made by presto the wizard.</a>
    </div>
      <div className='left'>
        <div className="pictureDate"><h2>{imageData.month}</h2><h3>{imageData.date}</h3></div>
        <PictureTitle
          title={imageData.title}
        />
        <PictureDescription
          description={imageData.explanation}
        />
      </div>
      <div className='right'>
        <PictureImage
          src={imageData.url}
        />
      </div>

    </div>
  );
}

export default App;
