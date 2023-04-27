import {Component} from 'react'
import './netflix.css'

class Netflix extends Component{
    
    render(){
        return <div className='netflix'>
                <div className='netflix_nav'>
                    <h1 style={{color:'red'}}>NETFLIX</h1>
                    <div>
                        <button>Sign in</button>
                        <button>Register</button>
                    </div>
                </div>
                <div className='netflix_body'>
                    <h1 style={{fontSize:'3rem'}}>Unlimited movies, TV Shows and more.</h1>
                    <p>Watch anywhere. Cancel anytime.</p>
                    <p>Ready to watch? Enter your email to create or restart your membership</p>
                </div>
               </div>
    }
}


export default Netflix