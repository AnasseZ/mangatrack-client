import React from "react";


export default class Manga extends React.Component {


    constructor(props) {
        super(props);
        this.choseManga = this.choseManga.bind(this);
        this.addDefaultSrc = this.addDefaultSrc.bind(this);

    }

    choseManga() {
        console.log(this.props.manga.title, "choisi !");
    }

    addDefaultSrc(ev){
        console.log("change l'url");
        ev.target.src = this.props.manga.img;
      }

    render() {
        const {manga} = this.props;

        return (
            <div className="col-sm-3">
                <div className="card border-0">
                    <img className="card-img-top" src={manga.imgFixed} alt="Manga cover" onClick={this.choseManga} onError={this.addDefaultSrc}/>
                    <div className="card-body">
                        <h5 className="card-title">
                        {
                           manga.title.length > 30 ? manga.title.substring(0,30) + "..." : manga.title
                        }
                        </h5>
                    </div>
                </div>
            </div>
        )
    }
}