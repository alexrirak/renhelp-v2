---
title: Capturable Helicopter Pads
author: zunnie
skill: 2
forum_url: https://multiplayerforums.com/topic/711-capturable-repair-pads/
---

## Overview

This tutorial explains how to create capturable helipads that allow players to purchase an aircraft (such as the Orca) once captured.  
You will set up the helipad object, apply the correct scripts, and configure a terminal that spawns an aircraft above the pad.

The Helipad models and textures are in zip: [CapturableHelipads.zip](files/CapturableHelipads.zip) (or at [MPF](https://multiplayerforums.com/applications/core/interface/file/attachment.php?id=4540))

---

## 1. Create the Base Helipad Object

**Temp Object → Simple → Simple_DSAPO_Versions → Simple_MiniConsole**  
Name it: **`Capturable_GDI_Helipad`**

[![Image1.jpg](images/Image1.jpg?resize=400)](images/Image1.jpg)

---

## 2. Physics Model

On the **Physics Model** tab:

Click the folder icon and browse to select the helipad model.

[![Image2.jpg](images/Image2.jpg?resize=400)](images/Image2.jpg)

---

## 3. Settings Tab (Base Helipad)

Set:

- **Health:** `2`
- **HealthMax:** `500`
- **Skin:** `CNCMCTSkin`
- **ShieldType:** `CNCMCTSkin`
- **DamagePoints:** `0.750`
- **DeathPoints:** `0.000`

Assign its encyclopedia entry:

Click the **Letter icon**, choose the Helipad name from category **Enc**, set:

- **Encyclopedia Type:** `Building`

[![Image3.jpg](images/Image3.jpg?resize=400)](images/Image3.jpg)

Still on the Settings tab:

- **PlayerType:** `Unteamed`
- **Radar Blip Type:** `Stationary`

[![Image4.jpg](images/Image4.jpg?resize=400)](images/Image4.jpg)

---

## 4. Place the Helipad

Now **MAKE** your Helipad on the map.

[![Image5.jpg](images/Image5.jpg?resize=400)](images/Image5.jpg)

---

## 5. Helipad Script

Go to **Scripts tab** for the helipad and set:

- **Type:** `z_Capturable_Helipad`
- **Name Parameter of Owner:** `-2`

[![Image6.jpg](images/Image6.jpg?resize=400)](images/Image6.jpg)

Record the ID of the Helipad for later use.

[![Image7.jpg](images/Image7.jpg?resize=400)](images/Image7.jpg)

---

## 6. Create the Terminal Console

Temp the **Simple_MiniConsole** and name it:`Capturable_GDI_Helipad_Terminal`

[![Image8.jpg](images/Image8.jpg?resize=400)](images/Image8.jpg)

### Terminal Settings

On the Settings tab for the Terminal set

- **Skin:** `Blamo`
- **Shield Type:** `Blamo`
- **DamagePoints:** `0.000`
- **DeathPoints:** `0.000`

Next, choose the aircraft it will grant:

Click the **Letter icon**, choose the **Orca** from the **Enc** category.

[![Image9.jpg](images/Image9.jpg?resize=400)](images/Image9.jpg)

Record the exact multiplayer preset name of the Orca: in our case this would be the original preset aka `CnC_GDI_Orca` (case-sensitive)

[![Image10.jpg](images/Image10.jpg)](images/Image10.jpg)

---

## 7. Create the Spawn Arrow

MAKE and position a **Daves Arrow** on TOP of the helipad.  
Move it **up on the Z-axis** until it floats approximately **3 Orcas above the helipad**.

[![Image14.jpg](images/Image14.jpg?resize=400)](images/Image14.jpg)

Record the ID of the Arrow (do NOT delete the arrow):

[![Image15.jpg](images/Image15.jpg?resize=400)](images/Image15.jpg)

---

## 8. Add Terminal Script

Return to **Helipad Terminal** → **Properties** → **Scripts tab**  
Add the following script:`z_Capturable_Helipad_Terminal`

With the settings below:

- **HelipadID:** ID of the helipad object (example: `100000`)
- **Preset:** The Orca preset name (`CnC_GDI_Orca`)
- **ArrowID:** The ID of the Daves Arrow (example: `100003`)
- **Cost:** `900` (Orca cost in Renegade)

[![Image16.jpg](images/Image16.jpg?resize=400)](images/Image16.jpg)

End result should look like this for the Helipad Terminal:

[![Image17.jpg](images/Image17.jpg?resize=400)](images/Image17.jpg)

---

## Finished Result

You're done!

[![Image18.jpg](images/Image18.jpg?resize=400)](images/Image18.jpg)

