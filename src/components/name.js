import J from '../images/a.jpg'
function Name ()
{
    return (
        <section id="about-me">
        <h1>
          Hello, my name is
          <span class="rotate text-important">John doe</span>,<br />
          and i make horrible websites.
        </h1>
        <img className="avatar" src={J} />
      </section>
    )
}
export default Name