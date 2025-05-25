import { useContext } from "react";
import { dataContext } from "./parent";

const Greatgrandchild = () => {
  
const {data,nam}=useContext(dataContext);
console.log(data);
    return (
    <div className="bg-black/70 h-screen w-full text-white flex items-center justify-center">
      {data.map((item:any) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <p>{item.age}</p>
          {nam}
        </div>
      ))}
    </div>
  );
};

export default Greatgrandchild;
