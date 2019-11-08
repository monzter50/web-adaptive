import React from 'react'

 const Tab = () =>{
    return(
        <div className="tab theme--primary">
            <ul className="tab__nav">
                <li className="tab__item border-r border-white-500 active"><a className="tab__link" href="#/"> Hotel</a> </li>
                <li className="tab__item border-r border-white-500 "><a className="tab__link" href="#/">Hotel + Passagem</a></li>
                <li className="tab__item border-r border-white-500"><a className="tab__link" href="#/">Passagens</a></li>
                <li className="tab__item"><a className="tab__link" href="#/">Passeios</a></li>
            </ul>
        </div>
    )
}
export default Tab
