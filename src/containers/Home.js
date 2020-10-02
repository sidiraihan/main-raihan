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
import raihan from '../raihan.jpg'

const TITLE = 'Raihan Sidi Harinda'


//const person = prompt("What is your name?")

const person = ''

export default () => (
  

        
  <div class="row">
    <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
    <div><h2 class="mb0 ml1">Welcome ✨</h2></div>

    
<div class="flex-row about">
<div class="card">
  <div>
    <div>
      <img class="avatar" src={raihan} alt="raihan-sidi-harinda"/> 
    </div>
    <div>
      <h1>Raihan Sidi Harinda</h1>
      <div class="label"><span>ui/ux</span>  <span>database</span> <span>analysis</span> <span>seo</span> <span>leadership</span> <span>teamwork</span> <span>programming</span> <span>testing</span></div>
    </div>
</div>
</div>
<div class="card">
  <h2>Get in touch with me</h2>
  <a href="mailto:sidiraihan@gmail.com">sidiraihan@gmail.com</a>
  <a href="https://linkedin.com/in/raihan-sidi-harinda">Linkedin</a>
  <a href="https://github.com/sidiraihan">Github</a>
  <a href="https://www.notion.so/raihanlab/Raihan-Learning-Lab-f163e67517654ec79b7e1e8c04509168">Learning & Insight</a>
</div>
</div>
<h2 class="mb0 ml1">Some of my projects 💎</h2>


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
  <div>
  <h2>UI/UX</h2> 
  <a alt="ui/ux web app" target="blank" href="https://xd.adobe.com/view/ca3501a9-9149-434a-92bd-f7ee9e6f847f-9f66/">Memberia</a>
  <a alt="ui/ux web app" target="blank" href="https://xd.adobe.com/view/a014ca63-655d-455c-95d9-e296ddd3e0bf-f547/">undangankita</a>
  <a alt="ui/ux mobile app" target="blank" href="https://xd.adobe.com/view/8244e0dc-fcc3-48f3-9fae-a54c7a8348b9-d717/">XDelivery app</a>
  <a alt="ui/ux redesign" target="blank" href="https://xd.adobe.com/view/26624d2f-0567-4f9d-5656-2820847220cd-5053/">Smadav Redesign</a>
  <a alt="adobe xd" target="blank" href="https://xd.adobe.com/view/45938a54-dda1-49f1-5f7e-c8ef9413e56a-33a2/">Nrby app</a>
  <a alt="adobe xd" target="blank" href="https://xd.adobe.com/view/98fe76cf-f4ed-4d2d-76cb-a7982e7f39b8-eecf/">Coursr app</a>
  <a alt="adobe xd" target="blank" href="https://scene.zeplin.io/project/5d4e74f4b19d56351039bb95">Prestisa Partner app</a>
  <a href="https://docs.google.com/document/d/1YoN7Qg1is9qQb77xTJ2DdIEBIggqq33vH3WDUdthCz4/edit?usp=sharing" target="blank">Process/Review</a>
  </div>
</div>
</div>   


  </div>
  
)
