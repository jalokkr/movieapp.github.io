import Hero from './Hero.jsx'

export default function About(){
  return(
    <>
      <Hero text="About Us"/>
      <div className="container">
        <div className='row'>
          <div className='col-lg-8 offset-lg-2 my-5'>
          <p className='lead bght'>
          Hmm.., so you wanted to know about us. Okay, let me
            tell you, so we are a team full of developers
            and movie experts who collects information about movies and then they try to format which information we should tell you all. Then the work of developers comes and they
            designs and develop contents in tghis website.
            But, yeah I know we all are human and we all
             do mistakes hey hey wait dont think we are doing
            any illegal works hahaha but yeah sometimes we are unable to collect right informations or full informations about your fav movies. So. now we request you to help us too yes you heard that right you can be part of our team and guess if you collect and send us more information we will pay you for that. Isnt it awesome to be the part of our team full of experts? So. if you want to help us contact us just text us on our email or chat on our social handles. See you soon dear byee.
          </p>
            <br/>
          <p className="bghtt">
          Contact Us;
            <br/>
            <span className="devlast">movieappdevs@gmail.com</span>
            <br/>
            <br/>
            <i class="fa fa-instagram instai"></i>
            <i class="fa fa-facebook-f fbi"></i>
            <i class="fa fa-twitter-square twi"></i>
          </p>
          </div>
        </div>
      </div>
    </>
    
  )
}