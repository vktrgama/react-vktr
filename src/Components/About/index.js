import TimeLine from '../TimeLine';
import Reveal from '../Common/Reveal';

function About() {
    return (
      <div>
        <div class="container well__ins1 well__ins2">
            <div class="row">
                <div class="grid_12">
                    <Reveal as="h2">About Me</Reveal>
                    <Reveal as="h3" className="hdng__off3" delay={100}>I have an extensive experience in the development of diverse software solutions for a variety of architectures and platforms, well familiar with Full-Stack frameworks and Object Oriented Programming over a variety of development methodologies, e.g. Agile, Scrum, or SDLC.</Reveal>
                </div>
            </div>
            <TimeLine />
          </div>
      </div>
    );
  }

  export default About;