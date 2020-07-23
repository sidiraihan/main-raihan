import React from 'react'
import { Helmet } from 'react-helmet'
//
import logoImg from '../logo.png'
import gmpImg from '../gmp.png'
import oklayadv from '../oklayadv.png'
import printbeta from '../printbeta.png'
import project1 from '../project1.png'
import project2 from '../project2.jpg'
import project4 from '../project4.jpg'
import ticket from '../ticket.png'

const TITLE = 'Raihan Sidi Harinda'


//const person = prompt("What is your name?")

const person = ''

export default () => (
  

        
  <div class="row">
    <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
    <div><h2 class="mb0 ml1">Hi there ✨</h2></div>

    
<div class="flex-row about">
<div class="card">
  <p>My name is</p>
  <h1>Raihan Sidi Harinda</h1>
  <p>My specialties are</p><div class="label"><span>ui/ux</span>  <span>database</span> <span>analysis</span> <span>seo</span> <span>leadership</span> <span>teamwork</span> <span>programming</span></div>
</div>
<div class="card">
  <h2>Get in touch with me</h2>
  <a href="mailto:sidiraihan@gmail.com">sidiraihan@gmail.com</a>
  <a href="https://linkedin.com/in/raihan-sidi-harinda">Linkedin</a>
  <a href="https://github.com/sidiraihan">Github</a>

</div>
</div>
<h2 class="mb0 ml1">Some of my project</h2>


<div class="flex-row project">
  <div class="card">
<img src={project2} alt="" /> 
<img src={ticket} alt="" /> 
<img src={project1} alt="" /> 
<img src={oklayadv} alt="" /> 
<img src={printbeta} alt="" /> 
<img src={project4} alt="" /> 
<img src={gmpImg} alt="" /> 
</div>
<div class="card aqua">
<h2>UI/UX</h2>
  <a alt="ui/ux redesign" target="blank" href="https://xd.adobe.com/view/26624d2f-0567-4f9d-5656-2820847220cd-5053/">Smadav Redesign</a>
  <a alt="adobe xd" target="blank" href="https://xd.adobe.com/view/45938a54-dda1-49f1-5f7e-c8ef9413e56a-33a2/">Nrby</a>
  <a alt="adobe xd" target="blank" href="https://xd.adobe.com/view/98fe76cf-f4ed-4d2d-76cb-a7982e7f39b8-eecf/">Coursr</a>
  <a alt="adobe xd" target="blank" href="https://scene.zeplin.io/project/5d4e74f4b19d56351039bb95">Prestisa Partner</a>
  <a href="https://docs.google.com/document/d/1YoN7Qg1is9qQb77xTJ2DdIEBIggqq33vH3WDUdthCz4/edit?usp=sharing" target="blank">Process/Review</a>
</div>
</div>


  </div>
  
)
