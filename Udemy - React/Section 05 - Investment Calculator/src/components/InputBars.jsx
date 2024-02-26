
export default function InputBars({label,inputId,onChangeValue,value}) {
  
  function changeHandler(event){
    onChangeValue(inputId,event.target.value)
  }
  

  
  return (
  <div>
    <label htmlFor={inputId}>{label}</label>
    <input type="number" id={inputId} name={inputId} onChange={changeHandler} defaultValue={value}/>
  </div>
  );
}