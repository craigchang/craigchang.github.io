---
layout: page
title: Projects
permalink: /projects/
---

## NATCAR Design Project

<!-- youtube iframe -->
<div class="iframe-resp-container">
	<iframe width="560" height="315" src="https://www.youtube.com/embed/0bBvv3uwCsM" frameborder="0" allowfullscreen></iframe>
</div>

Enrolled in the NATCAR design contest created by UC Davis and National Semiconductor, and sponsored by Texas Instruments. Collaborated with 2 other members to design and construct an autonomous race car that could navigate through a preset track in the shortest time possible. The race track was marked by 1-inch-wide white tape, as well as a 100 mA current underneath the tape. In order to produce an optimally fast and accurate car, the following design specifications were made:

* Track Sensing Algorithm
  - Implemented a track sensing algorithm that allows the car to determine the center of the track within its peripheral range and handle complex track orientations with sharp curves and intersections.
  - Used a Parallax TSL1401-DB Linescan Optical Sensor. The optical sensor contains phototransistors in the camera that uses light to generate EHP’s in the semiconductor.

* PID Control Algorithm
  - Implemented a PID (proportional-integral-derivative) control algorithm for closed-loop feedback. The PID control maintained a consistent car speed and handled steering while remaining on track.
  - **Proportional (P)**: Handling Present Errors. Calculated the offset distance of the current position of the car and the position of the track with respect to the car.
  - **Integral (I)**: Remembering Past Errors. Accumulated previous results from a car's initial run to prepare for similar conditions.
  - **Derivative (D)**: Predicting Future Errors. Prevented an increase in oscillation as the car approaches a sharp turn or intersection.

Software/Hardware Used:

* Freescale car chassis with DC Motor
* Keil uVision4 IDE for software development
* TI Stellaris LM3S6982 Microcontroller
* Parallax TSL1401-DB Linescan Optical Sensor
* Fubata S3010 analog servo