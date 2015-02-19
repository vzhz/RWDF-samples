/*
  check UA, dpr, viewport on page load

  - check it w/setinterval every 100ms
*/

function inlineExternalCSS(_css) {
  var s = document.createElement('style');
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', _css, false);
  xmlhttp.send();
  var css = xmlhttp.responseText;
  s.innerHTML = css.toString();
  document.querySelector('head').appendChild(s);
}

function getUA() {
  return navigator.userAgent;
}

function getViewport() {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return {
    "width": w,
    "height": h
  }
}

function getDPR() {
  return window.devicePixelRatio;
}

function getBreakpoints() {
  var mqs = [];
  var allStyles = document.styleSheets;
  for (i in allStyles) {
    var sheet = allStyles[i];
    var rules = sheet["cssRules"]
    for (j in rules) {
      var m = rules[j].media || {};
      if (m["mediaText"]) mqs.push(m["mediaText"]);
    }
  }
  return mqs;
}

function getAllStyles(elem){
  "use strict";
  var style,i,l,prop,ret = {};
  if(window.getComputedStyle){     // FireFox and Chrome way
    style = window.getComputedStyle(elem, null);
    for(i = 0, l = style.length; i < l; ++i){
      prop = style[i];
      ret[prop] = style.getPropertyValue(prop);
    }
  } else if(elem.currentStyle){     // IE and Opera way
    style = elem.currentStyle;
    for(prop in style){
      if(style.hasOwnProperty(prop)){
        ret[prop] = style[prop];
      }
    }
  } else if(elem.style){            // Style from style attribute
    style = elem.style;
    for(prop in style){
      if(style.hasOwnProperty(prop)){
        if(typeof style[prop] !== 'function'){
          ret[prop] = style[prop];
        }
      }
    }
  }                               // else no joy, return empty
  return ret;
}

function alertCorrectCode(code) {
  // some fun animation first
  alert("Here's your success code!\n" + code);
}

// test string. passed true/false
function displayTestStatus(test, passed) {

}

function test() {
  var UA, DPR, vp;
  UA = getUA();
  DPR = getDPR();
  vp = getViewport();

  var correct = false

  if (UA === "Mozilla/5.0 (Linux; Android 5.0; Nexus 6 Build/XXX00X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.59 Mobile Safari/537.36") {
    correct = true;
    displayTestStatus("UA matches", true);
  } else {
    displayTestStatus("UA matches", false);
    correct = correct && false;
  };

  if (DPR === 3.5) {
    correct = correct && true;
    displayTestStatus("Device Pixel Ratio Matches", true);
  } else {
    correct = correct && false;
    displayTestStatus("Device Pixel Ratio Matches", false);
  }

  if (vp.width === 412 && vp.height === 603) {
    correct = correct && true;
    displayTestStatus("Viewport Matches", true);
  } else {
    correct = correct && false;
    displayTestStatus("Viewport Matches", false);
  }

  if (correct) alertCorrectCode("EMULATIONISFUN");
}

window.onload = test;

// need a setinterval too