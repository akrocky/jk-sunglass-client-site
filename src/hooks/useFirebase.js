
import { useEffect, useState } from 'react';
import initializeFirebase from '../Pages/Login/Firebase/firebase.init';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, updateProfile, signOut } from "firebase/auth";


//initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('');
    const [allProducts, setAllProducts] = useState([])
    const [buyingProduct, setBuyingProduct] = useState({})

    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    //register
    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name }

                setUser(newUser)
                //save user to database

                saveUser(email, name, 'POST');

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                setAuthError('');
                history.replace('/')
            })
            .catch((error) => {

                setAuthError(error.message);
                // ..
            })
            .finally(() => setIsLoading(false))
    }
    //login user
    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination)
                setAuthError('')
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));

    }
    //google login

    const signInWithGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user
                saveUser(user.email, user.displayName, 'PUT');
                const destination = location?.state?.from || '/';
                history.replace(destination)


                setAuthError('')
                // ...
            }).catch((error) => {

                setAuthError(error.message)

            })
            .finally(() => setIsLoading(false));

    }
    ///observer user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {


                setUser(user)


            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe
    }, [])
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))

    }, [user.email])
    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])
    const saveUser = (email, name, method) => {
        const user = { email: email, displayName: name }


        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())


    }
    const handleBuyingProducts = (history, product) => {
        setBuyingProduct(product)

        history.push('/purchase');

    }


    return {
        user,
        admin,
        allProducts,
        buyingProduct,
        handleBuyingProducts,
        setBuyingProduct,

        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout

    }

};

export default useFirebase;