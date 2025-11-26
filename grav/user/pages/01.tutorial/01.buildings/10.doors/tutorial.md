---
title: Door Tutorial
summary: Explains how to create an animated, functional door
author: Läubi
type: [RenX, LevelEdit]
skill: 1
forum_url: https://multiplayerforums.com/topic/153-door-tutorial-author-l%C3%A4ubi/
---

## 1. Create the Door in GMax

Create your door in GMax. It may look something like this:

[![Door Model](images/image-12-DOOR.jpg?classes=img-maxsize)](images/image-12-DOOR.jpg)

Enable **W3D Collision Settings**:

[![W3D Collision Settings](images/image-12-W3D_OPTIONEN.jpg?classes=img-maxsize)](images/image-12-W3D_OPTIONEN.jpg)

---

## 2. Animate the Door

Click the **Animate** button in the lower-right corner:

[![Animate Button](images/image-12-DOOR_ANIMATE.jpg?classes=img-maxsize)](images/image-12-DOOR_ANIMATE.jpg)

Move the frame slider to **Frame 100**, then move the door into its **open** position:

[![Animation Frame Slider](images/image-12-DOOR_ANIM_LEISTE.jpg?classes=img-maxsize)](images/image-12-DOOR_ANIM_LEISTE.jpg)

Click the **Animate** button again to stop animating.

You can preview the animation using the **Play** button:

[![Animation Controls](images/image-12-DOOR_CONTROLL.jpg?classes=img-maxsize)](images/image-12-DOOR_CONTROLL.jpg)

---

## 3. Export the Door

Export your W3D file into your mod folder. The GMax portion is now complete.

[![Export Options](images/image-12-EXPORT_OPT.jpg?classes=img-maxsize)](images/image-12-EXPORT_OPT.jpg)

---

## 4. Create the Door Preset in CommandoEditor

Open **CommandoEditor** and create a new preset under **Tiles**:

[![Add Tiles Preset](images/image-12-ADD_TILES.jpg?classes=img-maxsize)](images/image-12-ADD_TILES.jpg)

Give your door a name:

[![Naming the Door](images/image-12-NAME.jpg?classes=img-maxsize)](images/image-12-NAME.jpg)

Switch to the **Physic Model** tab and configure the following options, using your exported W3D file as the model:

[![Physic Model Settings](images/image-12-TUER_OPT.jpg?classes=img-maxsize)](images/image-12-TUER_OPT.jpg)

If you want the door to open for empty vehicles (e.g., the GDI Weapons Factory), enable: `DoorOpensForVehicles`

Click **OK** to save—this is required for the next steps.

---

## 5. Configure Trigger Zones

Select your door and click **Mod**:

[![Mod Button](images/image-12-DOR_MOD.jpg?classes=img-maxsize)](images/image-12-DOR_MOD.jpg)

A new **Zones** tab will appear with two trigger zones. Double-click **TriggerZone1**:

[![Trigger Zone List](images/image-12-DOOR_TRIGGER.jpg?classes=img-maxsize)](images/image-12-DOOR_TRIGGER.jpg)

You will see this window:

[![Trigger Zone Setup](images/image-12-DOOR_ZONESET.jpg?classes=img-maxsize)](images/image-12-DOOR_ZONESET.jpg)

The green box represents the trigger zone.

Adjust its size and position using **Size Zone** and **Move Zone** so the zone sits *in front of* the door.  
Repeat this for **TriggerZone2**, but position it *behind* the door.

Once done, click **OK**.

Your door is now ready for use. Just click on **Make** and voliá!

---

## Additional Options

In the **Physic Models** tab, you can also:

- Set open/close sounds
- Adjust open/close timings
- Configure security door settings

[![Door Options](images/image-12-SET.jpg?classes=img-maxsize)](images/image-12-SET.jpg)
