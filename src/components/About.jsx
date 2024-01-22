import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='software development and coffee' />
          <p className='text-slate-600 mt-8 leading-loose'>

I have worked as a software developer and consultant in various companies and projects.<br />

I love Cycling and like to make small cycling Tours on weekends. Like to taste new coffee flavors and blends. Fan of Mediterranean Cousine.
<br />

Currently, I work as a consultant / software developer at Eggs Unimedia GmbH, where I develop web solutions for customers based on Adobe Experience Manager Sites and Forms.
<br />
I have worked as a consultant at Cognizant Deutschland,  and as a software developer at Check24 Karten und Konten GmbH, where I developed web applications. 
<br />
I have completed an IHK training as an application developer at the Macromedia Academy in Munich. I also Studied in masters in systems engineering from the Hochschule München.

you can download my latest CV from here: &nbsp; <a href='./resume.pdf' alt='download' className='text-red-900' download={'./resume.pdf'}>download</a>
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
