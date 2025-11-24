---
title: 4.1 Helipad Structure Logic
summary: In scripts 4.1, it is possible to have a building in your map that works as a helipad; learn how to set it up.
type: [TT 4.1]
author: Mauler
skill: 3
---

***In scripts 4.1, it is possible to have a building in your map that works as a helipad. It will be totally separate from the weapons factory/airstrip in that you will be able to buy helicopters even if the war factory/airstrip is down and you will be able to buy ground vehicles if the helipad is down. You can even have someone buying a helicopter and someone else buying a ground vehicle at the same time.***

Firstly, in order to use this functionality you need to be using the sidebar in your map.

Follow this tutorial: [Renegade Sidebar Tutorial](/tutorial/other/renegade-sidebar-tutorial)

Make sure to read part 2 and follow that.

You also require scripts 4.1 so make sure you have it installed and working in LevelEdit.

You also need the attached **helipad_cinematic.txt** file in your map mix file (it relies on the `XG_HD_HTraj.w3d` file from the stock Renegade always.dat file).

Also, open the `C&C_blah_tt.ini` file you made in the sidebar tutorial and add the following:

```
[General]
VehicleFactoryVehicleLimit=x
AirFactoryVehicleLimit=y
```

*`x` is the number of ground vehicles players are allowed to build, `y` is the number of air vehicles. The limits are separate.*

---

## Setting Up the Helipads

First, place a building in your map to act as the helipad—create it like any other building (MCTs, PTs, damage aggregates, etc.).

Then open LevelEdit and open your map.

### 1. Create the Fly‑In Cinematic Object
Create a new preset under **Simple**. This will be the helipad fly‑in cinematic object.

Configure it as follows:

- Untick **DefaultHibernationEnable**
- Tick **NotTargetable**
- Tick **IsEditorObject**
- Tick **IsHiddenObject**
- Leave all other settings default
- Attach the script **Test_Cinematic**
- Parameter: `helipad_cinematic.txt`

---

### 2. Create the Landing Position Objects

These determine where helicopters will fly in.

You need **one for GDI** and **one for Nod**.

Create each as a copy of **Dave's Arrow** preset with **no changes**.

---

### 3. Create Air Factory Instances

Go to **Buildings → Air Factory**. Create one instance for each team.

If you do not see "Air Factory", 4.1 is not installed correctly.

Set up this preset like any other building, then set:

```
Building Type: Helipad
LandingPosDistance: 1000
CinematicTimer: 14.0
CinematicSlotIndex: 4
Landing Position Object: (the landing position object preset created earlier)
Fly‑In Cinematic Object: (the fly-in cinematic object preset)
```

**No special scripts are required.**

Next:

- Place the helipad building controllers as normal.
- Place **2–3 landing position objects** (for the correct team) around the helipad at ground level. These determine helicopter landing spots.

> **You cannot have more than one helipad per team — the logic does not support it.**

---

## War Factory / Airstrip Adjustments

To prevent buying helicopters at the war factory / airstrip:

- Create temp presets (or edit existing temp presets).
- Tick **BuildGroundOnly**.

---

## Flying Requirements

Ensure all normal flying‑map requirements are met:

- Tick **Allow Flying Vehicles** under *Edit → Level Settings*
- Generate flight data (part of pathfinding)
- Ensure you have a proper flight roof

---

# helipad_cinematic.txt

```
-1  Create_Object,      3, "XG_HD_HTraj",          0, 0, 0, 0
-1  Play_Animation,     3, "XG_HD_HTraj.XG_HD_HTraj", 0
-1  Attach_to_Bone,     4, 3, "BN_Trajectory"
-437 Destroy_Object,    3
```
