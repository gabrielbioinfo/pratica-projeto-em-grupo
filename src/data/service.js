import vinteflix from './vinteflix';

export default async function getVinteFlixData(){
  return new Promise( (resolve)=>{
    setTimeout(()=>{
      resolve(vinteflix);
    }, 2000);
  });
  
}