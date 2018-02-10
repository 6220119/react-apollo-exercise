const clientId = 
    window.location.host === 'localhost:3000'
        ? '860086339334-3vgc6p0da4uaed9cct3j0418dgvro86a.apps.googleusercontent.com'
        // for github pages
        : window.location.protocol === 'http' 
            ? '860086339334-klboehnap92r12eu8u8iii25kjjl4f9l.apps.googleusercontent.com' 
            : '860086339334-8eia0jpnqkg1lgqcdbr8d3v2jpa651u1.apps.googleusercontent.com'
          

export default {
    clientId,

    init(signedInChangedFn) {
        console.log('HAHA', process.env.GOOGLE_CLIENT_ID);

        window.gapi.load('client:auth2', () => {
            window.gapi.client
              .init({
                clientId: this.clientId,
                scope: 'profile email openid'
              })
              .then(() => {
                window.gapi.auth2.getAuthInstance().isSignedIn.listen(signedInChangedFn);
                signedInChangedFn(window.gapi.auth2.getAuthInstance().isSignedIn.get());
              });
          });
    },

    signOut() {
        window.gapi.auth2.getAuthInstance().signOut()
    },

    signIn() {
        window.gapi.auth2.getAuthInstance().signIn();
    },

    // getInfo() {
    //     return {
    //         name: window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getName(),
    //         imageUrl: window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getImageUrl(),
    //     }
    // }
};
