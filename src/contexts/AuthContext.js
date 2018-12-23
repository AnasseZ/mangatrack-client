import React from "react";
import { apiRoot } from "../constantes/apiInformations";
import { getUserById } from "../services/UserService";

const AuthContext = React.createContext();

const tokenName = "auth_token";

class AuthProvider extends React.Component {

  constructor() {
    super();
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.verifyUser = this.verifyUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.updateError = this.updateError.bind(this);
    this.updateIsAuth = this.updateIsAuth.bind(this);

    this.state = {
      isAuth: false,
      apiRoot: apiRoot,
      token: "",
      userId: "" ,
      user: null,
      error: null
    };
  }

  login() {
    alert(this.state.apiRoot);
    setTimeout(() => this.setState({ isAuth: true }), 1000);
  }

  componentDidMount() {
    this.verifyUser();
  }

  logout() {
    this.updateIsAuth(false);
    localStorage.removeItem(tokenName);
  }

  updateUser(user) {
    this.setState({ user: user });
  }

  updateError(error) {
    this.setState({ error: error });
  }

  updateIsAuth(isAuth) {
    this.setState({ isAuth: isAuth });

  }

  verifyUser() {
    localStorage.setItem(tokenName, "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1NDU1MDUzMTAsImV4cCI6MTU1Mzk0OTc1NCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoibWFoIn0.NNqgNj3hozMZf9YbHqymDfjA0Rum2a8twt3__PZnazDqhDkmsdaqdDHaEcIHBCuhKG9N51_VTZftNL-U9XbQ7UKniEivmZg5K7ZP4rNCdic9QXAOl3l5thLxKHWch1usGvNktfXdSbOI32bfMRZR3ZZZx5zA5vg4j24yttv-_5j_GS1vt7qW8muj22YD88sxuFacXBnr_irChBfyh2DuXefcOHrVzXHVJequJRzaVl_6es7ekne8XyMl7CoeR4Xbs6d6xFlY6MDfaK4wRt8cnKdArkkraA_t8syCvHHiEpSnje240TLxlFkcrjLOS5VseY3zemLVUjlmWPJZSl7GWyDA5uBUKenvM8XLer4nKRx5iOuObFKjiQVnGQ0Yy8CxixDFVkgNgFmVM5xHl6YLTf25oOsVsHjcDjL40IReW6mh_YGMYI08uVE4fFYfcUDfBtRDSEFTzdsOdse8wVuwaPAuxxzQZWVhShh9ly1zaLNcUYrJ8pbuuKE9rMyh2gDP7maNgdt3Xr7iCfptOsHGiQ_G2FO6QUxumpJ7urgyZzXmfFq9sJ4vM4F-Mrh2r0lnQK5basGB6hArtlKCoJULZ0lFTadTS5XQ7A_feQnK_v-ixVWa9LUqrxP5VN2fClz4m7-kX550h_FsHYomCxGd9RaN6OrpN1AEvvlt4YxdG5w");
    localStorage.setItem(userId, "a0b9e3cd-51a0-42ee-9438-e6a89574dca9");
    let tokenStored = localStorage.getItem(tokenName);
    let userId = localStorage.getItem("userId");


    console.log(tokenStored, " token dans le localstore");
    console.log(userId, " userId dans le localstore");

    if (tokenStored !== null && userId !== "") {
      // envoyer au serveur le token pour recuperer son profil
      getUserById(userId, tokenStored, this.updateUser, this.updateError)
      if (this.state.user !== null && this.state.error === null/* token valide */) {
        // On sauvegarde le token dans le localStorage pour la prochaine reouverture de l'appli
        // user OK
        console.log("user bien recuperer", this.state.user);
        this.updateIsAuth(true);        
      } else {
        // Probleme lors de la récupération de l'user
        console.log("l'erreur", this.state.error)
        localStorage.setItem(tokenName, "");
        this.updateIsAuth(false);
      }
    }

  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          apiRoot: this.state.apiRoot,
          login: this.login,
          logout: this.logout
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
