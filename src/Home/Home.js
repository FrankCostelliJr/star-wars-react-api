import { Link } from 'react-router-dom';

function Home() {
  const catagories = [
    'people', 
    'planets', 
    'films', 
    'species', 
    'vehicles', 
    'starships']

    const imgUrls = {
      people: 'https://wallpaperaccess.com/full/2835756.jpg',
      planets: 'https://media.wired.com/photos/5909633776f462691f012e5c/master/pass/tatooine-ft.jpg',
      films: 'https://i.redd.it/0xrhdhqixya41.png',
      species: '',
      vehicles: 'https://www.photomural.com/media/catalog/product/cache/2/thumbnail/9df78eab33525d08d6e5fb8d27136e95/D/X/DX8-078_1570026661_3.jpg',
      starships: '',
    }
  
  let catList = catagories.map((cat, index) => (
    <article key={`${index}`} className='cat-row item'>
    <div className='group'>
      <h2 className='item' >
        <Link to={`/${cat}`}>{cat.toUpperCase()}</Link>
      </h2>
        <p className='item'>Click link for info</p>
        <img src={imgUrls[cat]} alt="img"/>
    </div>
    </article>
  ))
  return (
    <section className='group'>
      {catList}
    </section>
  )
}

export default Home
