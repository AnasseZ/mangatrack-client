import React from "react";


export default class MangaTracked extends React.Component {

    render() {
        const {manga} = this.props;

        return (
            <div className="col-sm-3">
                <div className="card border-0">
                    <img className="card-img-top" src={manga.img} alt="Image manga" />
                    <div className="card-body">
                        <h5 className="card-title">{manga.title}</h5>
                        <p className="card-text">Dernier: chap. {manga.lastChapterOut}</p>
                        {manga.lastChapterOut ==manga.lastChapterView ?
                            <p className="card-text">A jours !</p>
                            : 
                             <p className="card-text">En cours: {manga.lastChapterView} &nbsp;<i class="fas fa-plus-circle"></i></p>
                            }
                        <div className="input-group input-group-sm mb-3">
                            <input type="text" className="form-control" placeholder="Mis à jours" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fas fa-edit"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}