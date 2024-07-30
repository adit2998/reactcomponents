import ProfileCard from './ProfileCard'
import IronMan from './images/iron_man.jpg'
import CaptainAmerica from './images/captain_america.png'
import Hulk from './images/hulk.jpg'

function App() {
  return (
    <div>
      <section class="hero">
        <div class="hero-body">
          <p class="title">Avengers</p>
          <p class="subtitle">S.H.I.E.L.D. records</p>
        </div>
      </section>

      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-4'>
              <ProfileCard superhero="Iron Man" identity="Tony Stark" image={IronMan} />
            </div>

            <div className='column is-4'>
              <ProfileCard superhero="Captain America" identiy="Steve Roger" image={CaptainAmerica} />
            </div>

            <div className='column is-4'>
              <ProfileCard superhero="Hulk" identity="Bruce Banner" image={Hulk} />
            </div>

          </div>
        </section>
      </div>    
    </div>
  );
}

export default App;