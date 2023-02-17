import { useState } from 'react';
import ring from './img/shop/big-ring.png'
import strelka from './img/svg/strelka.svg'


export function Slider(){
  const class_slide_right = ['slider_wrap fade_in_right', 'slider_wrap fade_out_right']
  const class_slide_left = ['slider_wrap fade_in_left', 'slider_wrap fade_out_left']
  const [activeState, setActiveState] = useState(class_slide_right[0]);
  let [index, setIndex] = useState(0);

  const data = [
    {
      id:1,
      p: 'Супер скидка до 60%',
      h: 'На бриллианты',
      img: ring,
    },
    {
      id:2,
      p: 'Супер скидка до 90%',
      h: 'На колье',
      img: ring,
    },
    {
      id:3,
      p: 'Скидка до 20%',
      h: 'На браслеты',
      img: ring,
    }
]


  const handleNext = () => {
    if (index != 2){
      setTimeout(() => {
        setActiveState(class_slide_right[0])
      }, 500)
      setTimeout(()=>{
        setIndex(index + 1);  
      }, 500) 
      setActiveState(class_slide_right[1])
    }
    else{
      index = -1;
      setTimeout(() => {
        setActiveState(class_slide_right[0])
      }, 500)
      setTimeout(()=>{
        setIndex(index + 1);  
      }, 500) 
      setActiveState(class_slide_right[1])
    }
  };

  const handlePrevious = () => {
    if (index != 0){
      setTimeout(() => {
        setActiveState(class_slide_left[0])
      }, 500)
      setTimeout(()=>{
        setIndex(index - 1);  
      }, 500) 
      setActiveState(class_slide_left[1])
    }
    else{
      setTimeout(() => {
        setActiveState(class_slide_left[0])
      }, 500)
      index = 3;
      setTimeout(()=>{
        setIndex(index - 1);  
      }, 500) 
      setActiveState(class_slide_left[1])
    }
    
  };

    return(
        <div className="slider">
          <img onClick={handlePrevious} src={strelka} alt="" className="slide_icon left"/>
          <div key ={data[index].id} className={activeState}>
            <div className="slider_text">
              <p>{data[index].p}</p>
              <h2>{data[index].h} </h2>
              <button>Подробнее</button>
            </div>
            <div className="slider_img">
              <img src={data[index].img} alt=""/>
            </div>
          </div>
          <img onClick={handleNext} src={strelka} alt="" className="slide_icon right"/>
        </div>
    )
}