import PageTemplate from '../components/layout/PageTemplate'
import AboutIntro from '../components/about/AboutIntro'
import AboutInfo from '../components/about/AboutInfo'
import AboutBenefits from '../components/about/AboutBenefits'
import About2025 from '../components/about/About2025'

const About = () => {
  return (
    <PageTemplate title="Giới thiệu">
      <AboutIntro />
      <AboutBenefits />
      <AboutInfo />
      <About2025 />
    </PageTemplate>
  )
}

export default About

