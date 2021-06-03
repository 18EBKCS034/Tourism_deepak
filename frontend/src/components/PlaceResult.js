import React from 'react';
import '../style/SearchResult.css';

function SearchResult({
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    title,
    desc,
    id 
}) {

    return (
        <div className='searchResult'>
            {/* <img src={img} alt="" /> */}
              <div style={{width : "500px", height : "320px", background: "grey"}}>
                    <div style={{height: "320px"}} id={id} class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target={'#'+id} data-slide-to="0" class="active"></li>
                            <li data-target={'#'+id} data-slide-to="1"></li>
                            <li data-target={'#'+id} data-slide-to="2"></li>
                            <li data-target={'#'+id} data-slide-to="3"></li>
                            <li data-target={'#'+id} data-slide-to="4"></li>
                            <li data-target={'#'+id} data-slide-to="5"></li>
                            <li data-target={'#'+id} data-slide-to="6"></li>
                        </ol>
                        <div class="carousel-inner" style={{height: "320px",  width: "100%"}}>
                            <div class="carousel-item active">
                                <img style={{width: "100%" , height: "100%"}} src={img1} alt="No Image"/>
                            </div>
                            <div  class="carousel-item">
                                <img style={{width: "100%" , height: "100%"}} src={img2} alt="No Image"/>
                            </div>
                            <div class="carousel-item">
                                <img style={{width: "100%" , height: "100%"}} src={img3} alt="No Image"/>
                            </div>
                            <div class="carousel-item">
                                <img style={{width: "100%" , height: "100%"}} src={img4} alt="No Image"/>
                            </div>
                            <div class="carousel-item">
                                <img style={{width: "100%" , height: "100%"}} src={img5} alt="No Image"/>
                            </div>
                            <div class="carousel-item">
                                <img style={{width: "100%" , height: "100%"}} src={img6} alt="NO Image"/>
                            </div>
                            <div class="carousel-item">
                                <img style={{width: "100%" , height: "100%"}} src={img7} alt="No Image"/>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href={'#'+id} role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href={'#'+id} role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>

            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
