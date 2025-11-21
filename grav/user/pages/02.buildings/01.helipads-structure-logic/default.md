---
title: 4.1 Helipad Structure Logic
body_classes: title-center title-h1h2
---

***In scripts 4.1, it is possible to have a building in your map that works as a helipad. It will be totally separate from the weapons factory/airstrip in that you will be able to buy helicopters even if the war factory/airstrip is down and you will be able to buy ground vehicles if the helipad is down. You can even have someone buying a helicopter and someone else buying a ground vehicle at the same time.***

Firstly, in order to use this functionality you need to be using the sidebar in your map.

Follow this tutorial [http://multiplayerforums.com/index.php?/topic/2980-renegade-sidebar-tutorial/](https://multiplayerforums.com/index.php?/topic/2980-renegade-sidebar-tutorial/)

to set up the sidebar (make sure to read part 2 and follow that)

You also require scripts 4.1 so make sure you have it installed and working in leveledit

You also need the attached helipad\\_cinematic.txt \\[**BELOW**\\] file in your map mix file (it relies on the XG\\_HD\\_HTraj.w3d file from the stock renegade always.dat file)

Also, open the C&amp;C\\_blah\\_tt.ini file you made in the sidebar tutorial and add the following:

```
[General]VehicleFactoryVehicleLimit=xAirFactoryVehicleLimit=y
```

x being the number of ground vehicles players are allowed to build and y being the number of air vehicles players are allowed to build (and yes the numbers are separate)To set up the helipads, firstly you need to put a building on your map to act as the helipad. Create it like any other building (give it MCTs, PTs, damage aggregates and whatever else you want for it)

Then open leveledit and open your map.

Create a new preset underneath \"simple\". This will be the helipad fly-in cinematic object. Untick the \"DefaultHibernationEnable\" checkbox. Tick the \"NotTargetable\" checkbox. Tick the \"IsEditorObject\" checkbox. Tick the \"IsHiddenObject\" checkbox. Leave all the other settings at the default. Attach the script Test\\_Cinematic to this object and give it the parameter helipad\\_cinematic.txt

Next, you need to create a landing position object. This will determine where the helicopters will fly in at.

You will need one for GDI and one for Nod. (the fly-in cinematic object is used for both teams).

Make this one a copy of the Dave's Arrow preset with no changes to the settings.

Next, go to buildings and then air factory. Create an instance of this (one for each team). If you dont see air factory in the list it means you dont have 4.1 installed properly.

Set this preset up as for any other building with all the usual settings and scripts.

Make sure to set the building type to \"helipad\"

```
Set LandingPosDistance to 1000Set CinematicTimer to 14.0Set CinematicSlotIndex to 4Set Landing Position Object to the landing position object preset created earlier.Set fly-in Cinematic Object to the fly-in cinematic object preset created earlier.
```

**No special scripts are required for this building.**Once you have done this, place the helipad building controllers as per normal for buildings. Then place several (2 or 3 works good) of the landing position objects (for the right team) around the helipad at ground level. (these will determine where the helicopters land at).

No you cant have more than one helipad per team, the logic doesn't support it.

Now you need to set up the war factory/airstrip to not build helicopters anymore and to have them be built at the helipad.

Create temp presets of the war factory and airstrip (or if you are already using temp presets, open them). The only change you need to make is to tick the BuildGroundOnly checkbox.

**Also, when using this you need to tick the allow flying vehicles checkbox under edit-level settings in LE, generate flight data (as part of pathfinding) and have a proper flight roof (i.e. all the things you normally need for a flying map).**

**Helipad\\_Cinematic.txt contents**

```
-1\tCreate_Object,\t\t3, \"XG_HD_HTraj\",\t\t\t0, 0, 0, 0-1\tPlay_Animation,\t\t3, \"XG_HD_HTraj.XG_HD_HTraj\", 0-1\tAttach_to_Bone,\t\t4, 3, \"BN_Trajectory\"-437\tDestroy_Object, 3
```