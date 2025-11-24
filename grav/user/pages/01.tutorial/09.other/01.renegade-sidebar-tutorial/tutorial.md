---
title: Renegade Sidebar Tutorial
summary: Now that scripts 4.1 allows you to use the sidebar stand-alone in a Renegade map, it's time to write a tutorial for how it's done.
type: [TT 4.1]
author: Mauler
skill: 2
---
You will want to download [Mauler's Renegade Sidebar](https://multiplayerforums.com/index.php?/files/file/624-maulers-renegade-sidebar/) for this tutorial.

***Now that scripts 4.1 allows you to use the sidebar stand-alone in a Renegade map, it's time to write a tutorial for how it's done.***

## Creating Sidebar Textures

The first thing you need to create are textures for the sidebar. (Included in the download link)

You need to create:
- A top half texture  
- A bottom half texture  
- Up/down arrow textures  

These can be shared or themed per team. The download link includes example textures.

## Creating the Required INI File

Then, you need to create an ini file. If your map is named `C&C_MyMap`, the file must be named: `C&C_MyMap_tt.ini`

In this file put something like this:

```
[General]
AlternateSelectEnabled=false
NewUnpurchaseableLogic=false
VehicleBuildingDisable=false
GDIUpArrowTexture=up.tga
GDIDownArrowTexture=down.tga
GDIBackgroundTexture1=gdisidebar_mau.tga
NODUpArrowTexture=up.tga
NODDownArrowTexture=down.tga
NODBackgroundTexture1=nodsidebar_mau.tga
Sidebar=true
```

Obviously the names of the textures should match the names you gave them when you created them.

### Optional: Add Sounds

```
SidebarSoundsEnabled=true
SidebarRefillSound=xyz
SidebarInfantrySound=xyz
SidebarVehicleSound=xyz
```

Sounds must be 2D sound presets created in LevelEdit  
(Replace `xyz` with the preset name)

These play whenever an item is purchased.

**Note:** The sidebar only shows the icon and cost — no overlay text. So you will need to either rely just on the pictures or you will need to add text to your icons.

**All players and the server must have scripts 4.1 installed** for this to work.

Also, the sidebar does not allow you to purchase beacons (unlike the PTs) so if you want beacons to be purchasable, you will have to add separate terminals to let you do that (there are plenty of scripts to make that happen)

---

# Part 2 — Making Items Disappear When Buildings Are Destroyed

Add at the end of your `C&C_MyMap_tt.ini`:

```
NewTechLevel=true
```

Then, in **LevelEdit**:

1. Open **Global Settings → Purchase Settings**
2. For each category:
   - Character Classes (GDI)
   - Character Classes (Nod)
   - Character Classes (Secret GDI)
   - Character Classes (Secret Nod)
   - Vehicles (GDI)
   - Vehicles (Nod)
   - Vehicles (Secret GDI)
   - Vehicles (Secret Nod)

   Create a temp preset copy (or if you already have one, edit it)

3. Update **Factory Building Type**:
   - Infantry → `Soldier Factory`
   - Vehicles → `Vehicle Factory`
   - Air Units → `Helipad` *(if following your helipad tutorial)*

4. For units you *don’t* want on the sidebar (e.g. the secret hidden extra vehicles), set **Object = none**.

The usual EXTRAS command will **not** work with the sidebar.

That should be all you need to do, no extra scripts are required, the engine logic behind `NewTechLevel=true` will do all the work of making the items vanish from the sidebar when the relevant building is destroyed.

---

