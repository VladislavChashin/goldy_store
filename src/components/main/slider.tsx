import { useState } from 'react';
import { data } from '../data/data_slider';
import { class_slide_left } from '../data/data_slider';
import { class_slide_right } from '../data/data_slider';
import strelka from './img/svg/strelka.svg'


export function Slider(){
  const [activeState, setActiveState] = useState(class_slide_right[0]);
  let [index, setIndex] = useState(0);



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