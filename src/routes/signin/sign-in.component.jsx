import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignTn = () => {
const logGoogleUser = async () =>{
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
}
  return (
    <div>
      <div>SignTn</div>
      <button onClick={logGoogleUser}>Sign In with Google</button>
    </div>
  );
}

export default SignTn