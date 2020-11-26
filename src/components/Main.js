import React from 'react'; 
import SVG_Drawing from './SGV_Drawing';

const Main = () => {
    return (
        <div className="container main-1 py-5">
            <div className="row">
                <div className="col col-lg-8 box">
                    <div className="row py-5 first-row">
                        Cumpăratul de teme nu a fost niciodată mai simplu!
                    </div>
                    <div className="row-5 py-5 second-row">
                        Platforma ideala pentru studenții de la Politehnică cu portofele pline, care au nevoie urgent de un înger care să le repare nota de intrare în examen.
                    </div>
                    <div className="row py-5">
                        <div className="col ">
                            <button type="button" class="btn btn-primary custom-btn-1">
                                Vreau sa cumpar teme
                            </button>
                        </div>
                        <div className="col">
                            <button type="button" class="btn btn-primary custom-btn-2">
                                Vreau sa fac teme pentru altii
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-4 box">
                    <SVG_Drawing />
                </div>
            </div>
        </div>
    )
}

export default Main;