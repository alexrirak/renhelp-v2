---
title: Obelisk Controller Placement
summary: Explains how to correctly position the Obelisk controller so that it fires from the proper location during gameplay.
author: zunnie
type: [LevelEdit]
skill: 1
forum_url: https://multiplayerforums.com/topic/267-obelisk-controller-placement-in-leveledit/
---

## 1. Place the Obelisk Controller
Place the Obelisk controller object on the Obelisk in your map as shown:

[![obelisk-placement](images/Image1.jpg?classes=img-maxsize)](images/Image1.jpg)

---

## 2. Adjust the Z Position
Open the **properties** of the Obelisk controller.

Subtract **41** from the current **Z value**, then enter the new value and click **OK**.

**Example Calculation:**

- Old Value: `28.009`
- Subtract: `41.000`
- **New Value:** `-12.991`

[![controller-properties](images/Image2.jpg?classes=img-maxsize)](images/Image2.jpg)

After adjusting the Z value, the controller will appear **underneath the map**.  
This is **normal** and expected.

[![controller-under-map](images/Image3.jpg?classes=img-maxsize)](images/Image3.jpg)

---

## 3. Done!
Your Obelisk will now properly fire from the **red crystal top** during gameplay.
