import '../CSS/LoginContainer.css'
import Icon from '../assets/Icon'
import Flag from '../assets/Flag'
import ArrowDown from '../assets/ArrowDown'
export default function LoginContainer(){
   return (
        <div className="FormContainer">
            <div className="IconContainer"> 
               <header>
                  <Icon/>
               </header>
            </div>
            

            <input type="email" id="email" name="email" placeholder="E-Mail-Adresse oder Handynummer" autoComplete='off'></input>

            <button id="weiter">Weiter</button>

            <div className="separator">
               <span id="separatorText">oder</span>
            </div>           

            <button id="neuAnmelden">Neu anmelden</button>

            <div className="SprachenContainer">
               <Flag/>
               <ArrowDown/>
               <span id="sprache" >Deutsch</span>
               <span id="sprache2" >English</span>
            </div>
        </div>
        )
}