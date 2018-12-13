import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default class Manga extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      mangaTracked: {},
      isLoaded: false,
      error: null,
      mangaEntity: {},
      isPushed: false,
      imgErrors: 0,
    };

    this.choseManga = this.choseManga.bind(this);
    this.addDefaultSrc = this.addDefaultSrc.bind(this);
    this.followManga = this.followManga.bind(this);
    this.sendAlertContent = this.sendAlertContent.bind(this);
  }

  choseManga() {
    fetch("https://localhost:8443/getMangaTracked/" + this.props.manga.href)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            mangaTracked: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );

    this.setState({
      modal: !this.state.modal
    });
  }

  addDefaultSrc(ev) {
    if(this.state.imgErrors === 0) {
      ev.target.src = this.props.manga.img;
      this.setState({
        imgErrors: this.state.imgErrors +1
      });
    }
    else if(this.state.imgErrors === 1) {
      ev.target.src = this.props.manga.img;
      this.setState({
        imgErrors: this.state.imgErrors + 1
      });
    } else {
      ev.target.src = "/robot-error-codes.png";
    }
  }

  sendAlertContent(param) {
    this.props.callback(param);
  }

  sendSuccessAlert() {
    return {
      content: "Bravo ! Vous suivez maintenant " + this.props.manga.title + ".",
      class: "info"
    };
  }

  sendErrorAlert() {
    return {
      content:
        "Erreur ! Vous n'avez pas pu suivre " + this.props.manga.title + ".",
      class: "danger"
    };
  }

  followManga() {
    let mangaSend = {
      title: this.props.manga.title,
      mangadexUrl: this.state.mangaTracked.url,
      currentChapter: "0"
    };

    fetch("https://localhost:8443/mangas", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(mangaSend)
    })
      .then(res => res.json())
      .then(
        result => {
          console.log("dans le result ok");
          this.setState({
            isPushed: true,
            mangaEntity: result
          });
          this.sendAlertContent(this.sendSuccessAlert());
        },
        error => {
          console.log("dans le result erreur");

          this.setState({
            isPushed: true,
            error
          });
          this.sendAlertContent(this.sendSuccessAlert());
        }
      );

    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { manga } = this.props;

    const mangaTitle =
      manga.title.length > 30
        ? manga.title.substring(0, 30) + "..."
        : manga.title;

    return (
      <div className="col-sm-3">
        <div className="card border-0">
          <img
            className="card-img-top"
            src={manga.imgFixed}
            alt="Manga cover"
            onClick={this.choseManga}
            onError={this.addDefaultSrc}
          />
          <div className="card-body">
            <h5
              className="card-title"
            >
              {mangaTitle}
            </h5>
          </div>
        </div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.choseManga}
          className={this.props.choseManga}
        >
          <ModalHeader toggle={this.toggle} className="modal-title">
            Suivre ce manga ?
          </ModalHeader>
          <ModalBody>
            <div className="container">
              <div className="row">
                <div className="col-sm-4">
                  <img
                    className="img-modal"
                    src={this.state.mangaTracked.imgSrc}
                    alt="Manga cover"
                  />
                </div>
                <div className="col-sm-8">
                  <h2 className="manga-title">{mangaTitle}</h2>
                  <h3 className="chap-title">
                    Dernier chapitre: {this.state.mangaTracked.chapterNumber}
                  </h3>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.choseManga}>
              Annuler
            </Button>
            <Button color="primary" onClick={this.followManga}>
              OK
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
