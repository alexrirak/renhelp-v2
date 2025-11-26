---
title: MCT and PCT Setup
summary: Explains how to properly configure MCTs and PCTs
author: Bumpaneer
type: [RenX, LevelEdit]
skill: 2
forum_url: https://multiplayerforums.com/topic/155-mct-and-pct-setup-author-bumpaneer/
---

## Overview
This guide explains how to properly configure **Master Control Terminals (MCTs)** and **Purchase Terminals (PCTs)** for use in RenX and LevelEdit.

You can download the assets here:
- **MCTs:** [mct.zip](files/mct.zip) (or at <a href="http://renhelp.multiplayerforums.com/downloads/mct.zip">MPF</a>)
- **PCTs:** [pct.zip](files/pct.zip) (or at <a href="http://renhelp.multiplayerforums.com/downloads/pct.zip">MPF</a>)

These terminals were developed by **Bumpaneer**, with help from **Abjab** (for MCTs), **AircraftKiller** (for PCTs) and **StoneRook**. You may use them in any project as long as you credit Bumpaneer.

> **Note:**  
> These instructions cover **MCT setup only**.  
> For **PCTs**, follow the same steps **but do NOT check the `IsMCT` box.**

---

## 1. Prepare the MCT in RenX
1. Open one of the provided files in **RenX**.
2. Select a mesh and open the **Modify** tab on the right hand side of the screen (blue arc icon).
3. Replace the mesh name prefix **“prefi”** with your building’s prefix (max 5 letters).
    - GDI buildings typically start with `mg`
    - Nod buildings typically start with `mn`
4. Update every mesh beginning with `prefi`, but don’t rename anything else.
5. You may change textures if desired.

[![Step 1](images/image-56-STEP_1.jpg?classes=img-maxsize)](images/image-56-STEP_1.jpg)

---

## 2. Export the MCT for use in Level Edit
1. Go to **File → Export**.
2. Give the file a name. A good convention is the format:  
   **`prefi_mct`** (replace `prefi` with the prefix for your building).
3. Save it into your mod’s main folder.
4. On the next screen that pops up, select:  
   **Hierarchical Animated Model**
5. Click **OK**.
6. The export should complete with no warnings or errors.

[![Step 2](images/image-56-STEP_2.jpg?classes=img-maxsize)](images/image-56-STEP_2.jpg)

---

## 3. Create the Tile in LevelEdit and Enabling Physics
1. Open **LevelEdit** and select your mod.
2. Browse to:
    - `mgpwr_ag_3n` for **GDI**
    - `mnpwr_ag_3n` for **Nod**
3. Single-click the file and press **Temp**.
4. Give the new tile a name (`prefi_mct` format works well here).

[![Step 3](images/image-56-STEP_3.jpg?classes=img-maxsize)](images/image-56-STEP_3.jpg)


1. Open the **Physics Model** tab (second tab).
2. Scroll until you find `IsMCT` and check the box.
3. Press **OK** to create the tile.
4. You can drag this tile under another menu if you want to organize your list.
5. To place the MCT in your map, select the tile and click **Make**, then you will be able to highlight the MCT and drag it to where you want it.

[![Step 4](images/image-56-STEP_4.jpg?classes=img-maxsize)](images/image-56-STEP_4.jpg)

---

I hope these instructions have been helpful, and good luck with all your projects.

**~Bumpaneer**
