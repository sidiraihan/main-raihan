import React from 'react'
//
import logoImg from '../logo.png'
import gmpImg from '../gmp.png'
import oklayadv from '../oklayadv.png'
import printbeta from '../printbeta.png'
import project1 from '../project1.png'
import project2 from '../project2.jpg'
import project4 from '../project4.jpg'
import ticket from '../ticket.png'

export default () => (
  <div class="row">
    <div><h1>Hi There ✨</h1></div>
<div class="flex-row">
<div class="card">
  <h2>Raihan Sidi Harinda</h2>
  <p>Full time learner</p>
  <div class="label"><span>ui/ux</span>  <span>database</span> <span>analysis</span> <span>seo</span> <span>teamwork</span> <span>programming</span></div>
</div>
<div class="card">
  <h2>Get in touch with me</h2>
  <a href="mailto:sidiraihan@gmail.com">sidiraihan@gmail.com</a>
  <a href="https://linkedin.com/in/raihan-sidi-harinda">Linkedin</a>
  <a href="https://github.com/sidiraihan">Github</a>

</div>
</div>
<h2>Some of my project</h2>


<div class="flex-row project">

<img src={project2} alt="" /> 
<img src={ticket} alt="" /> 
<img src={project1} alt="" /> 
<img src={oklayadv} alt="" /> 
<img src={printbeta} alt="" /> 
<img src={project4} alt="" /> 
<img src={gmpImg} alt="" /> 
</div>

  </div>
  
)
