---
layout: page
title: NATCAR
---

## NATCAR Design Project

<!-- youtube iframe -->
<div class="iframe-resp-container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/0bBvv3uwCsM" frameborder="0" allowfullscreen></iframe>
</div>

The objective of the [NATCAR design project](http://www.ece.ucdavis.edu/natcar/) is to design and construct an autonomous race car that could navigate a preset track in the shortest time possible. The track is marked by 1-inch-wide reflective white tape on dark and non-reflective carpet. I collaborated in a team of 3 to produce an optimally fast and precise racecar. Several areas of development and construction include speed control circuits, track sensing circuits, and a steering control feedback loop, which were all implemented in both hardware and software.

### Microcontroller

![Microcontroller](/images/microcontroller.jpg){: class="right" }

The microcontroller used in the NATAR was called the Stellaris LM3S8962 microcontroller. The microcontroller provided important input and output interfaces between the software components and hardware components of the car. The Keil uVision IDE was used to run, test, and debug embedded application code within the microcontroller using the C/C++ language.

<br style="clear:right;"/>

### Optical Sensing

![Optical Sensor](/images/optical_sensors.jpg){: class="left" }

The optical sensor contains phototransistors in the camera that uses light to generate EHP’s in the semiconductor. The optical sensor used in the project is called the Parallax TSL1401-DB Linescan Optical Sensor Module. The optical sensor did not require external hardware, excluding the sensor itself. The optical sensor required software code and an outside voltage source to make it function. PID control logic was implemented in the code to predict and detect incoming deviations in the race track. Since the optical sensors were very sensitive to ambient lightning, the height and angle of the camera also needed to be adjusted so that the sensor could distinguish the contrast between the white reflective race track and the dark carpet. The camera was mounted at an appropriate position that was easily adjustable for testing optimal height and angle between the sensor and the race track.

<br style="clear:left;"/>

### Steering

![Servo](/images/servo.jpg){: class="right" }

The Fubata S3010 analog servo controlled the steering of the car. Before using the servo, it needed to be calibrated by performing bound checking (maximum steering range) to make sure that the pulse width signal was within the range of 0.9 ms and 2.1 ms to avoid damaging the servo. Since a default duty cycle of 7.5%, or 1.5 ms to set the servo wheel at the center, we get 4.5% duty cycle for 0.9 ms of the pulse width, and 10.5% duty cycle for 2.1 ms pulse width. Whenever the pulse width decreased below the 1.5 ms pulse width, the servo wheel would turn counterclockwise and turn the car wheels toward the left direction. Likewise, whenever the pulse width increased above the 1.5 ms pulse width, the servo wheel would turn clockwise and turn the car wheels toward the right direction. The optical sensor worked in conjunction with the servo as well. Optical data from the sensor was used to determine the location of the track and make the necessary changes to the pulse width signal to help steer the car in the right direction on the track. 

<br style="clear:right;"/>







