export const storage={
 save:(items)=>localStorage.setItem("visitors",JSON.stringify(items)),
 load:()=>JSON.parse(localStorage.getItem("visitors")||"[]")
};