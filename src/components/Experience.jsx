
import experience from '../database/experience'
import Item from './Item'

function Experience() {
  return (
    <div className='expContainer'>
        <h3>Work Experience</h3>
        <div className="container">
            {experience.map(exp=>(
                <Item key={exp.id} properties={exp}/>
            ))}
        </div>
    </div>
  )
}

export default Experience
