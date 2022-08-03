import React from "react";
import './Settings.css';
import * as CgIcons from "react-icons/cg";
import {ToggleButtonOnOff} from './ToggleButtonOnOff';
import { Button} from 'react-bootstrap';


export const Profile = () => {
  return (
  <>
    <div className='text-center'>
      <h1>Settings/Profile > </h1>
    </div>
    <div className='heading'>
        {' '}Profile
        </div>
        <div className='username'>
        Username: abc</div>
        <div className='profile'>
        </div>
        <div className='form'>
        First Name:<div className='formAns'>ABCD</div>
        Last Name:<div className='formAns'>EFGH</div>
        Date Of Birth:<div className='formAns'>MM/DD/YYYY</div>
        Gender:<div className='formAns'>F</div>
        Country:<div className='formAns'>USA</div>
        Address1:<div className='formAns'>1562 Michael Street</div>
        Address2:<div className='formAns'></div>
        City:<div className='formAns'>Houston</div>
        County/State:<div className='formAns'>Texas</div>
        Zip Code:<div className='formAns'>77030</div>

      </div>
      <div className='button'>
        <Button> Edit </Button>
        </div>
        </>
  );
};

export const Security = () => {
  return (
  <>
    <div className='text-center'>
      <h1>Settings/Security > </h1>
    </div>
    <div className='heading'>
            {' '}Security
            </div>
            <div className='username'>
                    Username: abc</div>
                    <div className='form'>
                    Email:<div className='formAns'>abcde@gmail.com</div>
                    Password:<div className='formAns'>************</div>
                    Phone:<div className='formAns'>+1 713-799-7593</div>
                    Security Question:<div className='formAns1'>What primary school did you attend?</div>
                    Security Answer:<div className='formAns1'>**********</div>

                  </div>
                   <div className='button'>
                           <Button> Edit </Button>
                           </div>
            </>
  );
};

export const Notification = () => {
  return (
  <>
    <div className='text-center'>
      <h1>Settings/Notification > </h1>
    </div>
    <div className='heading'>
                  {' '}Notification
                  </div>
                  <div className='username'>
                  Username: abc</div>
     <div className='notification'>
     Emails: <ToggleButtonOnOff />
     Messages: <ToggleButtonOnOff />
     </div>
     </>
  );
};

export const About = () => {
  return (
  <>
    <div className='text-center'>
      <h1>Settings/About > </h1>
    </div>
    <div className='heading'>
                      {' '}About
                      </div>
                      <div className='username'>
                      Website Name</div>
                      <div className='content'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut faucibus nisi. Suspendisse sed lorem suscipit, pellentesque metus non, semper massa. Praesent a tortor vel metus venenatis luctus id at eros. Curabitur in odio vitae odio sagittis volutpat auctor eu nibh. Fusce sodales lorem non arcu efficitur, vitae rutrum urna dignissim. Aliquam et risus ex. Morbi quis quam nec felis semper ullamcorper. Fusce laoreet justo enim, in ullamcorper enim gravida non. Sed consequat imperdiet est ut facilisis. Nulla in pretium lectus, et ornare dolor.

                                               Praesent facilisis rutrum neque, vitae ullamcorper metus lobortis eu. In sed ultrices diam. Vestibulum gravida sit amet ligula eget elementum. Suspendisse potenti. </div>
                      </>
  );
};