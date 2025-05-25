
import { createContext } from 'react'
import Child from './child'
import { data } from './data'
const nam="ramesh";

const dataContext = createContext({data, nam});
const Parent = () => {
  return (
    <dataContext.Provider value={{data,nam}}>
        <div>
            <Child />
        </div>
    </dataContext.Provider>
    
  )
}

export default Parent
export { dataContext }