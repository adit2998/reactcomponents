import ProfileCard from './ProfileCard'
import IronMan from './images/iron_man.jpg'
import CaptainAmerica from './images/captain_america.jpg'
import Hulk from './images/hulk.webp'
import Hulk2 from './images/hulk.jpg'
import { useState } from 'react';


const avengers = [
  {
    superhero: "Iron Man",
    identity: "Tony Stark",
    image: IronMan
  },
  {
    superhero: "Captain America",
    identity: "Steve Rogers",
    image: CaptainAmerica
  },
  {
    superhero: "The Hulk",
    identity: "Bruce Banner",
    image: Hulk
  }
]

const renderedAvengers = avengers.map((avenger, index) => {
  return <ProfileCard superhero={avenger.superhero} identity={avenger.identity} image={avenger.image} key={index}/>
})

function App() {

  const [profiles, setProfiles] = useState(avengers);

  const newAvenger = {
    superhero: "The Hulk",
    identity: "Bruce Banner",
    image: Hulk2
  }

  const handleClick = () => {
    console.log('Click ')
    setProfiles([...profiles, newAvenger])
    console.log(profiles)
  }

  return (
    <div>
      <section className="hero">
        <div className="hero-body">
          <p className="title">Avengers</p>
          <p className="subtitle">S.H.I.E.L.D. records</p>
        </div>
      </section>

      <button className="button" onClick={handleClick}>Add individual</button>
      {/* <div>Total count: {count}</div> */}

      <div className='container'>
        <section className='section'>

          {/* <div className='grid'>                           
              {              
                renderedAvengers                                            
              }            
          </div>         */}
          <div className='grid'>                           
              {              
                profiles.map((avenger, index) => {
                  
                    return <ProfileCard superhero={avenger.superhero} identity={avenger.identity} image={avenger.image} key={index}/>
                  
                })
              }            
          </div> 

          {/* <div className='grid'>
                     
            <div className='is-col-min-4'>
              <ProfileCard superhero="Iron Man" identity="Tony Stark" image={IronMan} />
            </div>

            <div className='is-col-min-4'>
              <ProfileCard superhero="Captain America" identity="Steve Rogers" image={CaptainAmerica} />
            </div>

            <div className='is-col-min-4'>
              <ProfileCard superhero="Hulk" identity="Bruce Banner" image={Hulk} />
            </div>

            <div className='is-col-min-4'>
              <ProfileCard superhero="Hulk" identity="Hulk" image={Hulk2} />
            </div>

          </div> */}
        </section>
      </div>    
    </div>
  );
}

export default App;