import React, { useContext } from "react";
import { useAuth } from "../userContext";
import { SharedUserData } from "../sharedUserData";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useAuth();
  const {
    fullname,
    setFullname,
    emaill,
    setEmaill,
    phone,
    setPhone,
    address,
    setAddress,
  } = useContext(SharedUserData);

  const ProfileInfo = () => {
    return (
      <>
        <div id="profile-info" className="profile-section">
          <span className="profile-section-title">Profile Info</span>
          <p className="profile-subsection-title">Information</p>
          <div className="profile-subsection Information">
            <span>fullname : {fullname} </span>
            <br />
            <span>email : {emaill} </span>
            <br />
            <span>phone : {phone} </span>
            <br />
            <span>address : {address} </span>
          </div>
          <p className="profile-subsection-title">Account Settings</p>
          <div className="profile-subsection Account-Settings">
            
          </div>
          <p className="profile-subsection-title">Preferences</p>
          <div className="profile-subsection Preferences"></div>
          <p className="profile-subsection-title">Account Status</p>
          <div className="profile-subsection Account-Status"></div>
        </div>
      </>
    );
  };
  const Addresses = () => {
    return (
      <div id="addresses" className="profile-section">
        <span className="profile-section-title">Addresses</span>
      </div>
    );
  };
  const Payment = () => {
    return (
      <div id="payment-methods" className="profile-section">
        <span className="profile-section-title">payment-methods</span>
      </div>
    );
  };
  const Orders = () => {
    return (
      <div id="orders" className="profile-section">
        <span className="profile-section-title">orders</span>
      </div>
    );
  };
  const Wishlist = () => {
    return (
      <div id="wishlist" className="profile-section">
        <span className="profile-section-title">wishlist</span>
      </div>
    );
  };
  const History = () => {
    return (
      <div id="history" className="profile-section">
        <span className="profile-section-title">history</span>
      </div>
    );
  };
  const Security = () => {
    return (
      <div id="security" className="profile-section">
        <span className="profile-section-title">security</span>
      </div>
    );
  };
  const userId = user?.uid || "guest";

  return (
    <div className="section profile">
      <div className="profile-container">
        <div className="profile-container-content">
          <div className="profile-container-left">
            <div className="profile-picture">
              <div className="picture"></div>
              <p className="profile-name">{fullname}</p>
            </div>
            <div className="profile-nav">
              <>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc<path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z"/></svg>
              {
                fullname
              }
              </div>
              <div className="profile-email">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc<path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"/></svg>
              {
                emaill
              }</div>
              <div className="profile-phone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc<path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/></svg>
              {
                phone
              }
              </div>
              <div className="profile-address">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc<path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"/></svg>
              {
                address
              } */}
              </>
              <a href="#profile-info">
                <div href="#profile-infos" className="profile-nav-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    Font Awesome Free v7.1.0 by @fontawesome -
                    https://fontawesome.com License -
                    https://fontawesome.com/license/free Copyright 2025
                    Fonticons, Inc
                    <path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z" />
                  </svg>
                  <span>profile infos</span>
                </div>
              </a>
              <a href="#addresses">
                <div className="profile-nav-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    Font Awesome Free v7.1.0 by @fontawesome -
                    https://fontawesome.com License -
                    https://fontawesome.com/license/free Copyright 2025
                    Fonticons, Inc
                    <path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z" />
                  </svg>
                  <span>addresses</span>
                </div>
              </a>
              <a href="#payment-methods">
                <div className="profile-nav-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    Font Awesome Free v7.1.0 by @fontawesome -
                    https://fontawesome.com License -
                    https://fontawesome.com/license/free Copyright 2025
                    Fonticons, Inc
                    <path d="M64 192L64 224L576 224L576 192C576 156.7 547.3 128 512 128L128 128C92.7 128 64 156.7 64 192zM64 272L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 272L64 272zM128 424C128 410.7 138.7 400 152 400L200 400C213.3 400 224 410.7 224 424C224 437.3 213.3 448 200 448L152 448C138.7 448 128 437.3 128 424zM272 424C272 410.7 282.7 400 296 400L360 400C373.3 400 384 410.7 384 424C384 437.3 373.3 448 360 448L296 448C282.7 448 272 437.3 272 424z" />
                  </svg>
                  <span>payment</span>
                </div>
              </a>
              <a href="#orders">
                <div className="profile-nav-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    Font Awesome Free v7.1.0 by @fontawesome -
                    https://fontawesome.com License -
                    https://fontawesome.com/license/free Copyright 2025
                    Fonticons, Inc
                    <path d="M256 144C256 108.7 284.7 80 320 80C355.3 80 384 108.7 384 144L384 192L256 192L256 144zM208 192L144 192C117.5 192 96 213.5 96 240L96 448C96 501 139 544 192 544L448 544C501 544 544 501 544 448L544 240C544 213.5 522.5 192 496 192L432 192L432 144C432 82.1 381.9 32 320 32C258.1 32 208 82.1 208 144L208 192zM232 240C245.3 240 256 250.7 256 264C256 277.3 245.3 288 232 288C218.7 288 208 277.3 208 264C208 250.7 218.7 240 232 240zM384 264C384 250.7 394.7 240 408 240C421.3 240 432 250.7 432 264C432 277.3 421.3 288 408 288C394.7 288 384 277.3 384 264z" />
                  </svg>
                  <span>orders</span>
                </div>
              </a>
              <a href="#wishlist">
                <div className="profile-nav-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    Font Awesome Free v7.1.0 by @fontawesome -
                    https://fontawesome.com License -
                    https://fontawesome.com/license/free Copyright 2025
                    Fonticons, Inc
                    <path d="M305 151.1L320 171.8L335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1L576 231.7C576 343.9 436.1 474.2 363.1 529.9C350.7 539.3 335.5 544 320 544C304.5 544 289.2 539.4 276.9 529.9C203.9 474.2 64 343.9 64 231.7L64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1z" />
                  </svg>
                  <span>wishlist</span>
                </div>
              </a>
              <a href="#history">
                <div className="profile-nav-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    Font Awesome Free v7.1.0 by @fontawesome -
                    https://fontawesome.com License -
                    https://fontawesome.com/license/free Copyright 2025
                    Fonticons, Inc
                    <path d="M320 128C426 128 512 214 512 320C512 426 426 512 320 512C254.8 512 197.1 479.5 162.4 429.7C152.3 415.2 132.3 411.7 117.8 421.8C103.3 431.9 99.8 451.9 109.9 466.4C156.1 532.6 233 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C234.3 64 158.5 106.1 112 170.7L112 144C112 126.3 97.7 112 80 112C62.3 112 48 126.3 48 144L48 256C48 273.7 62.3 288 80 288L104.6 288C105.1 288 105.6 288 106.1 288L192.1 288C209.8 288 224.1 273.7 224.1 256C224.1 238.3 209.8 224 192.1 224L153.8 224C186.9 166.6 249 128 320 128zM344 216C344 202.7 333.3 192 320 192C306.7 192 296 202.7 296 216L296 320C296 326.4 298.5 332.5 303 337L375 409C384.4 418.4 399.6 418.4 408.9 409C418.2 399.6 418.3 384.4 408.9 375.1L343.9 310.1L343.9 216z" />
                  </svg>
                  <span>history</span>
                </div>
              </a>
              <a href="#security">
                <div className="profile-nav-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    Font Awesome Free v7.1.0 by @fontawesome -
                    https://fontawesome.com License -
                    https://fontawesome.com/license/free Copyright 2025
                    Fonticons, Inc
                    <path d="M256 160L256 224L384 224L384 160C384 124.7 355.3 96 320 96C284.7 96 256 124.7 256 160zM192 224L192 160C192 89.3 249.3 32 320 32C390.7 32 448 89.3 448 160L448 224C483.3 224 512 252.7 512 288L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 288C128 252.7 156.7 224 192 224z" />
                  </svg>
                  <span>security</span>
                </div>
              </a>
              <a>    
              <div className="profile-nav-item">
                <svg
                  className="logout-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  Font Awesome Free v7.1.0 by @fontawesome -
                  https://fontawesome.com License -
                  https://fontawesome.com/license/free Copyright 2025 Fonticons,
                  Inc
                  <path d="M569 337C578.4 327.6 578.4 312.4 569 303.1L425 159C418.1 152.1 407.8 150.1 398.8 153.8C389.8 157.5 384 166.3 384 176L384 256L272 256C245.5 256 224 277.5 224 304L224 336C224 362.5 245.5 384 272 384L384 384L384 464C384 473.7 389.8 482.5 398.8 486.2C407.8 489.9 418.1 487.9 425 481L569 337zM224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L160 96C107 96 64 139 64 192L64 448C64 501 107 544 160 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480C142.3 480 128 465.7 128 448L128 192C128 174.3 142.3 160 160 160L224 160z" />
                </svg>
              </div>
              </a>
            </div>
            <div className="profile-logout">
              <button onClick={logout}>Sign out</button>
              <span>GGSTATION 2025</span>
            </div>
          </div>
          <div className="account-container-right">
            <ProfileInfo />

            <Addresses />
            
            <Payment />
            
            <Orders />
            
            <Wishlist />
            
            <History />
            
            <Security />
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
