import React, { Component } from 'react'
import Layout from '../components/layout'

import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Photo 1', caption: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '2', src: full02, thumbnail: thumb02, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '3', src: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '4', src: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '5', src: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '6', src: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];
export default class AppointHub extends Component {
  render() {
    return (
      <Layout>
          <div id="main">

<section id="one">
    <header className="major">
        <h2>AppointHub</h2>
    </header>
    <h3>AppointHub covers all the needs of small businesses that are appointment based.</h3>
    <h3>Features Include: </h3>
        <p><span className='feature-span'>Create your own schedule</span> - easy-to-use and flexible creation of a schedule tatilored to your needs.</p>
        <p><span className='feature-span'>Manage your schedule</span> from a weekly view or wiew days individually with access to each appointment and client on that day's schedule.</p>
        <p><span className='feature-span'>Keep track of past and upcoming appointments,</span> with the ability to edit, reschedule, and optionally add online payment choices</p>
        <p><span className='feature-span'>Clients can schedule appointments</span> as well as view their past and upcoming appointmentments and make payments associated with that appointment</p>
    
    <ul className="actions">
        <li><a href="#" className="button">Learn More</a></li>
    </ul>
</section>

<section id="two">
    <h2>Recent Work</h2>

    <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
        src,
        thumbnail,
        caption,
        description
    }))} />

    <ul className="actions">
        <li><a href="#" className="button">Full Portfolio</a></li>
    </ul>
</section>

{/* <section id="three">
<a name="contact"></a>
    <h2>Get In Touch</h2>
    <p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>
    <div className="row">
        <div className="8u 12u$(small)">
            <form method="post" action="#">
                <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                    <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                    <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                </div>
            </form>
            <ul className="actions">
                <li><input type="submit" value="Send Message" /></li>
            </ul>
        </div> */}
        {/* <div className="4u 12u$(small)">
            <ul className="labeled-icons">
                <li>
                    <h3 className="icon fa-linkedin"><span className="label">LinkedIn</span></h3>
                    www.linkedin.com/in/kenny-crump<br />
                </li>
                <li>
                    <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                    000-000-0000
                </li>
                <li>
                    <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                    <a href="#">hello@untitled.tld</a>
                </li>
            </ul>
        </div> */}
    {/* </div>
</section> */}

</div>
        {/* <Gallery
          images={DEFAULT_IMAGES.map(
            ({ id, src, thumbnail, caption, description }) => ({
              src,
              thumbnail,
              caption,
              description,
            })
          )}
        /> */}
      </Layout>
    )
  }
}
