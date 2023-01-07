// Copyright (c) 2022 Ashley Monaghan All rights reserved
//
// Created by: Ashley Monaghan
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2OR-Unit-6-04/sw.js", {
    scope: "/ICS2OR-Unit-6-04/",
  })
}

/**
 * This function displays an alert.
 * Math
 */
window.onload = function () {
  const params = new URLSearchParams(document.location.search)

  // input
  const radius = params.get("r")
  console.log(radius)

  // process
  const volume = (4.0 / 3.0) * Math.PI * Math.pow(radius, 3)
  const dimensions = "<ul>\n<li>r = " + radius + "</li>\n</ul>"

  // output
  document.getElementById("dimension").innerHTML = dimensions
  document.getElementById("volume").innerHTML =
    "The volume is: " + volume.toFixed(2) + " cm³!"
}
