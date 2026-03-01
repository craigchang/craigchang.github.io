---
layout: page
title: NATCAR Design Project
---

<!-- youtube iframe -->
<div class="iframe-resp-container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/0bBvv3uwCsM" frameborder="0" allowfullscreen></iframe>
</div>

## Overview

The [NATCAR Design Project](https://ece.ucdavis.edu/natcar) is an annual design competition where teams construct an autonomous race car that navigates a preset track in the shortest time possible. The core components of the NATCAR feature a microcontroller implementing PID (Proportional-Integral-Derivative) control algorithm for stable navigation, an optical sensor calibrated to detect the 1-inch wide white track, and a high-torque analog servo for precise steering and high-speed maneuvering. The project was a collaborative effort within a team of three talented engineers.

## Tools and Technologies

* Languages: C/C++ (optimized for embedded performance)
* Hardware: ARM Cortex-M3 (Stellaris LM3S8962 Microcontroller), Parallax TSL1401-DB Linescan Optical Sensor, Futaba S3010 analog servo
* IDE: Keil uVision
* Control Theory: PID (Proportional-Integral-Derivative) Logic
* Peripherals: Optical Sensor Arrays, Analog High-Torque Servos, PWM Steering Control

## Microcontroller

![Microcontroller]({{'/images/microcontroller.jpg' | relative_url}}){: class="right" }
The vehicle's primary component is operated by the **Stellaris LM3S8962**, an ARM Cortex-M3 based microcontroller. It serves as a central hub for all hardware-software integration, managing real-time I/O interfaces between the optical sensor and the steering servo. We developed and deployed the embedded firmware using the **Keil uVision IDE**, writing optimized C/C++ code to handle interrupt-driven sensor polling and PID control logic. The environment allowed for high-level debugging and performance tuning of the car's navigation algorithm.
{% include newline.html clear="right" %}

## Optical Sensing

![Optical_Sensor]({{'/images/optical_sensors.jpg' | relative_url}}){: class="left" }
The vehicle's primary vision is the **Parallax TSL1401-DB Linescan Optical Sensor**, which utilizes an array of phototransistors to convert light into EHPs (Electron-Hole Pairs). This process generates a measurable voltage proportional to the white track's brightness.

The module is self-contained and requires no additional external hardware. It relies on a dedicated DC voltage source and custom firmware logic to function. We implemented PID control logic to analyze the linescan data, allowing the car to anticipate and correct for track deviations instantaneously. The sensor was placed on an adjustable mount in front of the car to fine-tune the sensor's height and pitch, as well as to account for high sensitivity to ambient lighting to ensure a high-contrast signal between the white reflective tape and the dark floor surface.
{% include newline.html clear="left" %}

## Steering
![Analog_Servo]({{'/images/servo.jpg' | relative_url}}){: class="right" }
The vehicle's primary steering is actuated by the **Futaba S3010 analog servo**, driven by a 50Hz PWM (Pulse-Width Modulation) signal. To prevent mechanical damage, we performed a boundary calibration to ensure maximum steering range to a pulse width of 0.9 ms and 2.1 ms, with 1.5 ms serving as the neutral center position. Modulating the pulse width below 1.5 ms actuated a counter-clockwise rotation (for left turns), while modulating the pulse width above 1.5 ms actuated a clockwise rotation (for right turns). This mechanical output was the final stage of our control loop; the PID algorithm processed real-time data from the optical sensor, which dynamically adjusted the PWM values, keeping the car centered on the track.
{% include newline.html clear="right" %}

## Technical Challenges

The NATCAR project presented several engineering hurdles that required iterative testing. Below are the primary challenges encountered during development:

High-Speed Stability (PID Tuning): Finding the balance between speed and stability was the most significant challenge. A simple "if-else" logic for steering caused the car to oscillate (wobble) violently at high speeds. Implementing a PID control loop was essential to smooth out these movements, requiring extensive field testing to tune the proportional, integral, and derivative constants for sharp turns versus straightaways.

Signal Noise & Lighting Interference: The optical sensors were highly sensitive to ambient infrared light in the room. This often caused the car to "lose" the track or detect ghost lines. To solve this, we designed a custom sensor shroud to block external light and implemented a software thresholding filter to ensure the MCU only responded to the high-contrast signal of the white tape.

Latency in the Control Loop: At top speeds, even a few milliseconds of delay between sensing the line and moving the servo could result in the car flying off the track. Optimizing the microcontroller for efficiency—minimizing heavy calculations and optimizing the sensor polling rate was critical to ensuring the steering response was fast enough to handle the course's complex curves.





