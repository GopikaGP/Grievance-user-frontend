import React from 'react'
import './style/home.css'
import EyeImage from '../images/eyegif.gif'
import Lady from '../images/lady.png'
import EyeInside from '../images/eyes-color.png';
import justi from '../images/justu.png'
import men from '../images/menn.png'
import Girl1 from '../images/Girls1.png'
import Gopika from '../images/GopikaGp.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';





function Home() {
  return (
    <>
       
      {/* BannerSEction */}
      <section className='Banner container-fluid pb-5'style={{backgroundColor:"white",height:"450px"}}>
        <div className='inner_design'>
          <div className='row pt-5'>
            <div className="col-md-2"></div>
           
            <div className="col-md-4 pt-5 ps" style={{fontFamily:"Montserrat"}}>
              <h4  className='fw-bold' style={{fontFamily:"Exo"}}>Welcome to  <span className='letter_custom'  style={{fontFamily:"polo", fontSize:"70px", color:"#8b0000"}}>L</span>um<span className='letter_custom' style={{fontFamily:"polo", fontSize:"70px",color:"#8b0000"}}>I</span>na  Domain</h4>
              <p className='fw-bold custom-banner-text' style={{color:"white"}}>The Light You Need in Dark Times ....</p>
              
              <p className='fw-bold custom-banner-text' style={{color:"white"}}>"Got a problem? Lumina is here to hear and help."</p>
              <a className='btn btn-success' href='/complaint'>Call To Action</a>
            </div>
            <div className="col-md-4">
            <div className='d-flex justify-content-center align-items-center'>
           <img className='roundImg' src={EyeImage} alt="" />
           </div>

            </div>
            <div className="col-md-2"></div>
          </div>
         
        </div>
      </section>  
      
          {/*section 2  */}
      <section className='second_sectionn'>
            <div className=' text-center pb-5'>
            <p className='fs-3'>Meet  <span className='letter_custom'  style={{fontFamily:"polo", fontSize:"70px", color:"#8b0000"}}>L</span>um<span className='letter_custom' style={{fontFamily:"polo", fontSize:"70px",color:"#8b0000"}}>I</span>na  </p>
            <p  style={{color:"#8b0000", fontFamily:"kalam", letterSpacing:"2px", fontSize:"20px"}}>  - The Guardian of the Light</p>
            </div>
            <div className="container-fluid lumina_intro pb-5">
               <svg width="0" height="0">
    <filter id="f" x="-50%" y="-200%" width="200%" height="500%" primitiveUnits="objectBoundingBox">
      {/* <!-- Blurred copy of the text --> */}
      <feGaussianBlur stdDeviation=".025 .2" />
      {/* <!-- Increase saturation --> */}
      <feColorMatrix type="saturate" values="1.3" />
      {/* <!-- Blend the blurred and saturated copy with the original --> */}
      <feBlend in="SourceGraphic" />
    </filter>
                </svg>

  <div className="row">
    <div className="col-md-2"></div>
    <div className="col-md-4 pt-5 pe-4">
      <p style={{fontSize:"38px", letterSpacing:"3px"}} className="who_lumina_head pe-5 ">Who is LumIna?</p>
      <p className='text-justify' style={{ fontFamily: "Kalam", color: "#E8E8E8" }}>
        Lumina, the Guardian of Light, is not just a superhero. She is a celestial force, born from the cosmos, destined to restore balance between light and darkness. Her journey began eons ago, when the universe called upon her to wield the power of pure light – an energy that flows through every living being.
        Raised among the stars and guided by the wisdom of ancient beings, Lumina stands as the protector of our world. Her duty is to shield us from the creeping shadows that threaten peace, justice, and harmony. With the power to manipulate light and bend it to her will, Lumina is both a beacon of hope and a fierce warrior when the need arises.
      </p>
    </div>
    <div className="col-md-4 pt-5 pb-5 ps-5" >
      <img className='lady_round' src={Lady} alt="load"  width={"70%"}/>
    </div>
    <div className="col-md-2"></div>
  </div>
  {/* her story */}
  {/* <div className="row pt-5 her_story">
    <div className="col-md-1"></div>
    
    <div className="col-md-5 her_story_imgbg pb-5 pt-5">
     <div className='eyeImg'>
       <img className='her_story_eye_child' src={EyeInside} alt=""/>
    </div>
    </div>
    <div className="col-md-5 pt-5">
    <h2 className='text-center'>Her Story...</h2>
    <br/>
    <p className='text-justify'>Lumina’s story begins in the heart of a dying star, where ancient forces harnessed the last remnants of cosmic energy. From this energy, Lumina was born, gifted with the ability to see into both the past and future. Her mission? To protect the fragile balance of light and darkness across all dimensions. After witnessing the devastation caused by darkness overwhelming the light, Lumina vowed to fight for those who could not fight for themselves. She descended to Earth, sensing the growing chaos in our world, and took on the mantle of guardian.
    Through countless battles and sacrifices, Lumina has become a legend, her very name synonymous with hope. Yet, her greatest challenge still lies ahead...</p>
    </div>
    <div className="col-md-1"></div>
  
  </div> */}
 </div>


      
        {/* her story */}
  <div className="row pt-5 her_story">
    <div className="col-md-1"></div>
    
    <div className="col-md-5 her_story_imgbg pb-5 pt-5">
     <div className='eyeImg'>
       <img className='her_story_eye_child' src={EyeInside} alt=""/>
    </div>
    </div>
    <div className="col-md-5 pt-5">
    <h2 className='text-center'>Her Story...</h2>
    <br/>
    <p className='text-justify'>Lumina’s story begins in the heart of a dying star, where ancient forces harnessed the last remnants of cosmic energy. From this energy, Lumina was born, gifted with the ability to see into both the past and future. Her mission? To protect the fragile balance of light and darkness across all dimensions. After witnessing the devastation caused by darkness overwhelming the light, Lumina vowed to fight for those who could not fight for themselves. She descended to Earth, sensing the growing chaos in our world, and took on the mantle of guardian.
    Through countless battles and sacrifices, Lumina has become a legend, her very name synonymous with hope. Yet, her greatest challenge still lies ahead...</p>
    </div>
    <div className="col-md-1"></div>
  
  </div>
      </section>

         {/* her mission */}
      <section className='container-fluid'>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4 pt-5">
          <h1 className='pt-5'>"Have a Problem? Lumina is Here to Help!"</h1>
            {/* <p>No issue is too small when it affects your peace. Lumina understands that even the smallest grievance can cast a long shadow. Whether it's a personal conflict, community concern, or something that feels bigger than you can handle, Lumina is here to bring light to the situation. Submit your complaint, and know that action will be taken to restore balance and fairness. Lumina listens, investigates, and acts—swiftly and justly.</p> */}
            
          </div>
          <div className="col-md-4 pt-5">

          <div className='d-flex flex-column justify-content-center align-items-center pt-5'>
            {/* <p className='pt-5'>"Your Voice Matters—Let It Be Heard"</p> */}
            <p>Submit your grievance, and Lumina will personally look into </p>
            <p className='text-start ps-0'>Here’s how you can submit your grievance:</p>
            <ul>
              <li>Fill Out the Form Below: Provide as much detail as possible so Lumina can fully understand your situation.</li>
              <li>Keep It Confidential: Your privacy is our priority. Any information you share will be handled with care and sensitivity.</li>
              <li>Stay Updated: After submission, you’ll receive updates on how Lumina is addressing your complaint. Rest assured, you’ll be kept in the loop every step of the way.</li>
            </ul>
            <button className='btn btn-success w-70'>Call To Action</button>
            </div>

         
          </div>
          <div className="col-md-2"></div>
        </div>
       
      </section>
         
      {/* terminols  */}
  <section className='pt-5 container'>
  <h3 className='text-center pb-5'>Recent Grievances Addressed</h3>
  <div className=" ps-5 row">
    <div className='col-md-1 ps-5 ms-4'></div>
     <div className="col-md-3 ">
     <div className='card'>
      <div className='round_user'>
         <img className='w-70' src={justi} alt="" width={'40%'}/>
         </div>
        
         <p> Justin Joseph</p>
         <p> City Environmental Officer</p>
         <p className='px-4'style={{fontSize:"14px",fontFamily:"Dancing Script"}}>"As I patrolled the city, I detected a toxic shimmer beneath the moonlight—local waste was being dumped into the river. I confronted those responsible and forced them to stop. Together with the city, we cleaned the waters, protecting not only the ecosystem but also the people who rely on it."</p>

         <div className='icon_user pb-3' style={{fontSize:"20px"}}>Resolved <FontAwesomeIcon icon={faCircleCheck} fade style={{color: "#1f703e",}} /></div>
        
     </div>
     </div>
     <div className="col-md-3">
     <div className='card'>
      <div className='round_user'>
         <img className='w-100' src={men} alt="" width={'60%'}/>
         </div>
        
         <p>Josh</p>
         <p> Community Organizer</p>
         <p className='px-4'style={{fontSize:"14px",fontFamily:"Dancing Script"}}>"A small community had been suffering for weeks due to a broken water system. When I arrived, I saw the toll it had taken on the children and elders. Using my power, I purified nearby streams and provided temporary relief. I’m working with engineers to resolve the issue for good."</p>

         <div className='icon_user pb-3' style={{fontSize:"20px"}}>Resolved <FontAwesomeIcon icon={faCircleCheck} fade style={{color: "#1f703e",}} /></div>
        
     </div>
     </div>
     <div className="col-md-3">
     <div className='card'>
      <div className='round_user'>
         <img className='w-100' src={Girl1} alt="" width={'100%'}/>
         </div>
        
         <p> Anika Patel</p>
         <p> Local Village Leader</p>
         <p className='px-4'style={{fontSize:"14px",fontFamily:"Dancing Script"}}>"The sky had been dark for days, and the rivers overflowed with unrelenting fury. I heard the desperate calls of a village surrounded by rising waters. I formed a barrier of light to redirect the floodwaters, giving the villagers enough time to evacuate safely. Their gratitude fuels my strength,"</p>

         <div className='icon_user pb-3' style={{fontSize:"20px"}}>Resolved <FontAwesomeIcon icon={faCircleCheck} fade style={{color: "#1f703e",}} /></div>
        
     </div>
     </div>
     <div className="col-md-1">
     
     </div>
  </div>
   
</section>

   

      
    </>
  )
}

export default Home