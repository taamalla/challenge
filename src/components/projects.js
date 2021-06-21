import P1 from '../images/proj1.jpg'
import P2 from '../images/proj2.jpg'
import P3 from '../images/proj3.jpg'
import P4 from '../images/proj4.jpg'
function Projects ()
{
    return(
     
        <section id="projects">
          <h2 className="text-important">Projects</h2>
          <div class="projects-container">
            {/* <!--Project Card --> */}
            <div className="project-card">
              <img src={P1} alt="project" />
              <h3>Project 1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
                aliquam.
              </p>
              <p><a href="#">Github Link</a></p>
            </div>
            {/* <!--Project Card --> */}
            <div className="project-card">
              <img src={P2} alt="project" />
              <h3>Project 2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
                aliquam.
              </p>
              <p><a href="#">Github Link</a></p>
            </div>
            {/* <!--Project Card --> */}
            <div className="project-card">
              <img src={P3} alt="project" />
              <h3>Project 3</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
                aliquam.
              </p>
              <p><a href="#">Github Link</a></p>
            </div>
            {/* <!--Project Card --> */}
            <div className="project-card">
              <img src={P4} alt="project" />
              <h3>Project 4</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
                aliquam.
              </p>
              <p><a href="#">Github Link</a></p>
            </div>
          </div>
        </section>
    )
}
export default Projects