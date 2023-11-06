export const getMeses = ()=>{
  let mes = []

  for(let i = 1 ; i<=12 ;i++){
    i=i.toString()
    if(i.length ===1){
      i='0' + i
    }
    mes.push(i)
  }
  return mes
}

export const getYears = ()=>{
  let actualYear = new Date().getFullYear().toString().slice(2)
  actualYear=Number(actualYear)
  const limite = actualYear +10
  let years= []

  for(let i = actualYear ; i<=limite ; i++){
    years.push(i.toString())
  }

  return years
}

export const addData = (e,type,setData,data)=>{
  let input = e.target.value;

  switch(type){
    case 'nombre':
      setData({
        ...data,
        nombre:input.toUpperCase()
      })
      break;

    case 'numero':
      if(input.length<=16){
        input = separar(input)
        setData({
        ...data,
        numero:input
      })
      }else{
        return
      }
      
      break;

    case 'mes':
      setData({
        ...data,
        mes:input
      })
      break;

    case 'year':
      setData({
        ...data,
        year:input
      })
      break;

    default:
      break;
  }
}

const separar=(numero)=>{
  let result = '';
  for (let i = 0; i < numero.length; i++) {
    result += numero[i];
    if ((i + 1) % 4 === 0 && i !== numero.length - 1) {
      result += ' ';
    }
  }
  return result;
}

export const handleSubmit = (e,data,setValidado)=>{
  e.preventDefault()
  const validado = Object.keys(data).every((clave) => {
    return data[clave] !== '';
    });
    if(validado){
      setValidado(true)
    }else{
      return
    }
}