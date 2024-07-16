import { useCallback, useEffect, useRef, useState } from 'react';
import Styles from './passwordJenerator.module.css'
const PasswordJenerator = () => {

    const [length,setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState();

    const passwordRef = useRef(0);
    // let pass;
    const copyPasswordToClipboard = useCallback(()=>{
        passwordRef.current?.select();
        console.log(passwordRef.current.value)
        
        window.navigator.clipboard.writeText(password)
    },[password])

    const genPass = useCallback(() => {

        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let pass = "";
        if (numberAllowed) {
            str += '0123456789';
        }
        if (charAllowed) {
            str += '!@#$%^&*()~';
        }
 

        for (let i = 0; i < length ; i++) {

            let size = Math.floor(Math.random() * str.length);
            pass += str.charAt(size);


        }

        setPassword(pass)


    },[length,numberAllowed,charAllowed,setPassword])

    useEffect(()=>{
        genPass()

    },[length,numberAllowed,charAllowed,setPassword])


    return (<>

        <div className={Styles.cg}>
            <div className={Styles.password}>
                <div className={Styles.pass}>
                    <input className={Styles.pw} type="text" placeholder="Password" readOnly value={password}ref={passwordRef} />
                    <button className={Styles.copyBtn} onClick={copyPasswordToClipboard} >Copy</button>

                </div>

            </div>

            <div className={Styles.cursorAndCheck}>
                <input type="range" className={Styles.range} onChange={(e)=> setLength(e.target.value)}  defaultValue={8} />
                <span>{length}</span>
                <label htmlFor="01" className={Styles.label}>
                    <input id='01' type="checkbox" onChange={() => setNumberAllowed((prev) => !prev)} name='number' />Number
                </label>
                <label htmlFor="02" className={Styles.label}>
                    <input id='02' type="checkbox" onChange={() => setCharAllowed((prev) => !prev)} />Character
                </label>
            </div>

        </div>

    </>)

}

export default PasswordJenerator;