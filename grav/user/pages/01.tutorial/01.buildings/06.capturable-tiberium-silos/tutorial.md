---
title: Capturable Tiberium Silos
summary: Guide to creating capturable Tiberium Silos
author: zunnie
skill: 2
forum_url: https://multiplayerforums.com/topic/707-capturable-tiberium-silos/
---
## Overview

This tutorial walks you through how to create capturable Tiberium Silos in your map using a custom preset, proper object settings, and the included script logic.

**Required Files:**
[CapturableTiberiumSilos.zip](files/CapturableTiberiumSilos.zip) (or at [MPF](https://multiplayerforums.com/applications/core/interface/file/attachment.php?id=4518))

---

## 1. Create the Base Preset

TEMP a preset into: `Object → Vehicle → Mounted`

Name it something like **`Capturable_GDI_Silo`**.

[![Image1.jpg](images/Image1.jpg?classes=img-maxsize)](images/Image1.jpg)

---

## 2. Assign the Physics Model

Go to the **Physics Model** tab.

- Click the folder icon next to **ModelName**
- Browse for `gtsilo.W3D`
- Click **Open**

[![Image2](images/Image2.jpg?classes=img-maxsize)](images/Image2.jpg)

Go to the **Settings** tab and configure the following:

- **Health:** `2`
- **HealthMax:** `300`
- **ShieldStrength:** `0.000`
- **ShieldMax:** `0.000`
- **Skin:** `CNCMCTSkin`
- **Shield Type:** `CNCMCTSkin`
- **DamagePoints:** `0.500`
- **DeathPoints:** `0.000`
- **TranslatedNameID:** `IDC_Enc_Struct_GDI_TiberiumSilo_Name` (found in the Strings Editor under the Enc category)

[![Image3.jpg](images/Image3.jpg?classes=img-maxsize)](images/Image3.jpg)

Still on the **Settings** tab set:

- **PlayerType:** `Unteamed`
- **Radar Blip Type:** `Stationary`

[![Image4.jpg](images/Image4.jpg?classes=img-maxsize)](images/Image4.jpg)

---

## 3. Add the Capturable Script

Go to the **Scripts** tab:

1. Click **Add…**
2. For **Type**, browse for:  
   `z_Capturable_TibSilo`
3. Then set:
    - **Name**: `Owner`
    - **Value**: `-2` (which means unteamed)

[![Image5.jpg](images/Image5.jpg?classes=img-maxsize)](images/Image5.jpg)

---

## 4. Place the Silo in Your Level

- Select your temp preset called `Capturable_GDI_Silo`
- Click **Make**
- The silo will now appear in your map
- Save your level and create your `.mix` file

Now people can play your map and capture the silo.

[![Image6.jpg](images/Image6.jpg?classes=img-maxsize)](images/Image6.jpg)

---

## 6. Creating the Nod Version

Repeat the entire process for the **Nod Tiberium Silo**, but set:
- **Team:** `Nod`

That’s all!

---

Greetz zunnie


