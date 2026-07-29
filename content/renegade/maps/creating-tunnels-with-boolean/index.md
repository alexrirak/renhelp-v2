---
title: Creating Tunnels with Boolean
tools:
- RenX
author: Pwn Call
skill: 2
forum_url: https://multiplayerforums.com/topic/1021-creating-tunnels-with-boolean/
---

City/Square Tunnel Tutorial

By Pwn Call (aka ESCALADE)

This tutorial is for making basic square or really basic shaped tunnels, just not including cave/rock type uneven tunnels — although some of the same basic principles can be used for those types of tunnels as well. When you are done they could look something like this:

[![Finished tunnel example](images/Image1.jpg)](images/Image1.jpg)

---

First I will do a small intro about the Snap to Grid tool, which in my opinion is the most useful function when making maps, that I just recently found out about. In the lower right corner of your RenX screen there is an area for Snap to Grid as well as a few other options, another really useful tool is the Snap Rotate tool which snaps to increments of 5 degrees by default. Look in the image below and the lower left icon with the magnet and the 3 is the Snap to Grid tool. It is default set to off so left click to turn it on. You will know your Grid is on when you see the cyan + sign displayed on the grid.

[![Snap to Grid toolbar icon](images/Image2.jpg)](images/Image2.jpg)
[![Cyan grid indicator](images/Image3.jpg)](images/Image3.jpg)

To change the increments of the snap to grid or snap to rotation simply right click on them and a menu will pop up, go to the Home Grid tab and then change the grid spacing to your desired amount, for this tutorial start the grid at .25. If your tunnel is significantly bigger, (for tanks for example) you can have the grid much larger like 1.

[![Home Grid tab with grid spacing settings](images/Image4.jpg)](images/Image4.jpg)

Ok first you need to start off in Gmax with an area that your tunnel will be cutting through, could be a mountain or building but generally it should have a flat surface at the entrance and exit because it will make it easier to make. I recommend using the Grid throughout the whole thing as it makes it much easier.

First this is my block I will put my tunnel through:

[![Block the tunnel will cut through](images/Image5.jpg)](images/Image5.jpg)

Now you need to create your tunnel. I have my view on the Left for this tunnel and simply make your box the size you want your tunnel, also note that you want some extra room on the sides and top because the dimensions of this box will be for the outside of your tunnel not the inside which you will see in a moment. Notice the blue line is the object I'm cutting through and the white is the new box that will be my tunnel.

[![Tunnel box compared to the object it will cut through](images/Image6.jpg)](images/Image6.jpg)

Also make sure that it is long enough to go all the way through your object so you can change the length or in my case since I made my tunnel from the side view the height.

[![Tunnel box extended through the object](images/Image7.jpg)](images/Image7.jpg)

Next what you will do is create another box that will cut out your tunnel. This box needs to be smaller than your first box on the sides and top but make sure it goes down below the bottom like in this next picture. This will be cut away from your original box leaving your tunnel to walk through, here you can change the width of your tunnel sides and ceiling by making this box smaller or larger.

[![Second box that will cut out the tunnel interior](images/Image8.jpg)](images/Image8.jpg)

Next change to the Top view again and make sure that the box goes all the way out past your original tunnel box so it cuts all the way through. If it isn't long enough change the length or height to make it long enough. It should look something like this.

[![Top view of the cutting box extending past the tunnel box](images/Image9.jpg)](images/Image9.jpg)

Here is the same thing in the perspective view:

[![Perspective view of both boxes](images/Image10.jpg)](images/Image10.jpg)

Next what we will do is customize our user interface to add the boolean tool to the toolbar which is useful for tunnels and other objects. Go to customize then user interface.

[![Customize User Interface menu](images/Image11.jpg)](images/Image11.jpg)

Then go to the toolbars tab and scroll down to boolean compound object.

[![Toolbars tab with Boolean Compound Object listed](images/Image12.jpg)](images/Image12.jpg)

Once you find it click and drag it up onto your toolbar, it doesn't have to be where I put it just somewhere for easy access.

[![Boolean tool dragged onto the toolbar](images/Image13.jpg)](images/Image13.jpg)

Now we will select our original tunnel box, mine is the outlined box in this picture:

[![Original tunnel box selected](images/Image14.jpg)](images/Image14.jpg)

Then we click on our new boolean tool icon.

[![Clicking the new Boolean tool icon](images/Image15.jpg)](images/Image15.jpg)

This will open up the bar on the side for the boolean tool options. I will explain the other ones at the end of this tutorial but for now it should be set on Move and then choose Pick Operand B.

[![Boolean tool options set to Move and Pick Operand B](images/Image16.jpg)](images/Image16.jpg)

So now while using the boolean tool after you hit pick operand B the next object you click on will be removed from the original object. So now click on the box that you want to remove from your tunnel and POOOF!! its gone and it took away from the other box and leaves you with a tunnel type object! If you accidentally pick on the wrong object no worry just hit undo and then select again.

[![Result after the boolean subtraction](images/Image17.jpg)](images/Image17.jpg)

After you use the boolean tool on an object always turn it into an editable mesh afterward, this way you can edit it or take another boolean out of it if you wish. Do this by right clicking on the object then Convert to Editable mesh.

> **Side note for the boolean tool (not necessary for this tunnel tutorial):**
> If you want to use boolean to make windows in a wall for example, you would do your first boolean then convert to editable mesh, then select boolean again for the next window then turn into editable mesh, and keep repeating this process for all of your items that are taking away from the original object.

[![Converting the boolean result to an editable mesh](images/Image18.jpg)](images/Image18.jpg)

Now notice it did not cut away from the building that the tunnel is going through, this is because only the tunnel was selected when doing the boolean tool. Now we will cut through this box as well so we can go through our tunnel.

So now change your grid spacing to half the size of what it previously was so in my case I will change it to .125 now.

[![Grid spacing changed to .125](images/Image19.jpg)](images/Image19.jpg)

Now we will make a box that will cut out of the building, your settings might be messed up from using the boolean tool so go to the create tab and then standard primitives to make another box.

[![Create tab with Standard Primitives selected](images/Image20.jpg)](images/Image20.jpg)

Make your next box in between the inside and outside of the tunnel and below the bottom. If it is inline with the inside edge of the tunnel then two textures will be in the same area and it will flash in between the two textures and look weird on your map.

[![New box positioned between the inside and outside of the tunnel](images/Image21.jpg)](images/Image21.jpg)

Again make sure it goes out past the length of the tunnel so it cuts through all the way so make it bigger like in the second image here:

[![Box before extending it past the tunnel](images/Image22.jpg)](images/Image22.jpg)
[![Box extended past the tunnel](images/Image23.jpg)](images/Image23.jpg)

Now select the building that your tunnel will go through, in my scene the blue square.

[![Building selected, shown as the blue square](images/Image24.jpg)](images/Image24.jpg)

Now go to the boolean tool.

[![Opening the Boolean tool again](images/Image25.jpg)](images/Image25.jpg)

And again move should be checked and the pick operand B.

[![Move and Pick Operand B selected again](images/Image26.jpg)](images/Image26.jpg)

Then click on the part to take out, again in my case the green square. And there your tunnel should work now! And don't forget to turn the building back into an editable mesh!

[![Part to remove, shown as the green square](images/Image27.jpg)](images/Image27.jpg)
[![Finished cut with the building converted to an editable mesh](images/Image28.jpg)](images/Image28.jpg)

Alright this is where the basic tunnel is finished, if you want your entire tunnel to be the same texture just add the texture you want to it and create a plane for the floor. If you want different textures for the walls and ceiling then _do not_ add a texture to it and continue reading below.

---

## Advanced Tunnel Textures

If you want the sides of the tunnel, the roof of the tunnel and the outside of the tunnel to be different textures then follow these steps!

Before you start this make sure there are no textures applied to your tunnel at all first, otherwise it could mess things up and will be harder to add the textures to different parts of your tunnel.

Your tunnel should be an editable mesh, if it isn't right click on it and turn it to an editable mesh.

Then under the modify tab on the right click on editable mesh and then the polygon icon.

[![Editable Mesh polygon sub-object selected](images/Image29.jpg)](images/Image29.jpg)

Next where it says Perspective in the upper left part of the Grid, right click on it and turn on edged faces if they weren't on. This helps you see which parts of the tunnel you have selected.

[![Edged faces enabled in the viewport](images/Image30.jpg)](images/Image30.jpg)

Now that you can see better what you are selecting, select both of the walls of the tunnel like in this picture, see how they are outlined in red now.

[![Both tunnel walls selected and outlined in red](images/Image31.jpg)](images/Image31.jpg)

Now right click on the selected area and go over to detach and click it. A smaller window will pop up — if you want to name it something different than what is in the blank you can, but it is not necessary. Neither box should be checked and hit ok to detach it.

[![Detach dialog for the selected walls](images/Image32.jpg)](images/Image32.jpg)

Now do the same thing for the ceiling, select it and then detach it.

[![Detaching the ceiling mesh](images/Image33.jpg)](images/Image33.jpg)

Now you should have 3 separate meshes for your tunnel, be careful because they can be moved separately now as well. Texture each of them differently to make your tunnels look more realistic like the ones I show below.

[![Tunnel with separately textured walls, ceiling, and floor](images/Image34.jpg)](images/Image34.jpg)

A good idea once you texture them is to group them by selecting them all and then go to the Group menu and then Group. This way you can clone them and move them to other places if you wish. You can also change the shapes of your tunnels by converting them to editable mesh and then moving one end to make them go up or down. Play around with it a little bit and you can do some pretty neat things with the boolean tool. If you have any questions post them up and I'll do my best to answer them!
