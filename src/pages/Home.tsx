import PageTemplate from '../components/layout/PageTemplate'
import Hero from '../components/homepage/Hero'
import HomeDetail from '../components/homepage/HomeDetail'
import HomeDivider from '../components/homepage/HomeDivider'
import HomeQuote from '../components/homepage/HomeQuote'
import HomeImpact from '../components/homepage/HomeImpact'
import HomeStudentQuotes from '../components/homepage/HomeStudentQuotes'
import HomeCTA from '../components/homepage/HomeCTA'

const Home = () => {
  return (
    <PageTemplate title="Trang chủ">
      <Hero />
      <HomeDivider />
      <HomeQuote />
      <HomeDivider />
      <HomeImpact />
      <HomeDivider />
      <HomeStudentQuotes />
      <HomeDivider />
      <HomeDetail />
      <HomeCTA />
    </PageTemplate>
  )
}

export default Home