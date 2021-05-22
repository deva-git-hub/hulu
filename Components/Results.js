import Thumbnail from './Thumbnail.js'
import FlipMove from "react-flip-move"


function Results({results}) {


          return results?<FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3
          3xl:flex flex-wrap justify-center">
          {results.map(result=>(
          <Thumbnail key={result.id} result={result}/>))}
      </FlipMove>:<div></div>

   
}

export default Results
