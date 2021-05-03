import React from "react";

const SignIn =({onRouteChange}) =>{
      return( 
        <main className="pa4 ba bw2 black-80">
            <form className="measure center" >
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address" name='email' >Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                    </div>
                    
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password" name='password'   >Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                    </div>
                   
                </fieldset>
                    <div className="lh-copy mt3">
                        <button type="button" onClick={onRouteChange} className="f6 link dim black" >close</button>
                    </div>
            </form>
        </main>
       );
}


export default SignIn;