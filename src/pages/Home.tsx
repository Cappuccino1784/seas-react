import PageTemplate from '../components/layout/PageTemplate'
import Hero from '../components/homepage/Hero'
import HomeDetail from '../components/homepage/HomeDetail'

const Home = () => {
  return (
    <PageTemplate title="Trang chủ">
      <Hero />
      <HomeDetail />

    </PageTemplate>
  )
}

export default Home