import Hero from '../components/Hero'
import FeaturedContent from '../components/FeaturedContent'
import './Home.css'

export interface HomeProps {
  className?: string
}

const Home = ({ className = '' }: HomeProps) => {
  return (
    <main className={`home ${className}`}>
      <Hero />
      <FeaturedContent />
    </main>
  )
}

export default Home
