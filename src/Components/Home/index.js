import { useEffect } from 'react';
import Reveal from '../Common/Reveal';

function Home() {
    useEffect(() => {
        const jQuery = window.jQuery;
        if (!jQuery) {
            return;
        }

        const owl = jQuery('#owl');
        if (owl.length === 0) {
            return;
        }

        const imgCnts = jQuery('.img-wrap .img-cnt');

        const syncActiveImage = () => {
            const data = owl.data('owlCarousel');
            if (!data) {
                return;
            }
            imgCnts.removeClass('active');
            imgCnts.eq(data.currentItem).addClass('active');
        };

        const handleImgClick = function () {
            const data = owl.data('owlCarousel');
            if (!data) {
                return;
            }
            data.goTo(imgCnts.index(this));
        };

        owl.owlCarousel({
            navigation: false,
            autoPlay: true,
            stopOnHover: true,
            slideSpeed: 300,
            pagination: false,
            paginationSpeed: 400,
            singleItem: true,
            navigationText: ["", ""],
            afterInit: syncActiveImage,
            afterAction: syncActiveImage
        });

        imgCnts.css('cursor', 'pointer').on('click', handleImgClick);

        return () => {
            imgCnts.off('click', handleImgClick);
            const data = owl.data('owlCarousel');
            if (data) {
                data.destroy();
            }
        };
    }, []);

    return (
        <>
            <section id="content" class="content">
                <div class="container well__ins1 well__ins2">
                    <div class="row">
                        <div class="grid_12">
                            <Reveal as="h2">Latest Projects</Reveal>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="grid_12">
                            <Reveal as="h3" delay={100}>Ancestry.com</Reveal>
                        </div>
                    </div>
                </div>
                <div class="container container well__ins2">
                    <div class="row">
                        <Reveal as="div" className="grid_3" direction="up" delay={200}>
                            <div class="box center">
                                <div class="tm-spanner"></div>
                                <h4><a href="#">Development</a></h4>
                                <p>
                                Build and deliver engaging applications for Ancestry customers to explore their Ethnicity and Health via DNA analysis, as well as Historical records, implementing full stack frameworks, including: NodeJS, React, Redux, Jest, Mocha, Webpack, and deployment platforms like Jenkins, Docker, Kubernetes, AWS, and GitHub.
                                </p>
                            </div>
                        </Reveal>
                        <Reveal as="div" className="grid_3" direction="up" delay={400}>
                            <div class="box center">
                                <div class="tm-gear"></div>
                                <h4><a href="#">Services</a></h4>
                                <p>
                                Build backend RESTful services for our solutions and internal clients, well documented. Support my team on several infrastructure migrations (GitHub, Kubernetes, Cloud, Harness).
                                </p>
                            </div>
                        </Reveal>
                        <Reveal as="div" className="grid_3" direction="up" delay={600}>
                            <div class="box center">
                                <div class="tm-user"></div>
                                <h4><a href="#">Agile</a></h4>
                                <p>
                                As a Scrum Master I worked with other teams to ensure dependencies are in sync, and worked with Product Managers to define a clear scope of priorities, lead my team to deliver features under tight deadlines.
                                Close collaboration with other teams implementing internal services as well as integration with our dependencies.
                                </p>
                            </div>
                        </Reveal>
                        <Reveal as="div" className="grid_3" direction="up" delay={800}>
                            <div class="box center">
                                <div class="tm-check"></div>
                                <h4><a href="#">Production</a></h4>
                                <p>
                                Delivered 3 major products in the last 2 years for Ancestry DNA and Ancestry Health domains, high profile customer facing applications.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
                <div class="bg1 well__ins3 well__ins2">
                    <div class="container">
                        <div class="row">
                            <div class="grid_12">
                                <Reveal as="h2">Recommendations</Reveal>
                                <p>&nbsp;</p>
                            </div>
                            <div class="grid_12">
                                <div class="img-wrap center">
                                    <Reveal as="div" className="img-cnt mg-add" direction="bounce" delay={400}><img src="images/craig-tenney.jpeg" alt="Craig Tenney" /></Reveal>
                                    <Reveal as="div" className="img-cnt mg-add" direction="bounce" delay={600}><img src="images/audrey-vincent.jpeg" alt="Audrey Vincet" /></Reveal>
                                    <Reveal as="div" className="img-cnt mg-add" direction="bounce" delay={200}><img src="images/robert-schultz.jpeg" alt="Robert Schultz" /></Reveal>
                                </div>
                                <div id="owl" class="owl reveal reveal--up reveal--visible">
                                    <div class="item">
                                        <blockquote class="quote">
                                            <h4 class="quote_aside"><a href="#">Craig Tenney</a></h4>
                                            <p class="quote_cnt">
                                                “Victor is a strong software developer and I really enjoyed having him on my team. Victor contributed significantly to the release of the Ancestry Health product through his leadership as both the Technical Lead and as the Scrum Master. I relied heavily on his React and Java expertise and appreciated his ability to mentor more junior engineers. Victor has a calm demeanor and steady temperament that helped to calm the team when schedules were tight and stress levels were high. I highly recommend Victor as a very capable software engineer and all-around great guy.”
                                            </p>
                                        </blockquote>
                                    </div>
                                    <div class="item">
                                        <blockquote class="quote">
                                            <h4 class="quote_aside"><a href="#">Audrey Vincent</a></h4>
                                            <p class="quote_cnt">
                                                “Over the past year, Victor and I worked closely developing and launching AncestryHealth, a B2C genomics product generating over 300K DNA kit sales. Despite incredibly tight deadlines and limited resources, Victor was able to step up and lead all 6 members of the team as the interim engineering manager. Victor supported the team through crucial moments of the development process working hard to highlight and represent the success of the team. Victor's leadership and technical background proved to be essential to the success of AncestryHealth.”
                                            </p>
                                        </blockquote>
                                    </div>
                                    <div class="item">
                                        <blockquote class="quote">
                                            <h4 class="quote_aside"><a href="#">Robert Schultz</a></h4>
                                            <p class="quote_cnt">
                                                “Victor was a pleasure to work with, a solid engineer with a great sense of humor. He was very engaging and worked on teams that delivered high quality products in a very rapid pace. Victor was also excellent at understanding build management and owning the continuous delivery process early on in the company when we were moving to a bigger, large scale system which required lots of patience and knowledge of languages such as Ruby.”
                                            </p>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>        
    );
  }

  export default Home;