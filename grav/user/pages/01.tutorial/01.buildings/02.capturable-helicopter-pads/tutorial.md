---
title: Capturable Helicopter Pads
author: zunnie
skill: 2
---

The Helipad models and textures are in zip: [CapturableHelipads.zip](https://multiplayerforums.com/applications/core/interface/file/attachment.php?id=4540)

 Temp Object-&gt;Simple-&gt;Simple\\_DSAPO\\_Versions-&gt;Simple\\_MiniConsole and name it Capturable\\_GDI\\_Helipad

 [![Image1.jpg](images/image1.jpg?resize=400)](images/image1.jpg)

 On the Physics Model tab browse for the model by clicking the folder icon and choose Open

 ![Image2.jpg](https://multiplayerforums.com/uploads/monthly_2018_03/Image2.jpg.2e687bf8492f4adb8d3015c170f95931.jpg)

 On the Settings tab set Health to 2 and HealthMax to 500,

 Skin and ShieldType both to CNCMCTSkin with a DamagePoints of 0.750 and DeathPoints 0.000

 Click the Letter icon to choose the Helipad name from the category Enc and set Encyclopedia Type to Building

 ![Image3.jpg](https://multiplayerforums.com/uploads/monthly_2018_03/Image3.jpg.eff8a324ea451d4d19bd9eead6314f17.jpg)

 Still on the Settings tab set PlayerType to Unteamed and Radar Blip Type to Stationary

 ![Image4.jpg](https://multiplayerforums.com/uploads/monthly_2018_03/Image4.jpg.2cac76f7b0bfbe2cb3c62cb42736e7f4.jpg)

 Now MAKE your Helipad on the map

 [![Image5.jpg](https://multiplayerforums.com/uploads/monthly_2018_03/Image5.thumb.jpg.1c5fb30699c31c41af49248fc728ffc1.jpg)](https://multiplayerforums.com/uploads/monthly_2018_03/Image5.jpg.a81b7809895988a6bfe48851d3ccdfed.jpg)

 Goto the Scripts tab for the properties of the Helipad and select Type: z\\_Capturable\\_Helipad and set the Name Parameter of Owner to -2

 ![Image6.jpg](https://multiplayerforums.com/uploads/monthly_2018_03/Image6.jpg.c7f884078f5b24dbd7164bafe555f76c.jpg)

 Now note the ID of the Helipad in a textfile for later use:

 ![Image7.jpg](https://multiplayerforums.com/uploads/monthly_2018_03/Image7.jpg.b90d939d1212ea942c01f80f742e3cfb.jpg)

 Now TEMP the Simple\\_MiniConsole and name it Capturable\\_GDI\\_Helipad\\_Terminal

 ![Image8.jpg](https://multiplayerforums.com/uploads/monthly_2018_03/Image8.jpg.4483127c6be3a35603219e60337ab3d9.jpg)

 On the Settings tab for the Terminal set the Skin and Shield Type to Blamo and Damage and Deathpoints to 0.000

 We want this Terminal to grant a Orca so we click the Letter icon and choose the Orca name from Enc category:

 ![Image9.jpg](https://multiplayerforums.com/uploads/monthly_2018_03/Image9.jpg.2a89dbe7bd010ebb91ebcc695554ca0a.jpg)

 Make note of the GDI Orca exact multiplayer presetname, in our case this would be the original preset aka CnC\\_GDI\\_Orca (case sensitive):

 ![Image10.jpg](https://multiplayerforums.com/uploads/monthly_2018_03/Image10.jpg.38905f5538ec7280d48af3bf440933a8.jpg)

 Next we MAKE and position a Daves Arrow on TOP of the Helipad and move it UP on the Z-axis until it floats like 3 orca's high in the air above the Helipad like so:

 [![Image14.jpg](https://multiplayerforums.com/uploads/monthly_2018_03/Image14.thumb.jpg.f9d39dec7dce489f45cc1ea1973be10f.jpg)](https://multiplayerforums.com/uploads/monthly_2018_03/Image14.jpg.3fafe937ac2c17be248d7b77d5503be0.jpg)

 Note the ID of this Arrow (PS: Do NOT delete the arrow, you must leave it on the map)  
![Image15-arrowid.jpg](https://multiplayerforums.com/uploads/monthly_2018_03/Image15-arrowid.jpg.2aa367d068cda5c9d082dce9810b8be3.jpg)

 Go back to the Helipad Terminal on the map and goto its properties and the Scripts Tab, add the following script to it \"z\\_Capturable\\_Helipad\\_Terminal\"

 with the settings as displayed below.

 HelipadID would be the ID of the Helipad on the map we created first, in this example ID number 100000

 Preset would be the vehicle to create at the location of the Daves Arrow we placed so CnC\\_GDI\\_Orca and 100003

 An Orca costs $900 in Renegade so we enter that as the Cost for it.

 [![Image16.jpg](https://multiplayerforums.com/uploads/monthly_2018_03/Image16.thumb.jpg.c0badcdd20a5d712a7a2f3b57baedbc3.jpg)](https://multiplayerforums.com/uploads/monthly_2018_03/Image16.jpg.0ca1bac891f1893dd79dc503d4a6f6e8.jpg)

 Endresult should look like this for the Helipad Terminal:

 ![Image17.jpg](https://multiplayerforums.com/uploads/monthly_2018_03/Image17.jpg.71767d22c9eba4a2da9fbeb58ae9e601.jpg)

 You're done:  
![Image18.jpg](https://multiplayerforums.com/uploads/monthly_2018_03/Image18.jpg.d7d6e3fe3a24e6e8931718723385c70e.jpg)
