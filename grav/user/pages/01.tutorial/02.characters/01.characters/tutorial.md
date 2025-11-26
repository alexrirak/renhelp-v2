---
title: Characters
summary: Ever wondered how to make your own characters? Here you will find help.
type: [ RenX ]
author: Greg Hjelstrom (Westwood Studios)
skill: 2
---

### Creating a New Character Model

To create a new character model for Renegade, you will want to make sure it is compatible with one of the animation sets
that come with the game. In order to do this, you need to model your character on the same set of bones that we used to
create our characters. Some gmax files can be found in the character examples directory that will allow you to do this.
The file named `Male.gmax` contains the bones for a male character and the `Female.gmax` file contains the bones for a
female character. These files contain several elements that are critical to creating a working character.

### The Skeleton

Below is a picture of the male template with everything except the bones hidden. Remember that for a W3D model, a bone
is simply anything in the scene that has the "**Export Transform**" option enabled.

[![image-36-INDEX.1.jpg](images/image-36-INDEX.1.jpg?classes=img-maxsize)](images/image-36-INDEX.1.jpg)

For a character model, it is important that you observe the following limitations:

- For the base pose (frame 0), never move or rotate any of these bones. You may animate them in max to test your
character but never change them in the base pose.
- You cannot create new bones or remove existing bones or your model will be incompatible with the animations in the
game. This means that any meshes you add to the gmax file to create your character must have the "**Export Transform**"
option disabled.

### Collision Meshes

Characters use two kinds of collision detection in Renegade. There is a single box in the character that is named
`WorldBox` and is used to physically move the character around in the world. This object is flagged to be an `AABox` (
axis-aligned-box) and has physical collision enabled on it. There are also a set of meshes attached to the skeleton that
have projectile collision detection enabled. The names of these meshes tell the game engine how to scale the damage
applied to a character when a bullet hits them. Below is a screenshot of the projectile collision meshes for the male
character and their W3D settings:

[![image-36-INDEX.2.jpg](images/image-36-INDEX.2.jpg?classes=img-maxsize)](images/image-36-INDEX.2.jpg)

Notice that all of the projectile collision meshes are marked as hidden, and they do not have "**Export Transform**" enabled.
They are simply hierarchically connected to the bone they are supposed to move with.

### Modelling your character

To create your character model, you can put any number of meshes or "skinned meshes" into the file. Typically, we used a
skinned mesh for the body of each character and a skinned mesh for the head but there is nothing preventing you from
using rigid meshes that are hierarchically linked to the bones (like the collision meshes are) to make a more robotic
looking character. Characters may use any W3D material settings as well. Read the W3D documentation for more information
on how to model and texture your character.

### Exporting Your Character

When you export your character, you need to use the following export options:

[![image-36-INDEX.3.jpg](images/image-36-INDEX.3.jpg?classes=img-maxsize)](images/image-36-INDEX.3.jpg)

The key option here is the "**Export Using Existing Skeleton**" option. This tells the exporter to make your model use the
existing `S_A_Human.W3D` skeleton (which will work as long as you did not move, add, or delete any bones in your gmax
file). The `S_A_Human.W3D` file is for male characters and the `S_B_Human.W3D` file is for female characters.
Exporting your character in this way ensures that the game will be able to play all of the character animations on your
model.
