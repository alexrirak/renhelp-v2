---
title: Buildings
summary: Explains how buildings are constructed
author: Greg Hjelstrom (Westwood Studios)
type: [RenX, LevelEdit]
skill: 1
forum_url: https://multiplayerforums.com/topic/151-buildings-author-greg-hjelstrom/
---

Buildings in *Command & Conquer: Renegade* are constructed from terrain meshes and static animated objects that work together as **Building Aggregates**. A logical **Building Controller** is placed in Leveledit, and it automatically gathers nearby meshes whose names match the controller’s prefix. These meshes are then treated as parts of the same building for damage and animation purposes.

---

## Building Controller

Building controllers are created in Leveledit under: `Presets → Buildings`

The controller defines a building’s game-logic attributes, such as:

- Total health
- Shield type
- Animation state
- MeshPrefix (the most important field)

The **MeshPrefix** determines which meshes the controller associates with the building. Any mesh whose name begins with the same prefix will receive damage on behalf of the building.
All “BuildingAggregates” in the vicinity whose names match this prefix will be animated according to the damage state of the building

---

## Exterior Meshes

Meshes that are part of the exterior of a building should include the `^` symbol in the mesh name.

For example, an exterior mesh for the gdi weapon factory might be named: `mgwep^011`

Where:
- `mgwep` = building prefix
- `^` = exterior mesh
- `011` = unique mesh number

---

## Interior Meshes

Meshes that are part of the interior of a building should include the `#` symbol in the mesh name.

Example: `mgwep#004`

> **Note:** All W3D mesh names must be under 16 characters

When a bullet hits either an interior or exterior mesh of the building, damage will be applied to the logical building controller.

---

## Building Aggregates

A **Building Aggregate** is a special type of animated static object (tile) that plays different segments of its animation depending on the damage state of the building controlling it. 
These are set up in: `Presets → Tiles` in LevelEdit. The model and preset for a building aggregate should contain the mesh prefix that the building controller expects.

To make a tile which is a building aggregate, you create a tile and select `BuildingAggregate` as its physics model type. 

There are many settings in the building aggregate that can be used to do things that the shipped version of Renegade does not currently do.  For example, you can create truly 
destructable buildings by simply making a huge destruction animation and setting it up as a building aggregate.  

Have Fun!





