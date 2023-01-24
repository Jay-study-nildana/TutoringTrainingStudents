html {
  background: #100a1c;
  background-image:
    radial-gradient(50% 30% ellipse at center top, #201e40 0%, rgba(0,0,0,0) 100%),
    radial-gradient(60% 50% ellipse at center bottom, #261226 0%, #100a1c 100%);
  background-attachment: fixed;
  color: #6cacc5;
}

body {
  color: #6cacc5;
  font: 300 18px/1.6 "Source Sans Pro",sans-serif;
  margin: 0;
  padding: 5em 0 2em;
  text-align: center;
}

h1 {
  font-weight: 300;
  margin: 0;
}

/* Gradient text only on Webkit */
.warning {
  background: -webkit-linear-gradient(45deg,  #c97874 10%, #463042 90%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #8c5059;
  font-weight: 400;
  margin: 0 auto 6em;
  max-width: 9em;
}

.calculator {
  font-size: 28px;
  margin: 0 auto;
  width: 10em;
  
  &::before,
  &::after {
    content: " ";
    display: table;
  }
  
  &::after {
    clear: both;
  }
}

/* Calculator after dividing by zero */
.broken {
  animation: broken 2s;
  transform: translate3d(0,-2000px,0);
  opacity: 0;
}

.viewer {
  color: #c97874;
  float: left;
  line-height: 3em;
  text-align: right;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 7.5em;
  height: 3em;
}

button {
  border: 0;
  background: rgba(42,50,113, .28);
  color: #6cacc5;
  cursor: pointer;
  float: left;
  font: inherit;
  margin: 0.25em;
  width: 2em;
  height: 2em;
  transition: all 0.5s;
  
  &:hover {
    background: #201e40;
  }
  
  &:focus {
    outline: 0; // Better check accessibility

    /* The value fade-ins that appear */
    &::after {
      animation: zoom 1s;
      animation-iteration-count: 1;
      animation-fill-mode: both; // Fix Firefox from firing animations only once
      content: attr(data-num);
      cursor: default;
      font-size: 100px;
      position: absolute;
           top: 1.5em;
           left: 50%;
      text-align: center;
      margin-left: -24px;
      opacity: 0;
      width: 48px;    
    }
  }
}

/* Same as above, modified for operators */
.ops:focus::after {
  content: attr(data-ops);
  margin-left: -210px;
  width: 420px;
}

/* Same as above, modified for result */
.equals:focus::after {
  content: attr(data-result);
  margin-left: -300px;
  width: 600px;
}

/* Reset button */

.reset {
  background: rgba(201,120,116,.28);
  color:#c97874;
  font-weight: 400;
  margin-left: -77px;
  padding: 0.5em 1em;
  position: absolute;
    top: -20em;
    left: 50%;
  width: auto;
  height: auto;
  
  &:hover {
    background: #c97874;
    color: #100a1c;    
  }
  
  /* When button is revealed */
  &.show {
    top: 20em;
    animation: fadein 4s;
  }
}

/* Animations */

/* Values that appear onclick */
@keyframes zoom {
  0% { 
    transform: scale(.2); 
    opacity: 1;
  }
  
  70% { 
    transform: scale(1); 
  }
  
  100% { 
    opacity: 0;
  }
}

/* Division by zero animation */
@keyframes broken {
  0% {
    transform: translate3d(0,0,0);
    opacity: 1;
  }

  5% {
    transform: rotate(5deg);
  }

  15% {
    transform: rotate(-5deg);
  }

  20% {
    transform: rotate(5deg);
  }

  25% {
    transform: rotate(-5deg);
  }

  50% {
    transform: rotate(45deg);
  }

  70% {
    transform: translate3d(0,2000px,0);
    opacity: 1;
  }

  75% {
    opacity: 0;
  }

  100% {
    transform: translate3d(0,-2000px,0);
  }
}

/* Reset button fadein */
@keyframes fadein {
  0% {
    top: 20em;
    opacity: 0;
  }
  
  50% {
    opacity: 0;
  }
  
  100% {
    opacity: 1;
  }
}

@media (min-width: 420px) {
  .calculator {
    width: 12em;
  }
  .viewer {
    width: 8.5em;
  }
  button {
    margin: 0.5em;
  }
}