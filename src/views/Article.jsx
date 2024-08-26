import React from 'react'


const Article = (props) => {
 let titlevalue = props.data.title
      let noticiavalue = props.data.abstract
      let authorvalue = props.data.byline
      let urlarticlevalue = props.data.url  

  return <div className="card">
  <img src="" className="card-img-top" alt=""></img>
  <div className="card-body">
    <h5 className="card-title">{titlevalue}</h5>
    <p className="card-text">{noticiavalue}</p>
    <a href={urlarticlevalue} className="btn btn-primary">Ir a la noticia completa</a>
  </div>
</div>
  
}

export default Article