import './App.scss';
import imagesFromServer from './api.json';
import {ImageList} from './components/ImageList/ImageList';
import {Header} from "./components/Header/Header";
import WaveTop from './icons/wave-top.svg';
import WaveBottom from './icons/wave-bottom.svg';

function App() {
    return (
        <>
            <Header/>
            <ImageList images={imagesFromServer}/>
            <img
                src={WaveTop}
                alt="wave"
                className='waveTop'
            />
            <img
                src={WaveBottom}
                alt="wave"
                className='waveBottom'
            />
        </>
    );
}

export default App;
