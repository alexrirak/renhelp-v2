---
title: 4.1 Construction Yard Logic
summary: Guide explaining how Construction Yard controllers work in TT 4.1, including their repair logic, settings, and behavior for buildings and vehicles
type: [TT 4.1]
author: Mauler
skill: 1
forum_url: https://multiplayerforums.com/topic/2982-41-construction-yard-logic/
---

***To create a working construction yard, place an appropriate building on your terrain.  
Then create a building controller of type Construction Yard.***

The following settings are specific to Construction Yard objects:

```
RepairRate              (the rate to use when repairing buildings, in seconds)
VehicleRepairRate       (the rate to use when repairing buildings set up as vehicles, in seconds)
RepairAmount            (the amount to repair)
LowPowerRepairAmount    (the amount to repair when the power is down)
RepairWarhead           (the warhead to use to do the repairs)
```

## How It Works

Every `RepairRate` seconds, the Construction Yard applies repair “damage” to all buildings of the correct team that are still alive.

It uses:

- `RepairAmount` or `LowPowerRepairAmount`
- `RepairWarhead`

For vehicles, it uses `VehicleRepairRate`, and will repair **any vehicle whose Encyclopedia Type is set to “Building” in LevelEdit**.  
This was chosen because it provides a simple way to mark which objects the Construction Yard should repair.

**Note:**
- The Construction Yard will _not_ repair itself.

