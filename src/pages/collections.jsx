import { useState } from "react";

const Collections = () => {
  return (
    <div className="section collections">
      <div className="collections-container">
        <span className="section-title">Shop by Category</span>
        <p className="section-subtitle">Discover gear tailored to your needs</p>
        <div className="collections-grid-container">
          <div className="oneCollection">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.<path d="M128 256L296 256L296 64L288 64C199.6 64 128 135.6 128 224L128 256zM128 304L128 416C128 504.4 199.6 576 288 576L352 576C440.4 576 512 504.4 512 416L512 304L128 304zM512 256L512 224C512 135.6 440.4 64 352 64L344 64L344 256L512 256z"/></svg>
            <p className="oneCollection-title">Precision in Motion</p>
            <p className="oneCollection-description">
              Engineered for speed and accuracy, our mice deliver pinpoint
              control in every flick, swipe, and clutch play
            </p>
            <button className="one-collection-btn">Explore Mice</button>
          </div>
          <div className="oneCollection">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc<path d="M96 128C60.7 128 32 156.7 32 192L32 448C32 483.3 60.7 512 96 512L544 512C579.3 512 608 483.3 608 448L608 192C608 156.7 579.3 128 544 128L96 128zM112 192L144 192C152.8 192 160 199.2 160 208L160 240C160 248.8 152.8 256 144 256L112 256C103.2 256 96 248.8 96 240L96 208C96 199.2 103.2 192 112 192zM96 304C96 295.2 103.2 288 112 288L144 288C152.8 288 160 295.2 160 304L160 336C160 344.8 152.8 352 144 352L112 352C103.2 352 96 344.8 96 336L96 304zM208 192L240 192C248.8 192 256 199.2 256 208L256 240C256 248.8 248.8 256 240 256L208 256C199.2 256 192 248.8 192 240L192 208C192 199.2 199.2 192 208 192zM192 304C192 295.2 199.2 288 208 288L240 288C248.8 288 256 295.2 256 304L256 336C256 344.8 248.8 352 240 352L208 352C199.2 352 192 344.8 192 336L192 304zM208 384L432 384C440.8 384 448 391.2 448 400L448 432C448 440.8 440.8 448 432 448L208 448C199.2 448 192 440.8 192 432L192 400C192 391.2 199.2 384 208 384zM288 208C288 199.2 295.2 192 304 192L336 192C344.8 192 352 199.2 352 208L352 240C352 248.8 344.8 256 336 256L304 256C295.2 256 288 248.8 288 240L288 208zM304 288L336 288C344.8 288 352 295.2 352 304L352 336C352 344.8 344.8 352 336 352L304 352C295.2 352 288 344.8 288 336L288 304C288 295.2 295.2 288 304 288zM384 208C384 199.2 391.2 192 400 192L432 192C440.8 192 448 199.2 448 208L448 240C448 248.8 440.8 256 432 256L400 256C391.2 256 384 248.8 384 240L384 208zM400 288L432 288C440.8 288 448 295.2 448 304L448 336C448 344.8 440.8 352 432 352L400 352C391.2 352 384 344.8 384 336L384 304C384 295.2 391.2 288 400 288zM480 208C480 199.2 487.2 192 496 192L528 192C536.8 192 544 199.2 544 208L544 240C544 248.8 536.8 256 528 256L496 256C487.2 256 480 248.8 480 240L480 208zM496 288L528 288C536.8 288 544 295.2 544 304L544 336C544 344.8 536.8 352 528 352L496 352C487.2 352 480 344.8 480 336L480 304C480 295.2 487.2 288 496 288z"/></svg>
            <p className="oneCollection-title">Feel Every Stroke</p>
            <p className="oneCollection-description">
              Experience tactile feedback, rapid response, and satisfying
              keystrokes designed for competitive play and daily grind alike
            </p>
            <button className="one-collection-btn">Discover Keyboards</button>
          </div>
          <div className="oneCollection">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.<path d="M160 288C160 199.6 231.6 128 320 128C408.4 128 480 199.6 480 288L480 325.5C470 322 459.2 320 448 320L432 320C405.5 320 384 341.5 384 368L384 496C384 522.5 405.5 544 432 544L448 544C501 544 544 501 544 448L544 288C544 164.3 443.7 64 320 64C196.3 64 96 164.3 96 288L96 448C96 501 139 544 192 544L208 544C234.5 544 256 522.5 256 496L256 368C256 341.5 234.5 320 208 320L192 320C180.8 320 170 321.9 160 325.5L160 288z"/></svg>
            <p className="oneCollection-title">Next-Level Audio</p>
            <p className="oneCollection-description">
              Immerse yourself in every battle, beat, and broadcast with rich,
              detailed sound and crystal-clear comms
            </p>
            <button className="one-collection-btn">Browse Headsets</button>
          </div>
          <div className="oneCollection">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.<path d="M448 128C554 128 640 214 640 320C640 426 554 512 448 512L192 512C86 512 0 426 0 320C0 214 86 128 192 128L448 128zM192 240C178.7 240 168 250.7 168 264L168 296L136 296C122.7 296 112 306.7 112 320C112 333.3 122.7 344 136 344L168 344L168 376C168 389.3 178.7 400 192 400C205.3 400 216 389.3 216 376L216 344L248 344C261.3 344 272 333.3 272 320C272 306.7 261.3 296 248 296L216 296L216 264C216 250.7 205.3 240 192 240zM432 336C414.3 336 400 350.3 400 368C400 385.7 414.3 400 432 400C449.7 400 464 385.7 464 368C464 350.3 449.7 336 432 336zM496 240C478.3 240 464 254.3 464 272C464 289.7 478.3 304 496 304C513.7 304 528 289.7 528 272C528 254.3 513.7 240 496 240z"/></svg>
            <p className="oneCollection-title">Control the Action</p>
            <p className="oneCollection-description">
              Whether console or PC, take full command with ergonomic,
              responsive controllers built for serious gameplay
            </p>
            <button className="one-collection-btn">View Controllers</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Collections;
